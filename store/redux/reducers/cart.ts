import { CartTypes } from "../types/CartTypes";

const initialState = {
  productIds: []
};

export type ProductItemCartIdType = {
  id: number;
  number: number
}

export const cartReducer = (state = initialState, action:any) => {
  const productId = action?.payload?.productId
  const filteredProductId:ProductItemCartIdType[] = state.productIds.filter((item:ProductItemCartIdType) => item?.id === productId)
  const currentProductIdExistInCart = filteredProductId.length > 0
  console.log('filteredProductId', filteredProductId)
  console.log('currentProductIdExistInCart', currentProductIdExistInCart)
  function updateNumber(type:'inc' | 'dec') {
    return {
      productIds: state.productIds.map(function(item: ProductItemCartIdType) {
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
      productIds: state.productIds.filter((item:ProductItemCartIdType) => item.id !== productId)
    }
  }

  switch (action.type) {
    case CartTypes.INCREMENT:
      return currentProductIdExistInCart ? updateNumber('inc') : addItemToState();
    case CartTypes.DECREMENT:
      return currentProductIdExistInCart ?
        filteredProductId[0]?.number > 1 ? updateNumber('dec') : removeItemFromState()
        : state;
    default:
      return state;
  }
};

