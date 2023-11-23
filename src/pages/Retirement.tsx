import { RetirementCalculator } from "../components/RetirementCalculator";
import { RetirementSummary } from "../components/RetirementSummary"
import getSymbolFromCurrency from 'currency-symbol-map'
import { RetirementCalculatedSummary, RetirementCalculatorFormDataType, RetirementMonthlyIncomeType } from "../types/userDefinedTypes";
import { useState } from "react";

export const Retirement = () => {
  let currencySymbol = getSymbolFromCurrency('GBP');
  currencySymbol = currencySymbol? currencySymbol : 'E';

  const [formData, setFormData] = useState<RetirementCalculatorFormDataType>({
    name: "",
    yearsLeftToRetirement: {
        currentAge: 25,
        retirementAge: 60,
    },
    monthlyPensionContribution: 400,
    monthlyIncomeAfterRetirement: 2000,
    currentRetirementSavings: 400000,
  });

  const [calculatedSummary, setCalculatedSummary] = useState<RetirementCalculatedSummary>({
    monthlyIncome: {
      current: 798,
      desired: 2000,
    },
    estimatedPensionPot: {
      current: 319025,
      desired: 858916,
    },
    monthlyContribution: {
      current: 400,
      required: 1200,
    },
  });

  console.log(formData);

  return (
    <main>
        {/* The summary */}
        <div className="pt-24 pb-6 bg-[#e5e1d7] grid grid-cols-2 justify-items-center items-center">
            <RetirementSummary headline="Current Retirement Forecast" currency={currencySymbol} retirementFundPerMonth={calculatedSummary.monthlyIncome.current} pensionPot={calculatedSummary.estimatedPensionPot.current} monthlyContribution={calculatedSummary.monthlyContribution.current}/>
            <RetirementSummary headline="Desired Retirement income" headlineTextColor="text-[#b26748]" currency={currencySymbol} retirementFundPerMonth={calculatedSummary.monthlyIncome.desired} pensionPot={calculatedSummary.estimatedPensionPot.desired} monthlyContribution={calculatedSummary.monthlyContribution.required}/>
        </div>
        <div className="bg-[#c4bfb2] h-[1px]"></div>
        {/* The calculator */}
        <div className="bg-[#e1ddd3] h-100 p-10">
           <RetirementCalculator currencySymbol={currencySymbol} formData={formData} setFormData={setFormData} calculatedSummary={calculatedSummary} setCalculatedSummary={setCalculatedSummary}/>
        </div>
    </main>
  )
}
