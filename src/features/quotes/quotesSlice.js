// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  };
};

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  }
};

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  }
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  console.log('quotesReducer', action)
  switch(action.type) {

    case "quotes/add":
      console.log('quotesReducerAdd', action)
     return [...state, action.payload];
 
   case "quotes/remove":
     return state.filter((quote) => quote.id !== action.payload);
 
   case "quotes/upvote": 
     return {upvote: state.vote + 1};
   
   case "quotes/downvote": 
     return state.map((quote) => {
        if (quote.id === action.payload)
       { quote.vote =  quote.vote - 1
        return quote }
        else if (quote.id !== action.payload )
        { return quote }
     });
 
   default: 
     return state
   }
}
// FIX VOTES BUTTON