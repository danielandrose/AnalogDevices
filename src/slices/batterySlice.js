import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const batterySlice=createSlice({
    name:'battery',
    initialState:initialState,
    reducers:{
        addBatteryPercentage(state,action){
            state.push(action.payload)
        }
    }
})

export const {addBatteryPercentage}=batterySlice.actions
export default batterySlice.reducer



