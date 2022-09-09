import Image from "next/image";
import Typography from "../../../UI/Typography/Typography";
import Price from "../../../general/Price";
import AddToCartButtons from "../../../general/AddToCartButtons";

type Props = {
  imgSrc: string;
  title: string;
  price: number | string;
}

function ProductCard({imgSrc, title, price}: Props) {
  return (
    <div className='w-full p-3 rounded'>
      <div className='w-full aspect-square'>
        <Image src={imgSrc} layout='fill'/>
      </div>

      <Typography size='lg'>
        {title}
      </Typography>

      <div className='flex items-center justify-between'>
        <AddToCartButtons />

        <Price price={price} />
      </div>
    </div>
  );
}

export default ProductCard;