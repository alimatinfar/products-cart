import Image from "next/image";
import Typography from "../../../UI/Typography/Typography";
import Price from "../../../general/Price";
import AddToCartButtons from "../../../general/AddToCartButtons";

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  price: number | string;
}

function ProductCard({id, imgSrc, title, price}: Props) {
  return (
    <div className='flex flex-col w-full p-3 rounded border duration-200 hover:shadow'>
      <div className='w-full aspect-square relative mb-4'>
        <Image src={imgSrc} layout='fill'/>
      </div>

      <div className='flex flex-col justify-between flex-1 space-y-4'>
        <Typography size='lg'>
          {title}
        </Typography>

        <div className='flex items-center justify-between'>
          <AddToCartButtons id={id} />

          <Price price={price} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;