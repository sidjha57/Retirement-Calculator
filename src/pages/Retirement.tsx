import { RetirementCalculator } from "../components/RetirementCalculator";
import { RetirementSummary } from "../components/RetirementSummary"
import getSymbolFromCurrency from 'currency-symbol-map'

export const Retirement = () => {
  let currencySymbol = getSymbolFromCurrency('GBP');
  currencySymbol = currencySymbol? currencySymbol : 'E';

  return (
    <main>
        {/* The summary */}
        <div className="pt-24 pb-6 bg-[#e5e1d7] grid grid-cols-2 justify-items-center items-center">
            <RetirementSummary headline="Current Retirement Forecast" currency={currencySymbol} retirementFundPerMonth={789} pensionPot={319025} monthlyContribution={400}/>
            <RetirementSummary headline="Desired Retirement income" headlineTextColor="text-[#b26748]" currency={currencySymbol} retirementFundPerMonth={2000} pensionPot={858916} monthlyContribution={1200}/>
        </div>
        <div className="bg-[#c4bfb2] h-[1px]"></div>
        {/* The calculator */}
        <div className="bg-[#e1ddd3] h-100 p-10">
           <RetirementCalculator />
        </div>
    </main>
  )
}
