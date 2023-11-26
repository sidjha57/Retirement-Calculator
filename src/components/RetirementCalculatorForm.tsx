import React from "react"
import AgeRangeSlider from "@components/RangeSlider"
import { Slider } from "@mui/material"
import {
  CurrencyCodeType,
  RetirementCalculatorFormPropsType,
  RetirementFormReducerAction,
} from "../types/userDefinedTypes"
import { RootState } from "@store/index"
import { useSelector } from "react-redux"
import { formattedCurrency } from "@utils/getFormattedCurrency"

const RetirementCalculatorForm = ({
  retirementFormState,
  dispatch,
}: RetirementCalculatorFormPropsType) => {
  const currencyCode: CurrencyCodeType = useSelector((state: RootState) => state.currencyCode.value)

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
          autoComplete="on"
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
          <input
            type="text"
            id="monthlyIncomeAfterRetirement"
            name="monthlyIncomeAfterRetirement"
            value={formattedCurrency(currencyCode, retirementFormState.monthlyIncomeAfterRetirement)}
            onChange={handleAmountChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-1"
          />
        </div>
        <label className="block text-[10px] my-1" htmlFor="monthlyIncomeAfterRetirement">
          Many people aim for about two-thirds of their current income
        </label>
      </div>
      <hr className="bg-[#c4bfb2] h-[1px]" />

      {/* Your age slider */}
      <div>
        <span className="block text-sm mb-1">
          Your age
        </span>
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
              value={formattedCurrency(currencyCode, retirementFormState.monthlyPensionContribution)}
              onChange={handleAmountChange}
              data-type="currency"
              className="w-full rounded-md p-1 pl-1"
            />
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
          <input
            type="text"
            id="currentRetirementSavings"
            name="currentRetirementSavings"
            value={formattedCurrency(currencyCode, retirementFormState.currentRetirementSavings)}
            onChange={handleAmountChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-1"
          />
        </div>
      </div>
    </form>
  )
}

export default RetirementCalculatorForm
