import {
  RetirementCalculatedSummaryType,
  RetirementCalculatorFormDataType,
} from "../types/userDefinedTypes";
import {
  monthlyContributionRequired,
  MonthlyIncome,
  EstimatedPensionPotRequired,
  EstimatedPensionPotCurrent,
} from "./retirementSummaryCalculations";

/**
 * Calculates and returns an updated retirement summary based on the provided form data.
 * @param formData - The form data containing relevant retirement information.
 * @returns The updated retirement summary.
 */
export const GetUpdatedCalculatedSummary = (
  formData: RetirementCalculatorFormDataType
): RetirementCalculatedSummaryType => {
  // Destructure relevant data from formData
  const {
    yearsLeftToRetirement,
    monthlyPensionContribution: monthlyContribution,
    monthlyIncomeAfterRetirement,
    currentRetirementSavings,
  } = formData;

  // Constants for average compounded interest rate and annual inflation rate
  const averageCompoundedBankAnnualInterestRate = 0.4; // This value would typically come from a configuration source
  const averageCompoundedAnnualInflationRate = 4.4;

  // Calculate current and desired pension pots, current monthly income, and required monthly contribution
  const currentPensionPot = EstimatedPensionPotCurrent(
    currentRetirementSavings,
    monthlyContribution,
    yearsLeftToRetirement.retirementAge - yearsLeftToRetirement.currentAge,
    averageCompoundedBankAnnualInterestRate
  );

  const desiredPensionPot = EstimatedPensionPotRequired(
    monthlyIncomeAfterRetirement,
    yearsLeftToRetirement.retirementAge,
    averageCompoundedAnnualInflationRate
  );

  const currentMonthlyIncome = MonthlyIncome(
    currentPensionPot,
    yearsLeftToRetirement.retirementAge,
    averageCompoundedBankAnnualInterestRate
  );

  const requiredMonthlyContribution = monthlyContributionRequired(
    desiredPensionPot,
    90 - yearsLeftToRetirement.retirementAge,
    averageCompoundedBankAnnualInterestRate
  );

  // Return the updated retirement summary
  return {
    monthlyIncome: {
      current: currentMonthlyIncome,
      desired: monthlyIncomeAfterRetirement,
    },
    estimatedPensionPot: {
      current: currentPensionPot,
      desired: desiredPensionPot,
    },
    monthlyContribution: {
      current: monthlyContribution,
      required: requiredMonthlyContribution,
    },
  };
};
