export const initialState = {
  basket: [],
};

// dispatching actions into the store and reducer just listens and knows what to do

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(initialState);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
