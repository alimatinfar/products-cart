import type { NextPage } from 'next'
import ItemsList from "../components/pages/Home/ItemsList/ItemsList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsRequest} from "../store/redux/actions/products";
import Layout from "../components/Layout";

const Home: NextPage = () => {

  const dispatch = useDispatch()

  const products = useSelector((state:any) => {
    console.log('state', state)
    return state.products
  })
  console.log('products', products)

  useEffect(function () {
    dispatch(getProductsRequest())
  }, [])

  return (
    <Layout>
      <ItemsList />
    </Layout>
  )
}

export default Home
