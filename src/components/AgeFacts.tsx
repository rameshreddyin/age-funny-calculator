
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Zap, Globe, Clock } from "lucide-react";

interface Fact {
  text: string;
  category: string;
}

interface AgeFactsProps {
  facts: Fact[];
}

const AgeFacts: React.FC<AgeFactsProps> = ({ facts }) => {
  // Map categories to icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Technology":
        return <Zap className="h-5 w-5 text-amber-500" />;
      case "Social Media":
        return <Globe className="h-5 w-5 text-blue-500" />;
      case "Population":
        return <Globe className="h-5 w-5 text-green-500" />;
      case "Business":
        return <Zap className="h-5 w-5 text-purple-500" />;
      case "Generation":
        return <Clock className="h-5 w-5 text-rose-500" />;
      default:
        return <Lightbulb className="h-5 w-5 text-amber-500" />;
    }
  };

  if (!facts.length) return null;

  return (
    <div className="w-full mt-8 md:mt-0 grid gap-4 px-4 sm:px-6 md:px-4 md:grid-cols-1 lg:grid-cols-2">
      {facts.map((fact, index) => (
        <Card 
          key={index} 
          className="overflow-hidden backdrop-blur-sm bg-card/90 border hover:shadow-md transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-5 sm:p-6">
            <div className="flex gap-4">
              <div className="mt-1 shrink-0">{getCategoryIcon(fact.category)}</div>
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground mb-1.5">
                  {fact.category}
                </p>
                <p className="text-sm md:text-base">{fact.text}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AgeFacts;
