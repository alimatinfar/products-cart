import React from 'react';

type Props = {
  price: number | string
}

function Price({price}: Props) {
  return (
    <div className='flex-center space-x-2 space-x-reverse font-medium'>
      <span>{price}</span>
      <span className='text-gray-400 text-sm'>تومان</span>
    </div>
  );
}

export default Price;