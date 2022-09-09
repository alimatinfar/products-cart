import { ProductsTypes} from "../types/ProductsTypes";

const initialState = {
  items: [],
  error: null,
  loading: false
};

export const productsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ProductsTypes.GET_PRODUCTS_REQUEST:
      return {
        ...initialState,
        loading: true
      };
    case ProductsTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };
    case ProductsTypes.GET_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};

