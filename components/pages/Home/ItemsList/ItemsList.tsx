import {ProductResponseType} from "../../../../store/redux/api/products";
import ProductCard from "./ProductCard";

type Props = {
  items: ProductResponseType[]
}

function ItemsList({items}: Props) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-8'>
      {items && items.map(function (item: ProductResponseType) {
        return (
          <ProductCard id={item.id} key={item.id} imgSrc={item.image} title={item.title} price={item.price}/>
        )
      })}
    </div>
  )
}

export default ItemsList;