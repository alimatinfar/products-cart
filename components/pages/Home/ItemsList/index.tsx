import {ProductResponseType} from "../../../../store/redux/api/products";
import Container from "../../../general/Container";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsRequest} from "../../../../store/redux/actions/products";
import RenderLogic from "../../../general/RenderLogic";
import ProductCard from "./ProductCard";


function Index() {

  const dispatch = useDispatch()

  const products = useSelector((state:any) => {
    console.log('state', state)
    return state.products
  })
  console.log('products', products)

  useEffect(function () {
    dispatch(getProductsRequest())
  }, [])

  const items = products?.items

  return (
    <Container className='w-11/12 mx-auto my-10'>
      <RenderLogic error={products.error} loading={products.loading}>
        <Container className='grid grid-cols-4 gap-5'>
          {items && items.map(function (item:ProductResponseType) {
            return (
              <ProductCard />
            )
          })}
        </Container>
      </RenderLogic>
    </Container>
  );
}

export default Index;