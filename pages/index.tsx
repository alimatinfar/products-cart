import type {NextPage} from 'next'
import ItemsList from "../components/pages/Home/ItemsList/ItemsList";
import Layout from "../components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsRequest} from "../store/redux/actions/products";
import RenderLogic from "../components/general/RenderLogic";

const Home: NextPage = () => {

  const dispatch = useDispatch()

  const products = useSelector((state: any) => {
    return state.products
  })

  useEffect(function () {
    products.items.length === 0 && dispatch(getProductsRequest())
  }, [])

  const items = products?.items

  return (
    <Layout title='محصولات'>
      <RenderLogic error={products.error} loading={products.loading}>
        <ItemsList items={items} />
      </RenderLogic>
    </Layout>
  );
}

export default Home
