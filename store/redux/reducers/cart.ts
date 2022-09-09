import { CartTypes } from "../types/CartTypes";

const initialState = {
  productIds: []
};

type ProductItemIdType = {
  id: number;
  number: number
}

export const cartReducer = (state = initialState, action:any) => {
  const productId = action?.payload?.productId
  const filteredProductId = state.productIds.filter((item:ProductItemIdType) => item?.id === productId)
  const currentProductIdExistInCart = filteredProductId.length > 0

  function updateNumber(type:'inc' | 'dec') {
    return {
      productIds: state.productIds.map(function(item: ProductItemIdType) {
        return item.id === productId ? {
          ...item, number:  type === 'inc' ? ++item.number : item.number > 0 ? --item.number : item.number
        } : item
      })
    }
  }

  function addItemToState() {
    return {
      productIds: [
        ...state.productIds,
        {id: productId, number: 1}
      ]
    }
  }

  function removeItemFromState() {
    return {
      productIds: state.productIds.filter((item:ProductItemIdType) => item.id !== productId)
    }
  }

  switch (action.type) {
    case CartTypes.INCREMENT:
      return currentProductIdExistInCart ? updateNumber('inc') : addItemToState();
    case CartTypes.DECREMENT:
      return currentProductIdExistInCart ?
        filteredProductId[0] > 1 ? updateNumber('dec') : removeItemFromState()
        : state;
    default:
      return state;
  }
};

