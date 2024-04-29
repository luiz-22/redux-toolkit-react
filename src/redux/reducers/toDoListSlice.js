import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name: "toDoList",
    initialState: {
        toDo: [],
        done: []
    },
    reducers: {
        addThing: (state, actions) => {
            state.toDo = [...state.toDo, actions.payload]
        },
        doneThing: (state, actions) => {
            let done = state.toDo[actions.payload]
            state.toDo = state.toDo.filter((value, index) => index != actions.payload)
            state.done = [...state.done, done]
        }
    }
})

export const { addThing, doneThing } = toDoSlice.actions

export default toDoSlice.reducer