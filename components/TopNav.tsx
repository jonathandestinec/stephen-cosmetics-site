import React from 'react'
import Cart from './Cart';
import Image from 'next/image';
import CounterBadge from './CounterBadge';
import SectionsLink from './SectionsLink';

interface TopNavProps {
    cartOpen: boolean;
    handleSetCartOpen: (state: boolean) => void;
    cartItems: ProductCardProps[];
    handleUpdateCartItems: (newItem: ProductCardProps) => void;
    handleRemoveFromCart: (productId: number) => void;
    mode: SectionsLinkProps["mode"];
    useFilter: boolean
}


const TopNav = ({ cartItems, cartOpen, handleUpdateCartItems, handleRemoveFromCart, handleSetCartOpen, mode, useFilter }: TopNavProps) => {
    return (
        <div>
            {/* Cart */}
            <Cart cartItems={cartItems} handleUpdateCartItems={handleUpdateCartItems} cartOpen={cartOpen} handleSetCartOpen={handleSetCartOpen} handleRemoveFromCart={handleRemoveFromCart} />

            <div className=' w-full h-max bg-black/95 backdrop-blur-lg sticky flex items-center justify-center'>

                {/* Social Handles */}
                <div className=' w-max flex items-center
   justify-center lg:scale-100 md:scale-75 scale-[60%]'>

                    <div className=' flex items-center justify-center w-max py-2 px-5 gap-4 scale-90'>
                        <a href="">
                            <i className="fi fi-brands-facebook text-white flex items-center justify-center text-xl hover:text-rose-300 transition-all ease-in-out duration-100"></i>
                        </a>
                        <a href="">
                            <i className="fi fi-brands-twitter-alt-circle text-white flex items-center justify-center text-xl hover:text-rose-300 transition-all ease-in-out duration-100"></i>
                        </a>
                        <a href="">
                            <i className="fi fi-brands-instagram text-white flex items-center justify-center text-xl hover:text-rose-300 transition-all ease-in-out duration-100"></i>
                        </a>

                        <a href="">
                            <i className="fi fi-brands-whatsapp text-white flex items-center justify-center text-xl hover:text-rose-300 transition-all ease-in-out duration-100"></i>
                        </a>
                    </div>

                    <div className=' flex items-center justify-center border-l-[1px] border-gray-600 w-max py-2 px-5 gap-2 scale-90'>
                        <a href="tel:+2349061426386" className='text-white flex items-center justify-center gap-2'>
                            <i className="fi fi-rr-phone-call text-white flex items-center justify-center"></i>
                            <span className=' text-sm'></span>CONTACT US
                        </a>
                    </div>

                    <div className=' flex items-center justify-center border-l-[1px] border-gray-600 w-max py-2 px-5 gap-2 scale-90'>
                        <a href="/newsletter" className='text-white flex items-center justify-center gap-2'>
                            <i className="fi fi-rr-envelope text-white flex items-center justify-center"></i>
                            <span className=' text-sm'>NEWSLETTER</span>
                        </a>
                    </div>

                    <div className=' flex items-center justify-center border-l-[1px] border-gray-600 w-max py-2 px-5 gap-2 scale-90'>
                        <a href="" className='text-white flex items-center justify-center gap-2'>
                            <i className="fi fi-rr-envelope text-white flex items-center justify-center"></i>
                            <span className=' text-sm'>FAQS</span>
                        </a>
                    </div>

                </div>

            </div>

            {/* Desktop Navigation */}
            <nav className=' flex items-center justify-between w-full p-5 py-0 mt-5 relative'>

                <div className=' w-max'>
                    <a href="/">
                        <Image src={"/assets/logo.webp"} width={120} height={120} alt='Logo' />
                    </a>
                </div>

                <div className=' w-full items-center justify-start'>
                    <h2 className=' text-center font-medium md:text-xl text-base underline underline-offset-2 m-0 w-max ml-8'>
                        ADS/OFFERS HERE
                    </h2>
                </div>

                {/* Cart */}
                <div className=' h-12 w-12 fixed z-40 top-0 right-0 transform -translate-x-5 mt-16 rounded-full bg-white/55 backdrop-blur-md flex items-center justify-center'>
                    <div className=' w-max h-max cursor-pointer relative' onClick={() => {
                        handleSetCartOpen(true)
                    }}>
                        <i className="fi fi-rr-shopping-bag flex items-center justify-center text-lg"></i>

                        <CounterBadge count={cartItems.length} />

                    </div>
                </div>
            </nav>

            {/* Sections Link */}
            <div className=' w-full md:scale-100 scale-90 overflow-x-scroll ml-auto mr-auto border-y-[1px] border-slate-300 flex'>
                <div className=' md:flex block items-center justify-center md:pl-10 md:pr-10 p-0 gap-5 whitespace-nowrap w-max'>
                    {
                        useFilter && (
                            <SectionsLink mode={mode} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TopNav