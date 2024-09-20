"use client"

import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/card"
import { Button } from "@/components/button"
import { PlusCircle } from "lucide-react"

interface ProductCardProps {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

interface ProductCardPropsWithFunction {
  details: ProductCardProps
  handleUpdateCartItems: (product: ProductCardProps) => void
}

export default function ProductCard({ details, handleUpdateCartItems }: ProductCardPropsWithFunction) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={details.image}
          alt={details.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-30">
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100"
            onClick={() => handleUpdateCartItems(details)}
            aria-label={`Add ${details.name} to cart`}
          >
            <PlusCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold line-clamp-1">{details.name}</h2>
        <p className="text-sm text-muted-foreground">{details.category}</p>
      </CardContent>
      <CardFooter className=" w-full flex items-center justify-between p-4 pt-0">
        <span className="text-lg font-bold">${details.price.toFixed(2)}</span>
        <Button variant="outline" size="sm" className='' onClick={() => handleUpdateCartItems(details)}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}