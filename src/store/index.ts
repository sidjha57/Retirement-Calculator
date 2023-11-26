import { configureStore } from "@reduxjs/toolkit"
import reducer from "./currencyCode/reducer"

/**
 * Configures the Redux store with the specified reducer.
 */
export const store = configureStore({
  reducer: {
    currencyCode: reducer,
  },
})

/**
 * Type representing the root state of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;
