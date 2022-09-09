import AddIcon from "../svg/AddIcon";
import MinusIcon from "../svg/MinusIcon";
import TrashIcon from "../svg/TrashIcon";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../store/redux/actions/cart";
import {ProductItemCartIdType} from "../../store/redux/reducers/cart";

type Props = {
  id: number
}

function AddToCartButtons({id}:Props) {

  const cart = useSelector((state: any) => {
    return state.cart
  })

  useEffect(function () {
    console.log('cart', cart)
  }, [cart])

  const filteredProductId = cart.productIds.filter((item:ProductItemCartIdType) => item?.id === id)
  const currentProductIdExistInCart = filteredProductId.length > 0
  const itemNumber = currentProductIdExistInCart ? filteredProductId[0].number : 0

  const dispatch = useDispatch()

  function addItemHandler() {
    dispatch(addToCart(id))
  }

  function removeItemHandler() {
    dispatch(removeFromCart(id))
  }

  return itemNumber === 0 ? (
    <button
      className={"p-1 bg-custom-red-500 rounded-lg"}
      onClick={addItemHandler}
    >
      <AddIcon />
    </button>
  ) : (
    <div
      className='flex justify-between items-center bg-custom-red-500/5 rounded-lg bg-gray-200 space-x-1 space-x-reverse'
    >
      <button className="p-1 pr-1 " onClick={addItemHandler}>
        <AddIcon className="fill-custom-red-500 w-4"/>
      </button>
      <div className="w-3.5 text-center">{itemNumber}</div>
      <button className="p-1 pl-1 " onClick={removeItemHandler}>
        {itemNumber === 1 ? (
          <TrashIcon className="text-custom-red-500 w-3.5 "/>
        ) : (
          <MinusIcon className="fill-custom-red-500 w-4"/>
        )}
      </button>
    </div>
  )
}

export default AddToCartButtons;