"use client"

import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { newProducts } from '@/lib/dummyData'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import TopNav from '@/components/TopNav'
import useStore from '@/store'
import NewsLetterAd from '@/components/NewsLetterAd'
import UserFeedback from '@/components/feedback'
import ContactForm from '@/components/contact-form'

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["cyrillic"] })

const Page = () => {

  const { handleRemoveFromCart, handleSetCartOpen, handleUpdateCartItems, cartItems, cartOpen } = useStore()

  return (
    <div className={`${montserrat.className}`}>

      <TopNav useFilter={true} cartItems={cartItems} cartOpen={cartOpen} handleRemoveFromCart={handleRemoveFromCart} handleSetCartOpen={handleSetCartOpen} handleUpdateCartItems={handleUpdateCartItems} mode="sections" />

      <div>
        <Image src={"/assets/banner.jpg"} width={1100} height={1000} alt='banner' className=' ml-auto mr-auto mt-7' />
      </div>

      <section id='categories' className=' w-full py-14 px-14 pb-5'>

        <h1 className=' text-center font-bold text-3xl'>Categories</h1>

        {/* Different Categories */}
        <div className=' flex flex-wrap flex-1 items-center justify-center md:gap-7 gap-5 mt-16 overflow-x-scroll space-y-0'>
          <CategoryCard previewImage='/assets/products/hair1.png' category='Hair' />
          <CategoryCard previewImage='/assets/products/nail1.png' category='Nails' />
          <CategoryCard previewImage='/assets/products/makeup16.jpg' category='Makeup' />
          <CategoryCard previewImage='/assets/products/skincare1.png' category='Skincare' />
        </div>

      </section>

      <section id='new' className=' w-full py-14'>
        <h1 className=' text-center font-bold md:text-3xl text-2xl'>New Arrivals</h1>

        {/* Different Products */}
        <div className=' container mx-auto px-4 py-8 w-4/5 ml-auto mr-auto'>
          <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 '>
            {newProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={index} details={product} handleUpdateCartItems={handleUpdateCartItems} />
            ))}
          </div>
        </div>

        <div className=' w-full flex items-center justify-center'>
          <a href="/new-arrivals">
            <button className="px-4 py-2 rounded-md border border-white bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ml-auto mr-auto w-max flex items-center justify-center gap-3">
              View All
              <span>
                <i className="fi fi-rr-arrow-small-right flex items-center justify-center"></i>
              </span>
            </button>
          </a>
        </div>

      </section>

      {/* Ad */}

      <NewsLetterAd />

      <section id='featured' className=' w-full py-14'>
        <h1 className=' text-center font-bold md:text-3xl text-2xl'>Featured Products</h1>

        {/* Different Products */}
        <div className='container mx-auto px-4 py-8 w-4/5 ml-auto mr-auto'>
          <div className='  grid grid-cols-1 md:grid-cols-4 gap-6 '>
            {newProducts.map((product, index) => (
              <ProductCard key={index} details={product} handleUpdateCartItems={handleUpdateCartItems} />
            ))}
          </div>
        </div>

        <div className=' w-full flex items-center justify-center'>
          <a href="/products">
            <button className="px-4 py-2 rounded-md border border-white bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ml-auto mr-auto w-max flex items-center justify-center gap-3">
              View All
              <span>
                <i className="fi fi-rr-arrow-small-right flex items-center justify-center"></i>
              </span>
            </button>
          </a>
        </div>

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

export default Page