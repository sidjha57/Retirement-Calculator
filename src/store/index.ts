import { configureStore } from "@reduxjs/toolkit"
import reducer from "./currencyCode/reducer"

export const store = configureStore({
    reducer: {
        currencyCode: reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch