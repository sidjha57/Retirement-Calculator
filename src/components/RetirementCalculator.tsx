import React, { useState } from "react";
import RetirementCalculatorForm from "./RetirementCalculatorForm";
import { RetirementCalculatorFormPropsType } from "../types/userDefinedTypes";

export const RetirementCalculator = ({ currencySymbol }: RetirementCalculatorFormPropsType) => {
  const [formData, setFormData] = useState(/* Initial form data here */);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for form submission
    console.log("Form submitted:", formData);
  };

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
            // onClick={() => setFormData(/* Reset form data if needed */)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="bg-[#c4bfb2] h-[2px]"></div>

      <div className="p-8 grid grid-cols-2 gap-1">
        <div>
          {/* form */}
          <RetirementCalculatorForm
            currencySymbol={currencySymbol}
            // formData={formData}
            // setFormData={setFormData}
          />
        </div>
        <div>{/* visualize */}</div>
      </div>
    </div>
  );
};
