import React from 'react'
import RetirementCalculatorForm from '@components/RetirementCalculatorForm'
import BarChart from '@components/BarChart'
import { RetirementCalculatorFormPropsType } from '../types/userDefinedTypes'
import { CalculateDaysFromYears } from '@utils/getNumberOfDays'

/**
 * RetirementCalculator component for managing retirement planning calculations and visualization.
 * @param {RetirementCalculatorFormPropsType} props - The properties for the RetirementCalculator component.
 * @returns {JSX.Element} - The RetirementCalculator component.
 */
const RetirementCalculator: React.FC<RetirementCalculatorFormPropsType> = ({
  retirementFormState: formData,
  dispatch: setFormData,
  calculatedSummary,
  setCalculatedSummary,
}) => {
  
  /**
   * Handle the form submission.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add logic for form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="rounded-sm bg-[#D4D2C5] border-2 border-[#c4bfb2]">
      <div className="grid grid-cols-2 py-4 px-8 items-center">
        <p className="font-semibold text-lg">Retirement Calculator</p>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-[#251b27] text-white px-8 py-2 text-xs rounded-full hover:bg-transparent hover:border hover:border-[#251b27] hover:text-[#251b27]"
            onClick={handleFormSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="px-8 py-2 text-xs rounded-full border border-[#251b27] text-[#251b27] hover:bg-[#251b27] hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="bg-[#c4bfb2] h-[2px]"></div>

      <div className="p-8 grid grid-cols-2 gap-2 lg:gap-16 md:gap-10 sm:gap-4">
        <div>
          {/* Form */}
          <RetirementCalculatorForm
            retirementFormState={formData}
            dispatch={setFormData}
            calculatedSummary={calculatedSummary}
            setCalculatedSummary={setCalculatedSummary}
          />
        </div>
        <div className="">
          {/* Visualize */}
          <div>
            <h1 className="text-2xl text-center py-2">
              {formData.yearsLeftToRetirement.retirementAge - formData.yearsLeftToRetirement.currentAge} years To Retirement
            </h1>
            <h3 className="text-[10px] pb-5 text-center">
              {CalculateDaysFromYears(formData.yearsLeftToRetirement.retirementAge - formData.yearsLeftToRetirement.currentAge)} Paydays Left Until Retirement
            </h3>
            <div className="bg-[#c4bfb2] h-[1px] max-w-full"></div>
          </div>

          <div className="self-end">
            <BarChart height1={calculatedSummary.monthlyIncome.desired} height2={calculatedSummary.monthlyIncome.current} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetirementCalculator
