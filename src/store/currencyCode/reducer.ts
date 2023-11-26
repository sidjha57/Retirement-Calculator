import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrencyCodeType } from "types/userDefinedTypes"

/**
 * Represents the state structure for the CurrencyCodeSlice.
 */
interface CurrencyCodeState {
    value: CurrencyCodeType;
}

/**
 * Initial state for the CurrencyCodeSlice.
 */
const initialState: CurrencyCodeState = {
    value: 'GBP',
}

/**
 * Redux Toolkit slice for managing the currency code state.
 */
export const currencyCodeSlice = createSlice({
    name: 'currencyCode',
    initialState,
    reducers: {
        /**
         * Action to set the currency code in the state.
         * @param state - The current state.
         * @param action - The action containing the new currency code.
         */
        setCurrencyCode: (state, action: PayloadAction<CurrencyCodeType>) => {
            state.value = action.payload
        },
    },
})

/**
 * Exporting the setCurrencyCode action for external use.
 */
export const { setCurrencyCode } = currencyCodeSlice.actions

/**
 * Exporting the currencyCodeSlice reducer for integration with the Redux store.
 */
export default currencyCodeSlice.reducer
