import {v4 as uuid } from "uuid";

// Action Creators
export const addQuote = (quote) => {
  return {
    type: " quotes/add",
    payload: quote,
  };
};

const initialState = [];
export default function quotesReducer (state = initialState, action) {
  switch(action.type) {
   case "quotes/add":
    return [...state, action.payload];
    default: 
      return state
  }
};