import type { NextPage } from 'next'
import Index from "../components/pages/Home/ItemsList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsRequest} from "../store/redux/actions/products";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}

export default Home
