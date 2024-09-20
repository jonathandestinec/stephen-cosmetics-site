declare type CounterBadgeProps = {
    count: number
}

declare type ProductCardProps = {
    id: number,
    name: string,
    image: string,
    price: number,
    description: string,
    category: string
}

declare type CategoryCardProps = {
    previewImage: string,
    category: string,
}

declare type SectionsLinkProps = {
    mode: "sections" | "actions"
}

declare type CategoryTypes = {
    categories: "NEW" | "MAKEUP" | "SKINCARE" | "HAIR" | "PERSONAL-CARE" | "OTHER-ESSENTIALS" | "UPCOMING-PRODUCTS" | "BRANDS" |"PRODUCTS" | "BRIDAL-KIT" | "OTHER-ESSENTIALS" | "ALL" | "FEATURED" | "NAILS"
}