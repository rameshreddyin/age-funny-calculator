
import React, { useState } from "react";
import CompanySearch from "./CompanySearch";
import AgeResult from "./AgeResult";
import AgeFacts from "./AgeFacts";
import { Company } from "@/data/companies";
import { AgeData, calculateAge } from "@/utils/calculateAge";
import { generateFacts } from "@/utils/generateFacts";
import { useToast } from "@/hooks/use-toast";

const AgeCalculator: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [ageData, setAgeData] = useState<AgeData | null>(null);
  const [facts, setFacts] = useState<Array<{ text: string; category: string }>>([]);
  const { toast } = useToast();

  const handleCompanySelect = (company: Company) => {
    const age = calculateAge(company.launchDate);
    const generatedFacts = generateFacts(company.name, age);
    
    setSelectedCompany(company);
    setAgeData(age);
    setFacts(generatedFacts);
    
    toast({
      title: `${company.name} selected!`,
      description: `Founded on ${new Date(company.launchDate).toLocaleDateString()}`,
      duration: 3000,
    });
  };

  const resetSelection = () => {
    setSelectedCompany(null);
    setAgeData(null);
    setFacts([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Company Age Calculator
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover how old your favorite tech companies and apps are, with interesting facts.
        </p>
      </div>

      {!selectedCompany ? (
        <CompanySearch onSelect={handleCompanySelect} />
      ) : (
        <>
          {ageData && <AgeResult company={selectedCompany} age={ageData} />}
          
          <AgeFacts facts={facts} />
          
          <div className="mt-8 text-center">
            <button
              onClick={resetSelection}
              className="text-sm text-muted-foreground hover:text-primary underline transition-colors"
            >
              Search for another company
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AgeCalculator;
