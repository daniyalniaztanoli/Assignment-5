import React from 'react'
import { Button_Comp } from './Button_Comp'

export const Sale_Two_Comp = () => {
  return (
    <div className='w-full items-center flex flex-col justify-center md:my-36 md:ms-10 space-y-5'>
        <h1 className='text-base text-gray-500 '>Lorem Ipsum is simply dummy text of the
printing and typesetting industry.</h1>
        <h1 className='text-5xl font-semibold'>Winter Discount Up to 30%</h1>
        <h1 className='text-base text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
      <Button_Comp/>
    </div>
  )
}
