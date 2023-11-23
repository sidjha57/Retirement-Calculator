import React, { ChangeEvent, useState } from 'react';
import Slider from '@mui/material/Slider';
import { RetirementCalculatorFormDataType, YearsLeftToRetirementType } from '../types/userDefinedTypes';

const RangeSlider = ({ setFormData }: any) => {
  const initialYearsLeftToRetirement: YearsLeftToRetirementType = {
    currentAge: 25,
    retirementAge: 60,
  };

  const [yearsLeftToRetirement, setYearsLeftToRetirement] = useState<YearsLeftToRetirementType>(
    initialYearsLeftToRetirement
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, field: keyof YearsLeftToRetirementType) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      const updatedValues = { ...yearsLeftToRetirement, [field]: newValue };

      setFormData((prevData: RetirementCalculatorFormDataType) => ({
        ...prevData,
        yearsLeftToRetirement: updatedValues,
      }));

      setYearsLeftToRetirement(updatedValues);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    const [currentAge, retirementAge] = newValue as number[];

    setFormData((prevData: RetirementCalculatorFormDataType) => ({
      ...prevData,
      yearsLeftToRetirement: { currentAge, retirementAge },
    }));

    setYearsLeftToRetirement({ currentAge, retirementAge });
  };

  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="grid justify-self-start">
          <input
            id="currentAge"
            value={yearsLeftToRetirement.currentAge}
            onChange={(e) => handleInputChange(e, 'currentAge')}
            type="number"
            min="0"
            max="130"
            className="w-14 p-1 border rounded"
          />
        </div>
        <div className="col-start-2 col-span-3">
          <Slider
            min={18}
            max={130}
            value={[yearsLeftToRetirement.currentAge, yearsLeftToRetirement.retirementAge]}
            onChange={handleChange}
            valueLabelDisplay="auto"
            sx={{
              '& .MuiSlider-thumb': {
                backgroundColor: 'white',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#b5ab94',
              },
            }}
          />
        </div>
        <div className="grid justify-self-end">
          <input
            id="retirementAge"
            value={yearsLeftToRetirement.retirementAge}
            onChange={(e) => handleInputChange(e, 'retirementAge')}
            type="number"
            min="18"
            max="130"
            className="w-14 p-1 border rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-6">
        <label className="col-start-1 col-span-2 justify-self-start block text-xs my-1" htmlFor="money">
          Current age
        </label>
        <label className="col-start-5 col-span-6 justify-self-end block text-xs my-1" htmlFor="money">
          Retirement age
        </label>
      </div>
    </div>
  );
};

export default RangeSlider;
