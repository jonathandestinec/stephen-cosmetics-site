import Image from 'next/image'
import React from 'react'

interface CartProductsProps {
    cartItem: ProductCardProps;
    handleRemoveFromCart: (productId: number) => void
}

const CartProducts = ({ cartItem, handleRemoveFromCart }: CartProductsProps) => {
    return (
        <div className=' '>

            {/* Remove Item Button */}
            <div className=' w-full flex items-center justify-end px-8 mt-5'>
                <i className="fi fi-ss-trash flex items-center justify-center cursor-pointer text-red-600" onClick={() => {
                    handleRemoveFromCart(cartItem.id)
                }}></i>
            </div>

            <div className='flex items-center justify-between w-full px-4 py-2 border-b-[1px] border-slate-300 mb-5'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={cartItem.image}
                        alt={cartItem.name}
                        width={50}
                        height={50}
                    />
                    <div>
                        <p className='font-medium text-sm'>{cartItem.name}</p>
                        <p className='text-xs text-gray-500'>{cartItem.description}</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className='font-medium text-sm'>${cartItem.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartProducts