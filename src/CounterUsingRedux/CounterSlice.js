import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:"CounterExampale",
    initialState:{
       Counter:0
    },
    reducers:{
      incriment: function(state,action){
          state.Counter=state.Counter+1;
      },
      decriment: function(state,action){
        state.Counter=state.Counter-1;
    },
    }
});
export const {incriment,decriment} = CounterSlice.actions

 const counter=CounterSlice.reducer
export default counter