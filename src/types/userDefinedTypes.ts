export type RetirementSummaryPropsType = {
  headline: string;
  headlineTextColor?: string;
  currency: string;
  retirementFundPerMonth: number;
  pensionPot: number;
  monthlyContribution: number;
};

export interface RetirementCalculatorFormDataType {
  name: string;
  yearsLeftToRetirement: [number, number];
  monthlyPensionContribution: number;
  monthlyIncomeAfterRetirement: number;
  currentRetirementSavings: number;
}

export type RetirementCalculatorFormPropsType = {
  currencySymbol: string;
};
