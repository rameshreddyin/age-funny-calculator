
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
    <div className="w-full max-w-none mx-auto">
      <div className="mb-8 md:mb-12 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
          Company Age Calculator
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover how old your favorite tech companies and apps are, with interesting facts.
        </p>
      </div>

      {!selectedCompany ? (
        <div className="px-3 md:px-0 max-w-md mx-auto">
          <CompanySearch onSelect={handleCompanySelect} />
        </div>
      ) : (
        <div className="md:grid md:grid-cols-12 md:gap-8 w-full">
          <div className="md:col-span-4 lg:col-span-3">
            {ageData && <AgeResult company={selectedCompany} age={ageData} />}
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <AgeFacts facts={facts} />
          </div>
          
          <div className="md:col-span-12 mt-8 md:mt-10 text-center pb-4">
            <button
              onClick={resetSelection}
              className="px-4 py-2 text-sm md:text-base text-primary border border-primary/20 rounded-full hover:bg-primary/5 transition-colors"
            >
              Search for another company
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
