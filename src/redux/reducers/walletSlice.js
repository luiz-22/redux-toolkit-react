import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
    name: "wallet",
    initialState: { counter: 0 },
    reducers: {
        deposit: (state) => {
            state.counter += 10
        },
        withdraw: (state) => {
            state.counter -= 10
        }
    }
})

export const { deposit, withdraw } = walletSlice.actions

export default walletSlice.reducer