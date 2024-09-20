"use client"

import useStore from '@/store'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { products } from '@/lib/dummyData'
import ProductCard from '@/components/ProductCard'
import TopNav from '@/components/TopNav'

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["cyrillic"] })

export default function Page() {
    const { handleUpdateCartItems, cartOpen, cartItems, handleRemoveFromCart, handleSetCartOpen } = useStore()

    return (
        <div className={`${montserrat.className}`}>

            <TopNav useFilter={false} cartItems={cartItems} cartOpen={cartOpen} handleRemoveFromCart={handleRemoveFromCart} handleSetCartOpen={handleSetCartOpen} handleUpdateCartItems={handleUpdateCartItems} mode="sections" />

            <h1 className=' text-center text-3xl font-bold mt-7'>
                New Arrivals
            </h1>

            <section className="container mx-auto px-4 py-8 w-4/5 ml-auto mr-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {products.slice(0, 7).map(product => (
                        <ProductCard
                            key={product.id}
                            details={product}
                            handleUpdateCartItems={handleUpdateCartItems}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}