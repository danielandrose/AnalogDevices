import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const tyrePressureSlice=createSlice({
    name:'tyrePressure',
    initialState:initialState,
    reducers:{
        addTyrePressure(state,action){
            state.push(action.payload)
        }
    }
})

export const {addTyrePressure}=tyrePressureSlice.actions
export default tyrePressureSlice.reducer