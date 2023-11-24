import { RetirementSummaryPropsType } from "../types/userDefinedTypes"

const RetirementSummary = ({
  headline,
  headlineTextColor,
  monthlyContributionRequired,
  currency,
  retirementFundPerMonth,
  pensionPot,
  monthlyContribution,
}: RetirementSummaryPropsType) => {
  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className={`${headlineTextColor ? headlineTextColor : "text-[#79736c]"} text-sm`}>
        {headline}
      </h1>

      <div className="grid grid-cols-2">
        <span className="text-3xl">
          {currency}{" "}
          {new Intl.NumberFormat("en-IN", {}).format(retirementFundPerMonth)}
        </span>
        <span className="self-end">per month</span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-sm text-[#79736c]">Estimated pension pot</p>
          <span className="text-xl">
            {currency}{" "}
            {new Intl.NumberFormat("en-IN", {}).format(pensionPot)}
          </span>
        </div>
        <div>
          <p className="text-sm text-[#79736c]">
            Monthly contribution {monthlyContributionRequired ? "required" : ""}
          </p>
          <span className="text-xl">
            {currency}{" "}
            {new Intl.NumberFormat("en-IN", {}).format(monthlyContribution)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default RetirementSummary
