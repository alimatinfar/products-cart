import {ProductResponseType} from "../../../../store/redux/api/products";
import Container from "../../../general/Container";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsRequest} from "../../../../store/redux/actions/products";
import RenderLogic from "../../../general/RenderLogic";
import ProductCard from "./ProductCard";
import Typography from "../../../UI/Typography/Typography";


function ItemsList() {

  const dispatch = useDispatch()

  const products = useSelector((state:any) => {
    return state.products
  })

  const cart = useSelector((state:any) => {
    return state.cart
  })

  useEffect(function () {
    console.log('products', products)
  }, [products])

  useEffect(function () {
    console.log('cart', cart)
  }, [cart])

  useEffect(function () {
    dispatch(getProductsRequest())
  }, [])

  const items = products?.items

  return (
    <RenderLogic error={products.error} loading={products.loading}>
      <div className='grid grid-cols-4 gap-5 p-8'>
        {items && items.map(function (item:ProductResponseType) {
          return (
            <ProductCard id={item.id} key={item.id} imgSrc={item.image} title={item.title} price={item.price} />
          )
        })}
      </div>
    </RenderLogic>
  );
}

export default ItemsList;