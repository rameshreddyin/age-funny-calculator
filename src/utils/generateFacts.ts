
import { AgeData } from "./calculateAge";

interface Fact {
  text: string;
  category: string;
}

// Facts that scale with the company's age
export const generateFacts = (company: string, age: AgeData): Fact[] => {
  const facts: Fact[] = [];
  const { years, months, days, totalDays } = age;
  
  // Scale-based facts
  facts.push({
    text: `${company} is older than ${Math.floor(totalDays * 0.1)} popular mobile apps launched since.`,
    category: "Technology"
  });
  
  facts.push({
    text: `During ${company}'s lifetime, approximately ${(totalDays * 2.7).toLocaleString()} social media posts have been shared every second.`,
    category: "Social Media"
  });
  
  facts.push({
    text: `Since ${company} launched, the world population has increased by roughly ${Math.round(totalDays * 0.00002 * 100) / 100} billion people.`,
    category: "Population"
  });
  
  facts.push({
    text: `If ${company} were a tree, it would be roughly ${Math.round(years * 2)} feet tall by now.`,
    category: "Nature"
  });
  
  // Age-specific facts
  if (years < 5) {
    facts.push({
      text: `${company} is still a startup by many standards, younger than the average smartphone lifespan.`,
      category: "Business"
    });
  } else if (years < 10) {
    facts.push({
      text: `${company} has survived longer than 70% of startups, which typically fail within 5 years.`,
      category: "Business"
    });
  } else if (years < 20) {
    facts.push({
      text: `${company} has been around for the entire lifetime of Gen Alpha (born after 2010).`,
      category: "Generation"
    });
  } else {
    facts.push({
      text: `${company} has witnessed the complete evolution of social media, smartphones, and cloud computing.`,
      category: "Technology"
    });
  }
  
  // Tech facts
  if (years >= 15) {
    facts.push({
      text: `When ${company} started, most people were still using flip phones and dial-up internet.`,
      category: "Technology"
    });
  } else if (years >= 5) {
    facts.push({
      text: `${company} has survived through approximately ${Math.floor(years * 1.2)} major smartphone generations.`,
      category: "Technology"
    });
  }
  
  // Internet-specific facts
  facts.push({
    text: `In internet time, ${company} is approximately ${Math.floor(years * 7)} "internet years" old, since technology evolves 7 times faster than traditional industries.`,
    category: "Technology"
  });
  
  // Return randomly selected facts (to avoid showing the same facts every time)
  return shuffleArray(facts).slice(0, 4);
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
