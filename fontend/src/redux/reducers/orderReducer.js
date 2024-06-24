import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  
};

export const orderReducer = createReducer(initialState, (builder)=>{
  builder.addCase("CreateOrderRequest", (state)=>{
    state.loading = true;
  })
  builder.addCase("CreateOrderSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("CreateOrderFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

  builder.addCase("UserOrderRequest", (state)=>{
    state.loading = true;
  })
  builder.addCase("UserOrderSuccess", (state, action)=>{
    state.loading = false;
    state.orders = action.payload;
  })
  builder.addCase("UserOrderFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })
})