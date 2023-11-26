import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrencyCodeType } from "types/userDefinedTypes"

interface CurrencyCodeState {
    value: CurrencyCodeType;
  }
  
const initialState: CurrencyCodeState = {
    value: 'GBP',
}

export const currencyCodeSlice = createSlice({
    name: 'currencyCode',
    initialState,
    reducers: {
        setCurrencyCode: (state, action: PayloadAction<CurrencyCodeType>) => {
            state.value = action.payload
        },
    },
})

export const { setCurrencyCode } = currencyCodeSlice.actions
export default currencyCodeSlice.reducer
