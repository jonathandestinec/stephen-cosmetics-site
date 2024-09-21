"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import CartProducts from './CartProducts';
import { handleCheckout } from '@/lib/utilityFunctions';

interface CartProps {
    cartOpen: boolean;
    handleSetCartOpen: (state: boolean) => void;
    cartItems: ProductCardProps[];
    handleUpdateCartItems: (newItem: ProductCardProps) => void;
    handleRemoveFromCart: (productId: number) => void;
}

const Cart = ({ cartOpen, handleSetCartOpen, cartItems, handleRemoveFromCart }: CartProps) => {
    return (
        <div className={cn(" transform translate-x-[1000px] transition-all ease-in-out duration-400 lg:w-2/4 md:w-3/4 w-full h-screen fixed top-0 right-0 bg-white z-50 p-5 border-l-[1px] border-l-gray-300", {
            "transform translate-x-0": cartOpen
        })}>

            <div className=' w-full flex items-center justify-between md:scale-100 scale-90'>

                {/* Checkout Btn */}

                <button className="px-4 py-2 rounded-md border border-white bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" onClick={() => {

                    // get the ids of each cart items
                    handleCheckout(cartItems.map(cartItem => cartItem.id))

                }}>
                    Check Out
                </button>

                {/* Total Price */}

                <div className='flex items-center gap-2'>
                    <p className='font-medium text-sm'>Total Price:</p>
                    <p className='font-medium text-sm text-gray-500'>${cartItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</p>
                </div>

                <i className="fi fi-rr-cross text-black text-base mt-0 mr-5 cursor-pointer" onClick={() => {
                    handleSetCartOpen(false)
                }}></i>
            </div>

            {/* Cart Products */}

            <div className=' h-full overflow-y-scroll pb-14 md:scale-100 scale-90'>
                {
                    cartItems.map((cartItem, index) => {
                        return (
                            <CartProducts key={index} cartItem={cartItem} handleRemoveFromCart={handleRemoveFromCart} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Cart