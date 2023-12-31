import { RootState } from '@store/index'
import { useSelector } from 'react-redux'
import { CurrencyCodeType, RetirementSummaryPropsType } from '../types/userDefinedTypes'
import { formattedCurrency } from '@utils/getFormattedCurrency'
import React from 'react'

/**
 * RetirementSummary component displaying key information about retirement planning.
 * @param {RetirementSummaryPropsType} props - Properties for the RetirementSummary component.
 * @returns {JSX.Element} - The RetirementSummary component.
 */
const RetirementSummary: React.FC<RetirementSummaryPropsType> = ({
  headline,
  headlineTextColor,
  monthlyContributionRequired,
  retirementFundPerMonth,
  pensionPot,
  monthlyContribution,
}) => {
  // Retrieve the currency code from the Redux store
  const currencyCode: CurrencyCodeType = useSelector((state: RootState) => state.currencyCode.value)

  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className={`${headlineTextColor ? headlineTextColor : 'text-[#79736c]'} text-sm`}>
        {headline}
      </h1>

      <div className="grid grid-cols-2">
        <span className="text-3xl">{formattedCurrency(currencyCode, retirementFundPerMonth)}</span>
        <span className="self-end">per month</span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-sm text-[#79736c]">Estimated pension pot</p>
          <span className="text-xl">{formattedCurrency(currencyCode, pensionPot)}</span>
        </div>
        <div>
          <p className="text-sm text-[#79736c]">
            Monthly contribution {monthlyContributionRequired ? 'required' : ''}
          </p>
          <span className="text-xl">{formattedCurrency(currencyCode, monthlyContribution)}</span>
        </div>
      </div>
    </div>
  )
}

export default RetirementSummary
