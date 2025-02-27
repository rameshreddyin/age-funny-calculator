
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Company, searchCompanies } from "@/data/companies";

interface CompanySearchProps {
  onSelect: (company: Company) => void;
}

const CompanySearch: React.FC<CompanySearchProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const results = searchCompanies(searchTerm);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      onSelect(suggestions[0]);
    }
  };

  const handleSuggestionClick = (company: Company) => {
    setSearchTerm(company.name);
    setSuggestions([]);
    onSelect(company);
  };

  return (
    <div className="w-full max-w-md mx-auto relative animate-fade-in">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search for a company..."
          className="pr-10 h-14 text-lg rounded-xl border-2 shadow-sm transition-all duration-200 focus-visible:border-primary/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Search className="h-5 w-5" />
        </Button>
      </form>

      {suggestions.length > 0 && isFocused && (
        <div
          ref={suggestionsRef}
          className="absolute w-full mt-1 bg-card border rounded-lg shadow-lg z-10 overflow-hidden animate-scale-in"
        >
          {suggestions.map((company) => (
            <div
              key={company.name}
              className="p-3 cursor-pointer hover:bg-accent transition-colors flex items-center justify-between group"
              onClick={() => handleSuggestionClick(company)}
            >
              <div>
                <p className="font-medium">{company.name}</p>
                <p className="text-sm text-muted-foreground">{company.category}</p>
              </div>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Select
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanySearch;
