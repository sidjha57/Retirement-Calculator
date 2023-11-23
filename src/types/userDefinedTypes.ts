export type RetirementSummaryPropsType = {
  headline: string;
  headlineTextColor?: string;
  currency: string;
  retirementFundPerMonth: number;
  pensionPot: number;
  monthlyContribution: number;
};

export type YearsLeftToRetirementType = {
  currentAge: number;
  retirementAge: number;
};

export type RetirementCalculatorFormDataType = {
  name: string;
  yearsLeftToRetirement: YearsLeftToRetirementType
  monthlyPensionContribution: number;
  monthlyIncomeAfterRetirement: number;
  currentRetirementSavings: number;
}

export type RetirementCalculatorFormPropsType = {
  currencySymbol: string;
  formData: RetirementCalculatorFormDataType;
  setFormData: any;
  calculatedSummary: RetirementCalculatedSummary;
  setCalculatedSummary: any;
};

export interface RetirementMonthlyIncomeType {
  current: number;
  desired: number;
}

export interface RetirementEstimatedPensionPot {
  current: number;
  desired: number;
}

export interface RetirementMonthlyContribution {
  current: number;
  required: number;
}

export interface RetirementCalculatedSummary {
  monthlyIncome: RetirementMonthlyIncomeType;
  estimatedPensionPot: RetirementEstimatedPensionPot;
  monthlyContribution: RetirementMonthlyContribution;
}

export interface BarChartProps {
  currencySymbol: string;
  height1: number;
  height2: number;
}