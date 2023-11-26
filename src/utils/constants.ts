import { CurrencyCodeType, CurrencyInfoType, CurrencySymbolEnum, LocaleEnum, MenuInfoType, MenuTitleType, UserType } from "../types/userDefinedTypes"
import { nanoid } from "nanoid"

export const MENUS: Record<MenuTitleType, MenuInfoType> = {
  DASHBOARD: { id: nanoid(), icon: "home", link: "/home" },
  RETIREMENT_PLANNER: {
    id: nanoid(),
    
    link: "/retirement-plan",
    icon: "crop_square",
    gap: true,
    textColor: "text-[#4c8495]", // blue
  },
  OBJECTIVE_MAPPING:{
    id: nanoid(),
    icon: "crop_square",
    textColor: "text-[#d18c70]", // orange
  },
  SOLUTION_FINDER:{
    id: nanoid(),
    icon: "crop_square",
    textColor: "text-[#daab4d]", // yellow
  },
  INVESTMENT_SELECTION:{
    id: nanoid(),
    icon: "crop_square",
    textColor: "text-[#a094a0]", // purple
  },
  DISCOVERY:{
    id: nanoid(),
    icon: "crop_square",
    textColor: "text-[#aec8c5]", // sky-blue
  },
  RECOMMENDATION:{
    id: nanoid(),
    icon: "crop_square",
    textColor: "text-[#519152]", // green
  },
  SETTINGS: {
    id: nanoid(),
    icon: "settings",
    gap: true,
  },
}


export const USER: UserType = {
  name: "John Smith",
  profile: "Financial Advisor",
}

export const CURRENCIES: Record<CurrencyCodeType, CurrencyInfoType> = {
  INR: {
    symbol: CurrencySymbolEnum.INR,
    locale: LocaleEnum.INR,
    averageCompoundedBankAnnualInterestRate: 4.0,
    averageCompoundedInflationAnnualRate: 6.7,
  },
  ZAR: {
    symbol: CurrencySymbolEnum.ZAR,
    locale: LocaleEnum.ZAR,
    averageCompoundedBankAnnualInterestRate: 6.5, 
    averageCompoundedInflationAnnualRate: 5.2,
  },
  AED: {
    symbol: CurrencySymbolEnum.AED,
    locale: LocaleEnum.AED,
    averageCompoundedBankAnnualInterestRate: 0.8,
    averageCompoundedInflationAnnualRate: 1.62,
  },
  USD: {
    symbol: CurrencySymbolEnum.USD,
    locale: LocaleEnum.USD,
    averageCompoundedBankAnnualInterestRate: 0.6,
    averageCompoundedInflationAnnualRate: 3.8,
  },
  GBP: {
    symbol: CurrencySymbolEnum.GBP,
    locale: LocaleEnum.GBP,
    averageCompoundedBankAnnualInterestRate: 3.5,
    averageCompoundedInflationAnnualRate: 5.2,
  },
  CHF: {
    symbol: CurrencySymbolEnum.CHF,
    locale: LocaleEnum.CHF,
    averageCompoundedBankAnnualInterestRate: 0.8,
    averageCompoundedInflationAnnualRate: 2.4,
  }
}

console.log(CURRENCIES)