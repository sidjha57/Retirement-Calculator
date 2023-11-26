import React, { useEffect, useReducer, useState } from 'react'
import { RetirementCalculator } from '@components/RetirementCalculator'
import { CurrencyCodeType, RetirementCalculatedSummaryType } from '../types/userDefinedTypes'
import { GetUpdatedCalculatedSummary } from '@utils/getUpdatedRetirementSummary'
import RetirementSummary from '@components/RetirementSummary'
import { INITIAL_RETIREMENT_FORM_STATE, retirementFormReducer } from '@utils/retirementFormReducer'
import { RootState } from '@store/index'
import { useSelector } from 'react-redux'


const Retirement: React.FC = () => {
  const currencyCode: CurrencyCodeType = useSelector((state: RootState) => state.currencyCode.value)

  const [retirementFormState, dispatch] = useReducer(retirementFormReducer, INITIAL_RETIREMENT_FORM_STATE)
  
  // Initial calculated summary state

  const [calculatedSummary, setCalculatedSummary] = useState<RetirementCalculatedSummaryType>({
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
  })

  // Update calculated summary when form data changes
  useEffect(() => {
    const updatedCalculatedSummary = GetUpdatedCalculatedSummary(retirementFormState, currencyCode)
    setCalculatedSummary(updatedCalculatedSummary)
  }, [retirementFormState, currencyCode])

  return (
    <main>
      {/* The summary */}
      <div className="pt-24 pb-6 bg-[#e5e1d7] grid grid-cols-2 justify-items-center items-center">
        <RetirementSummary
          headline="Current Retirement Forecast"
          retirementFundPerMonth={calculatedSummary.monthlyIncome.current}
          pensionPot={calculatedSummary.estimatedPensionPot.current}
          monthlyContribution={calculatedSummary.monthlyContribution.current}
        />
        <RetirementSummary
          headline="Desired Retirement Income"
          headlineTextColor="text-[#b26748]"
          monthlyContributionRequired={true}
          retirementFundPerMonth={calculatedSummary.monthlyIncome.desired}
          pensionPot={calculatedSummary.estimatedPensionPot.desired}
          monthlyContribution={calculatedSummary.monthlyContribution.required}
        />
      </div>
      <div className="bg-[#c4bfb2] h-[1px]"></div>
      {/* The calculator */}
      <div className="bg-[#e1ddd3] h-100 p-10">
        <RetirementCalculator
          retirementFormState={retirementFormState}
          dispatch={dispatch}
          calculatedSummary={calculatedSummary}
          setCalculatedSummary={setCalculatedSummary}
        />
      </div>
    </main>
  )
}

export default Retirement
