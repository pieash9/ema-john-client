import React from 'react';
import { HiTrash } from "react-icons/hi";

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {_id,img, name , quantity, price} = product
    return (
        <div className='review-item  flex items-center'>
            <div className='flex grow items-center'>
                <img src={img} className='h-24 w-24 p-2 rounded' alt="" />
                <div className='mx-4'>
                    <p className='text-xl tracking-wide'>{name}</p>
                    <p>Price: $<span className='text-orange-500'>{price}</span></p>
                    <p>Order Quantity: <span className='text-orange-500'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={()=> handleRemoveFromCart(_id)} className='btn btn-error rounded-full h-16 w-16 bg-opacity-50 flex items-center justify-center mr-5'><HiTrash className='text-3xl text-red-700 '/></button>
        </div>
    );
};

export default ReviewItem;