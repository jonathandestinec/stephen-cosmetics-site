"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import useStore from '@/store'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/button"
import { useRouter } from 'next/navigation'

const ProductNavigation = ({ mode }: SectionsLinkProps) => {
    const { SetCurrentCategoryToView, CurrentCategoryToView, } = useStore()
    const router = useRouter()

    const homeCategories: Array<CategoryTypes["categories"]> = [
        "NEW",
        "MAKEUP",
        "SKINCARE",
        "HAIR",
        "FEATURED",
    ]

    const categories: Array<CategoryTypes["categories"]> = [
        "ALL",
        "MAKEUP",
        "SKINCARE",
        "HAIR",
        "PRODUCTS",
        "OTHER-ESSENTIALS",
        "NAILS"
    ]

    const handleCategoryClick = (category: CategoryTypes["categories"]) => {
        SetCurrentCategoryToView(category)
    }

    const handleHomeNavLinksClick = (category: CategoryTypes["categories"]) => {
        if (category === "NEW") {
            document.getElementById("new")?.scrollIntoView()
        }
        else if (category === "FEATURED") {
            document.getElementById("featured")?.scrollIntoView()
        }
        else {
            SetCurrentCategoryToView(category)
            router.push("/products")
        }
    }

    return (
        <div className="w-full bg-background py-4 border-y flex items-center justify-center">
            {
                mode === "actions" ? (
                    <ScrollArea className="w-max">
                        <div className="flex space-x-2 px-4 items-center">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={CurrentCategoryToView === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleCategoryClick(category)}
                                    className={cn(
                                        "transition-colors",
                                        CurrentCategoryToView === category
                                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                            : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    {category.replace("-", " ")}
                                </Button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                ) : (
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex space-x-2 px-4">
                            {homeCategories.map((category) => (
                                <Button
                                    variant={'outline'}
                                    size="sm"
                                    className={cn("bg-background text-foreground hover:bg-accent hover:text-accent-foreground")}
                                    key={category}
                                    onClick={() => {
                                        handleHomeNavLinksClick(category)
                                    }}
                                >
                                    {category.replace("-", " ")}
                                </Button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                )
            }
        </div>
    )
}

export default ProductNavigation