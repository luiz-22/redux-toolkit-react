import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: "api",
    initialState: {
        characters: []
    },
    reducers: {
        getApi: (state, action) => {
            state.characters = action.payload
        }
    }
})

export const { getApi } = apiSlice.actions

export default apiSlice.reducer