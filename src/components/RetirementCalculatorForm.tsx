import React from "react"
import AgeRangeSlider from "@components/RangeSlider"
import { Slider } from "@mui/material"
import {
  RetirementCalculatorFormPropsType,
  RetirementFormReducerAction,
} from "../types/userDefinedTypes"

const RetirementCalculatorForm = ({
  currencySymbol,
  retirementFormState,
  dispatch,
}: RetirementCalculatorFormPropsType) => {
  
  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => {
    e.preventDefault()
    dispatch({
      type: RetirementFormReducerAction.UPDATE_AMOUNT,
      payload: {fieldName: e.target.name, amount: e.target.value}
    })   
  }

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    console.log(e)
    console.log(newValue)
    dispatch({
      type: RetirementFormReducerAction.UPDATE_SLIDER,
      payload: newValue 
    })
  }
   
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(retirementFormState)
    // You can perform any further actions with the form data here
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name input */}
      <div>
        <label className="block text-sm mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={retirementFormState.name}
          onChange={(e) => { dispatch({type: RetirementFormReducerAction.UPDATE_NAME, payload: e.target.value}) }}
          className="w-full border p-2 rounded-md"
        />
      </div>
      <hr className="bg-[#c4bfb2] h-[1px]" />

      {/* Desired monthly income at retirement input */}
      <div>
        <label className="block text-sm mb-1" htmlFor="monthlyIncomeAfterRetirement">
          Desired monthly income at retirement
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            {currencySymbol}
          </span>
          <input
            type="text"
            id="monthlyIncomeAfterRetirement"
            name="monthlyIncomeAfterRetirement"
            value={new Intl.NumberFormat('en-IN').format(retirementFormState.monthlyIncomeAfterRetirement)}
            onChange={handleAmountChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-8"
          />
        </div>
        <label className="block text-[10px] my-1" htmlFor="monthlyIncomeAfterRetirement">
          Many people aim for about two-thirds of their current income
        </label>
      </div>
      <hr className="bg-[#c4bfb2] h-[1px]" />

      {/* Your age slider */}
      <div>
        <label className="block text-sm mb-1" htmlFor="yearsLeftToRetirement">
          Your age
        </label>
        <AgeRangeSlider yearsLeftToRetirement={retirementFormState.yearsLeftToRetirement} dispatch={dispatch} />
      </div>
      <hr className="bg-[#c4bfb2] h-[1px]" />

      {/* Monthly pension contribution input and slider */}
      <div>
        <label className="block text-sm mb-1" htmlFor="monthlyPensionContribution">
          Monthly pension contribution
        </label>
        <div className="grid grid-cols-8 gap-4">
          <div className="relative col-span-3">
            <input
              type="text"
              id="monthlyPensionContribution"
              name="monthlyPensionContribution"
              value={new Intl.NumberFormat('en-IN').format(retirementFormState.monthlyPensionContribution)}
              onChange={handleAmountChange}
              data-type="currency"
              className="w-full rounded-md p-1 pl-5"
            />
            <span className="absolute inset-y-0 left-0 pl-1 flex items-center">
              {currencySymbol}
            </span>
          </div>

          <div className="col-start-4 col-span-6 flex items-center">
            <Slider
              id="monthlyPensionContribution"
              key="monthlyPensionContribution"
              name="monthlyPensionContribution"
              value={retirementFormState.monthlyPensionContribution}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundColor: "white",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#b5ab94",
                },
              }}
            />
          </div>
        </div>
      </div>
      <hr className="bg-[#c4bfb2] h-[1px]" />

      {/* Current retirement savings input */}
      <div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            {currencySymbol}
          </span>
          <input
            type="text"
            id="currentRetirementSavings"
            name="currentRetirementSavings"
            value={new Intl.NumberFormat('en-IN').format(retirementFormState.currentRetirementSavings)}
            onChange={handleAmountChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-8"
          />
        </div>
      </div>
    </form>
  )
}

export default RetirementCalculatorForm
