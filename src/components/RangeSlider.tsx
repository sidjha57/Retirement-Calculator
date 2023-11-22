import React, { ChangeEvent, useState } from 'react';
import Slider from '@mui/material/Slider';


const RangeSlider: React.FC = () => {
  const [values, setValues] = useState<number[]>([25, 60]);

  const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      const updatedValues = [...values];
      updatedValues[index] = newValue;
      setValues(updatedValues);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };

  return (
    <div>    
      <div className="grid grid-cols-5">
        <div className='grid justify-self-start'>
          <input
            id="currentAge"
            value={values[0]}
            onChange={handleInputChange(0)}
            type="number"
            className="w-14 p-1 border rounded"
            autoFocus={true}
          />
        </div>
        <div className="col-start-2 col-span-3">
            <Slider
            value={values}
            onChange={handleChange}
            valueLabelDisplay="auto"
            sx={{ '& .MuiSlider-thumb': {
              backgroundColor: 'white'
           },  
           '& .MuiSlider-rail': {
            backgroundColor: '#b5ab94'
         },
          }}  
            />
        </div>
        <div className='grid justify-self-end'>          
        <input
            id="retirementAge"
            value={values[1]}
            onChange={handleInputChange(1)}
            type="number"
            className="w-14 p-1 border rounded"
          />
        </div>
    </div>
    <div className='grid grid-cols-6'>
        <label className="col-start-1 col-span-2 justify-self-start block text-xs  my-1" htmlFor="money">
          Current age
        </label>
        <label className="col-start-5 col-span-6 justify-self-end block text-xs  my-1" htmlFor="money">
          Retirement age
        </label>
    </div>
    </div>
  );
};

export default RangeSlider;
