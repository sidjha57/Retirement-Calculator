/**
 * Calculates the approximate number of days corresponding to the given number of years.
 * @param years - The number of years to convert to days.
 * @returns The calculated number of days.
 */
export function CalculateDaysFromYears(years: number): number {
  // Define the average number of days in a year
  const daysInYear = 365;

  // Calculate the approximate number of days, accounting for leap years
  const days = Math.floor(years * daysInYear + (years / 4 - years / 100 + years / 400));

  return days;
}
