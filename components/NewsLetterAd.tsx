import Image from 'next/image'
import React from 'react'
import NewsletterPopup from './news-letter-popup'

const NewsLetterAd = () => {
    return (
        <div>
            <section id='newsletter' className=' w-full py-10 relative'>
                <Image src={"/assets/other/adBanner.jpg"} width={1000} height={1000} alt='News Letter' className=' ml-auto mr-auto md:rounded-3xl rounded-md filter brightness-[20%] blur-md' />

                {/* Add a text that says Subscribe To Our Newsletter, and a button that says Subscrbe. The buttons should be absolute and centered on the parent */}

                <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-max md:scale-100 scale-75'>

                    <h2 className=' text-white font-bold md:text-3xl text-xl mb-10'>Subscribe To Our Newsletter</h2>

                    <NewsletterPopup />

                </div>

            </section>
        </div>
    )
}

export default NewsLetterAd