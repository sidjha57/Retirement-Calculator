export function CalculateDaysFromYears(years: number): number {
    const daysInYear = 365;
  
    const days = Math.floor(years * daysInYear + (years / 4 - years / 100 + years / 400));
  
    return days;
  }