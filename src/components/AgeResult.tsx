
import React from "react";
import { CalendarDays, Calendar } from "lucide-react";
import ProgressRing from "./ProgressRing";
import { AgeData, formatAgeString } from "@/utils/calculateAge";
import { Company } from "@/data/companies";
import { format } from "date-fns";

interface AgeResultProps {
  company: Company;
  age: AgeData;
}

const AgeResult: React.FC<AgeResultProps> = ({ company, age }) => {
  // Calculate the progress percentage for the current millennium/century
  const calculateProgress = () => {
    const startOfCentury = new Date();
    startOfCentury.setFullYear(Math.floor(startOfCentury.getFullYear() / 100) * 100, 0, 1);
    
    const endOfCentury = new Date(startOfCentury);
    endOfCentury.setFullYear(endOfCentury.getFullYear() + 100);
    
    const totalDaysInCentury = Math.floor((endOfCentury.getTime() - startOfCentury.getTime()) / (1000 * 60 * 60 * 24));
    const launchDate = new Date(company.launchDate);
    
    // If launched before this century, use the start of century
    const effectiveLaunchDate = launchDate < startOfCentury ? startOfCentury : launchDate;
    
    const daysSinceLaunch = Math.floor((new Date().getTime() - effectiveLaunchDate.getTime()) / (1000 * 60 * 60 * 24));
    const percentOfCentury = (daysSinceLaunch / totalDaysInCentury) * 100;
    
    return Math.min(percentOfCentury, 100); // Cap at 100%
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 text-center animate-fade-in px-4 sm:px-0">
      <div className="glass-morphism rounded-2xl border shadow-md p-6 sm:p-8 mb-6">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
          {company.category}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{company.name}</h2>
        
        <div className="flex justify-center mb-5">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 mr-2" />
            <span>Founded: {format(new Date(company.launchDate), "MMMM d, yyyy")}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <ProgressRing progress={calculateProgress()} size={150} />
        </div>
        
        <div className="text-center mb-5">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Current Age
          </div>
          <div className="text-2xl sm:text-3xl font-bold">
            {formatAgeString(age)}
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {company.description}
        </div>
      </div>
    </div>
  );
};

export default AgeResult;
