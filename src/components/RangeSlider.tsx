import Slider from '@mui/material/Slider'
import { AgeRangeSliderPropsType, RetirementFormReducerAction } from '../types/userDefinedTypes'

const AgeRangeSlider = ({ yearsLeftToRetirement, dispatch }: AgeRangeSliderPropsType) => {
  

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    dispatch({
      type: RetirementFormReducerAction.UPDATE_AGE,
      payload: { fieldName: e.target.name, age: Number.parseInt(e.target.value)}, 
    })
  }

  const handleAgeRangeChange = (e: Event, newValue: number | number[]) => {
    console.log(e)
    console.log(newValue)
    dispatch({
      type: RetirementFormReducerAction.UPDATE_DOUBLE_SLIDER,
      payload: newValue 
    })
  }

  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="grid justify-self-start">
          <input
            id="currentAge"
            name="currentAge"
            value={yearsLeftToRetirement.currentAge}
            onChange={handleAgeChange}
            type="number"
            min="0"
            max="80"
            className="w-14 p-1 border rounded"
          />
        </div>
        <div className="col-start-2 col-span-3">
          <Slider
            min={18}
            max={80}
            value={[yearsLeftToRetirement.currentAge, yearsLeftToRetirement.retirementAge]}
            onChange={handleAgeRangeChange}
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
            name="retirementAge"
            value={yearsLeftToRetirement.retirementAge}
            onChange={handleAgeChange}
            type="number"
            min="18"
            max="80"
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
  )
}

export default AgeRangeSlider
