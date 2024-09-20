"use client"

import useStore from '@/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryCard = ({ previewImage, category }: CategoryCardProps) => {

    const { SetCurrentCategoryToView } = useStore()
    const router = useRouter()

    const handleNavigateCategory = () => {
        SetCurrentCategoryToView(category.toUpperCase() as CategoryTypes["categories"])
        router.push("/products")
    }

    return (
        <div className=' relative lg:w-3/5 md:w-[40%] w-2/5 lg:h-80 md:h-48 h-20 overflow-hidden lg:rounded-3xl md:rounded-2xl rounded-xl bg-slate-400 cursor-pointer ml-auto md:m-0 mr-auto' onClick={() => {
            handleNavigateCategory()
        }}>
            <Image src={previewImage} width={300} height={300} alt={category} className=' z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-sm' />

            <div className=' absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-950/50 blur-md rounded-3xl' />

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold md:text-xl text-base uppercase w-max z-20'>
                <span className=' text-center text-white'>
                    {category}
                </span>
            </div>
        </div>
    )
}

export default CategoryCard