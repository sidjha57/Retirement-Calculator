import {
    RetirementCalculatorFormDataType,
    RetirementFormActionType,
    RetirementFormReducerAction,
  } from "../types/userDefinedTypes"
  
  /**
   * Initial state for the retirement form.
   */
  export const INITIAL_RETIREMENT_FORM_STATE: RetirementCalculatorFormDataType = {
    name: "",
    yearsLeftToRetirement: {
      currentAge: 25,
      retirementAge: 60,
    },
    monthlyPensionContribution: 400,
    monthlyIncomeAfterRetirement: 2000,
    currentRetirementSavings: 40000,
  }
  
  /**
   * Reducer function for handling state changes in the retirement form.
   * @param state - Current state of the retirement form.
   * @param action - Action to be performed on the state.
   * @returns Updated state after performing the action.
   */
  export const retirementFormReducer = (
    state: RetirementCalculatorFormDataType,
    action: RetirementFormActionType
  ): RetirementCalculatorFormDataType => {
    switch (action.type) {
      case RetirementFormReducerAction.UPDATE_DOUBLE_SLIDER: {
        let currentAge: number, retirementAge: number
  
        if (Array.isArray(action.payload)) {
          [currentAge, retirementAge] = action.payload
        } else {
          // Handle the case where action.payload is a single number
          currentAge = state.yearsLeftToRetirement.currentAge
          retirementAge = state.yearsLeftToRetirement.retirementAge // or provide a default value
        }
  
        return {
          ...state,
          yearsLeftToRetirement: { currentAge, retirementAge },
        }
      }
      case RetirementFormReducerAction.UPDATE_AGE: {
        const { fieldName, age } = action.payload
        return {
          ...state,
          yearsLeftToRetirement: {
            ...state.yearsLeftToRetirement,
            [fieldName]: age,
          },
        }
      }
      case RetirementFormReducerAction.UPDATE_SLIDER: {
        const monthlyPensionContribution = Array.isArray(action.payload)
          ? action.payload[0]
          : action.payload
  
        return {
          ...state,
          monthlyPensionContribution,
        }
      }
      case RetirementFormReducerAction.UPDATE_NAME:
        return {
          ...state,
          name: action.payload,
        }
      case RetirementFormReducerAction.UPDATE_AMOUNT: {
        const { fieldName, amount } = action.payload

        const originalNumber = parseFloat(amount.replace(/[^0-9.]/g, ""))
        console.log(originalNumber)
        return {
          ...state,
          [fieldName]: originalNumber,
        }
      }
      default:
        return state
    }
  }
  