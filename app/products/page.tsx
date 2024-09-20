"use client"

import TopNav from '@/components/TopNav'
import useStore from '@/store'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { products } from '@/lib/dummyData'
import ProductCard from '@/components/ProductCard'
import UserFeedback from '@/components/feedback'
import ContactForm from '@/components/contact-form'

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["cyrillic"] })

export default function Page() {
    const { handleRemoveFromCart, handleSetCartOpen, handleUpdateCartItems, cartItems, cartOpen, CurrentCategoryToView } = useStore()

    return (
        <div className={`${montserrat.className}`}>
            <TopNav
                cartItems={cartItems}
                cartOpen={cartOpen}
                handleRemoveFromCart={handleRemoveFromCart}
                handleSetCartOpen={handleSetCartOpen}
                handleUpdateCartItems={handleUpdateCartItems}
                mode="actions"
                useFilter={true}
            />

            <section className="container mx-auto px-4 py-8 w-4/5 ml-auto mr-auto">
                {
                    CurrentCategoryToView === "ALL" ? (
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                            {
                                products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        details={product}
                                        handleUpdateCartItems={handleUpdateCartItems}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                            {products
                                .filter(product => product.category === CurrentCategoryToView)
                                .map(product => (
                                    <ProductCard
                                        key={product.id}
                                        details={product}
                                        handleUpdateCartItems={handleUpdateCartItems}
                                    />
                                ))}
                        </div>
                    )
                }
            </section>

            <section className=' w-full py-14'>
                <UserFeedback />
            </section>

            <section className=' w-full py-14'>
                <ContactForm />
            </section>
        </div>
    )
}