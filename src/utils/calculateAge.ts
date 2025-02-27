
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

export interface AgeData {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

export const calculateAge = (launchDate: string): AgeData => {
  const launch = new Date(launchDate);
  const now = new Date();
  
  const years = differenceInYears(now, launch);
  
  // Calculate months after accounting for years
  const launchPlusYears = new Date(launch);
  launchPlusYears.setFullYear(launch.getFullYear() + years);
  const months = differenceInMonths(now, launchPlusYears);
  
  // Calculate days after accounting for years and months
  const launchPlusYearsAndMonths = new Date(launchPlusYears);
  launchPlusYearsAndMonths.setMonth(launchPlusYears.getMonth() + months);
  const days = differenceInDays(now, launchPlusYearsAndMonths);
  
  // Calculate total days for percentage calculations
  const totalDays = differenceInDays(now, launch);
  
  return {
    years,
    months,
    days,
    totalDays
  };
};

export const formatAgeString = (age: AgeData): string => {
  const parts = [];
  
  if (age.years > 0) {
    parts.push(`${age.years} ${age.years === 1 ? 'year' : 'years'}`);
  }
  
  if (age.months > 0) {
    parts.push(`${age.months} ${age.months === 1 ? 'month' : 'months'}`);
  }
  
  if (age.days > 0 || parts.length === 0) {
    parts.push(`${age.days} ${age.days === 1 ? 'day' : 'days'}`);
  }
  
  if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return `${parts[0]} and ${parts[1]}`;
  } else {
    return `${parts[0]}, ${parts[1]}, and ${parts[2]}`;
  }
};
