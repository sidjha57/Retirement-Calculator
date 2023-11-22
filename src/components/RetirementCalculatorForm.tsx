import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import { Slider } from "@mui/material";
import {
  RetirementCalculatorFormDataType,
  RetirementCalculatorFormPropsType,
} from "../types/userDefinedTypes";

const RetirementCalculatorForm = ({
  currencySymbol,
}: RetirementCalculatorFormPropsType) => {
  const [formData, setFormData] = useState<RetirementCalculatorFormDataType>({
    name: "",
    yearsLeftToRetirement: [0, 130],
    monthlyPensionContribution: 400,
    monthlyIncomeAfterRetirement: 2000,
    currentRetirementSavings: 400000,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setFormData((prevData) => ({
      ...prevData,
      monthlyPensionContribution: Array.isArray(newValue)
        ? newValue[0]
        : newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can perform any further actions with the form data here
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>
      <div className="bg-[#c4bfb2] h-[1px]"></div>

      <div className="my-4 ">
        <label className="block text-sm mb-1" htmlFor="monthlyIncomeAfterRetirement">
          Desired monthly income at retirement
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            {currencySymbol}
          </span>
          <input
            type="number"
            id="monthlyIncomeAfterRetirement"
            name="monthlyIncomeAfterRetirement"
            value={formData.monthlyIncomeAfterRetirement}
            onChange={handleChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-8"
          />
        </div>
        <label className="block text-[10px] my-1" htmlFor="monthlyIncomeAfterRetirement">
          Many people aim for about two-thirds of their current income
        </label>
      </div>
      <div className="bg-[#c4bfb2] h-[1px]"></div>

      <div className="my-4">
        <label className="block text-sm mb-1" htmlFor="yearsLeftToRetirement">
          Your age
        </label>
        <RangeSlider />
      </div>
      <div className="bg-[#c4bfb2] h-[1px]"></div>

      <div className="my-4">
        <label className="block text-sm mb-1" htmlFor="monthlyPensionContribution">
          Monthly pension contribution
        </label>
        <div className="grid grid-cols-8 gap-4">
          <div className="relative col-span-2">
            <input
              type="number"
              id="monthlyPensionContribution"
              name="monthlyPensionContribution"
              min="0"
              max="1000"
              value={formData.monthlyPensionContribution}
              onChange={handleChange}
              className="w-full rounded-md p-1 pl-5"
            />
            <span className="absolute inset-y-0 left-0 pl-1 flex items-center">
              {currencySymbol}
            </span>
          </div>

          <div className="col-start-3 col-span-6 flex items-center">
            <Slider
              id="monthlyPensionContribution"
              name="monthlyPensionContribution"
              value={formData.monthlyPensionContribution}
              onChange={(e, value) => handleSliderChange(e, value)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
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
      <div className="bg-[#c4bfb2] h-[1px]"></div>

      <div className="my-4">
        <label className="block text-sm mb-1" htmlFor="currentRetirementSavings">
          Current retirement savings
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            {currencySymbol}
          </span>
          <input
            type="number"
            id="currentRetirementSavings"
            name="currentRetirementSavings"
            value={formData.currentRetirementSavings}
            onChange={handleChange}
            data-type="currency"
            className="w-full border p-2 rounded-md pl-8"
          />
        </div>
      </div>
    </form>
  );
};

export default RetirementCalculatorForm;
