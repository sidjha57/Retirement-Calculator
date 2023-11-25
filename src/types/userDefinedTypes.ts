/**
 * Represents the structure of the 'YearsLeftToRetirementType' data type.
 */
export interface YearsLeftToRetirementType {
  currentAge: number;
  retirementAge: number;
}

/**
 * Represents the structure of the 'RetirementMonthlyIncomeType' data type.
 */
export interface RetirementMonthlyIncomeType {
  current: number;
  desired: number;
}

/**
 * Represents the structure of the 'RetirementEstimatedPensionPotType' data type.
 */
export interface RetirementEstimatedPensionPotType {
  current: number;
  desired: number;
}

/**
 * Represents the structure of the 'RetirementMonthlyContributionType' data type.
 */
export interface RetirementMonthlyContributionType {
  current: number;
  required: number;
}

/**
 * Represents the structure of the 'RetirementCalculatedSummaryType' data type.
 */
export interface RetirementCalculatedSummaryType {
  monthlyIncome: RetirementMonthlyIncomeType;
  estimatedPensionPot: RetirementEstimatedPensionPotType;
  monthlyContribution: RetirementMonthlyContributionType;
}

/**
 * Represents the structure of the 'RetirementCalculatorFormDataType' data type.
 */
export interface RetirementCalculatorFormDataType {
  name: string;
  yearsLeftToRetirement: YearsLeftToRetirementType;
  monthlyPensionContribution: number;
  monthlyIncomeAfterRetirement: number;
  currentRetirementSavings: number;
}

/**
 * Represents the properties expected by the RetirementCalculatorForm component.
 */
export interface RetirementCalculatorFormPropsType {
  currencySymbol: string;
  retirementFormState: RetirementCalculatorFormDataType;
  dispatch: React.Dispatch<RetirementFormActionType>;
  calculatedSummary: RetirementCalculatedSummaryType;
  setCalculatedSummary: React.Dispatch<React.SetStateAction<RetirementCalculatedSummaryType>>;
}

/**
 * Represents the properties expected by the RetirementSummary component.
 */
export interface RetirementSummaryPropsType {
  headline: string;
  headlineTextColor?: string;
  monthlyContributionRequired?: boolean;
  currency: string;
  retirementFundPerMonth: number;
  pensionPot: number;
  monthlyContribution: number;
}

/**
 * Represents the properties expected by the BarChart component.
 */
export interface BarChartPropsType {
  currencySymbol: string;
  height1: number;
  height2: number;
}

export interface AgeRangeSliderPropsType {
  yearsLeftToRetirement: YearsLeftToRetirementType;
  dispatch: React.Dispatch<RetirementFormActionType>;
}

/**
 * Represents the properties expected by the Action of retirementformReducer.
 */
export type RetirementFormActionType =
  | { type: RetirementFormReducerAction.UPDATE_DOUBLE_SLIDER; payload: number | number[] }
  | { type: RetirementFormReducerAction.UPDATE_SLIDER; payload: number | number[] }
  | { type: RetirementFormReducerAction.UPDATE_NAME; payload: string }
  | { type: RetirementFormReducerAction.UPDATE_AMOUNT; payload: { fieldName: string; amount: string } }
  | { type: RetirementFormReducerAction.UPDATE_AGE; payload: { fieldName: string; age: number } };

/**
 * Enumeration for actions of retirementformReducer.
 */
export enum RetirementFormReducerAction {
  UPDATE_DOUBLE_SLIDER = "UPDATE_DOUBLE_SLIDER",
  UPDATE_SLIDER = "UPDATE_SLIDER",
  UPDATE_AGE = "UPDATE_AGE",
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_AMOUNT = "UPDATE_AMOUNT",
}

/**
 * Represents the structure of the 'MenuType' data type.
 */
export interface MenuType {
  id: string;
  title: string;
  icon?: string;
  link?: string;
  gap?: boolean;
  textColor?: string;
}

/**
 * Represents the structure of the 'MenuType' data type.
 */
export interface UserType {
  name: string;
  profile: string; 
}