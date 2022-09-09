import Layout from "../../components/Layout/Layout";
import {useSelector} from "react-redux";
import {ProductResponseType} from "../../store/redux/api/products";
import ItemsList from "../../components/pages/Home/ItemsList/ItemsList";

function Cart() {
  const cart = useSelector((state: any) => {
    return state.cart
  })

  const products = useSelector((state: any) => {
    return state.products
  })

  const items = []

  for (let productCart of cart.productIds) {
    const currentProduct = products.items.find((item:ProductResponseType) => item.id === productCart.id)
    items.push(currentProduct)
  }

  return (
    <Layout title='سبد خرید'>
      <ItemsList items={items} />
    </Layout>
  );
}

export default Cart;