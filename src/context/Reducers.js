export const cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
