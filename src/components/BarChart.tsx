import React from "react"
import { BarChartPropsType } from "../types/userDefinedTypes"

/**
 * BarChart component displays a two-bar chart with information.
 * @param {BarChartPropsType} props - The properties for the BarChart.
 * @returns {JSX.Element} - The BarChart component.
 */
const BarChart: React.FC<BarChartPropsType> = ({ currencySymbol, height1, height2 }) => {
  // Calculate the maximum height for percentage calculation
  const maxHeight = Math.max(height1, height2)

  /**
   * Calculate the percentage height for each bar.
   * @param {number} height - The height of the bar.
   * @returns {string} - The percentage height as a string.
   */
  const calculatePercentage = (height: number): string => {
    return (height / maxHeight) * 100 + "%"
  }

  return (
    <div className="h-[25rem] grid grid-cols-2 gap-8">
      {/* Bar 1 */}
      <div className="grid pt-10">
        <div
          className={`justify-self-end self-end w-14 bg-gradient-to-r from-[#d18c70] to-[#b36644]`}
          style={{ height: calculatePercentage(height1) }}
        >
          <div className={`-mt-5 -ml-24 w-20 p-1 h-10 rounded-md bg-[#b36644] text-white`}>
            <p className="text-[8px] text-center">Desired income</p>
            <p className="text-center text-sm">{`${currencySymbol}${height1}/m`}</p>
          </div>
          <div className={`-mt-5 -ml-6 w-20 bg-[#b36644] h-[2px]`}></div>
        </div>
      </div>

      {/* Bar 2 */}
      <div className="grid pt-10">
        <div
          className={`justify-self-end self-end w-14 bg-gradient-to-r from-[#625255] to-[#251b27]`}
          style={{ height: calculatePercentage(height2) }}
        >
          <div className={`-mt-5 -ml-24 w-20 p-1 h-10 rounded-md bg-[#251b27] text-white`}>
            <p className="text-[8px] text-center">Forecast income</p>
            <p className="text-center text-sm">{`${currencySymbol}${height2}/m`}</p>
          </div>
          <div className={`-mt-5 -ml-6 w-20 bg-[#251b27] h-[2px]`}></div>
        </div>
      </div>
    </div>
  )
}

export default BarChart
