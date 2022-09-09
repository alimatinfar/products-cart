import type { NextPage } from 'next'
import ItemsList from "../components/pages/Home/ItemsList/ItemsList";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title='محصولات'>
      <ItemsList />
    </Layout>
  )
}

export default Home
