import { CurrencyCodeType, CurrencyInfoType, MenuType, UserType } from "../types/userDefinedTypes"
import shortid from "shortid"

export const MENUS: MenuType[] = [
  { id: shortid.generate(), title: "Dashboard", icon: "home", link: "/home" },
  {
    id: shortid.generate(),
    title: "Retirement Planner",
    link: "/retirement-plan",
    icon: "crop_square",
    gap: true,
    textColor: "text-[#4c8495]", // blue
  },
  {
    id: shortid.generate(),
    title: "Objective Mapping ",
    icon: "crop_square",
    textColor: "text-[#d18c70]", // orange
  },
  {
    id: shortid.generate(),
    title: "Solution Finder",
    icon: "crop_square",
    textColor: "text-[#daab4d]", // yellow
  },
  {
    id: shortid.generate(),
    title: "Risk Profiler",
    icon: "crop_square",
    textColor: "text-[#a094a0]", // purple
  },
  {
    id: shortid.generate(),
    title: "Investment Selection",
    icon: "crop_square",
    textColor: "text-[#aec8c5]", // sky-blue
  },
  {
    id: shortid.generate(),
    title: "Recommendation",
    icon: "crop_square",
    textColor: "text-[#519152]", // green
  },
  {
    id: shortid.generate(),
    title: "Settings",
    icon: "settings",
    gap: true,
  },
]

export const USER: UserType = {
  name: "John Smith",
  profile: "Financial Advisor",
}

export const CURRENCIES: Record<CurrencyCodeType, CurrencyInfoType> = {
  INR: {
    symbol: '₹',
    locale: 'en-IN',
    averageCompoundedBankAnnualInterestRate: 4.0,
    averageCompoundedInflationAnnualRate: 6.7,
  },
  ZAR: {
    symbol: 'R',
    locale: 'en-ZA',
    averageCompoundedBankAnnualInterestRate: 6.5, 
    averageCompoundedInflationAnnualRate: 5.2,
  },
  AED: {
    symbol: 'د.إ',
    locale: 'ar-AE',
    averageCompoundedBankAnnualInterestRate: 0.8,
    averageCompoundedInflationAnnualRate: 1.62,
  },
  USD: {
    symbol: '$',
    locale: 'en-US',
    averageCompoundedBankAnnualInterestRate: 0.6,
    averageCompoundedInflationAnnualRate: 3.8,
  },
  GBP: {
    symbol: '£',
    locale: 'en-GB',
    averageCompoundedBankAnnualInterestRate: 3.5,
    averageCompoundedInflationAnnualRate: 5.2,
  },
  CHF: {
    symbol: 'CHF',
    locale: 'en-CH',
    averageCompoundedBankAnnualInterestRate: 0.8,
    averageCompoundedInflationAnnualRate: 2.4,
  }
}