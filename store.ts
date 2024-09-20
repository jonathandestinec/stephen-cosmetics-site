import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from "./hooks/use-toast"

interface StoreProps {
    cartOpen: boolean;
    handleSetCartOpen: (state: boolean) => void;
    cartItems: ProductCardProps[];
    handleUpdateCartItems: (newItem: ProductCardProps) => void;
    handleRemoveFromCart: (productId: number) => void;
    SetCurrentCategoryToView: (category: CategoryTypes["categories"]) => void;
    CurrentCategoryToView: CategoryTypes["categories"];
}

const useStore = create<StoreProps>()(
    persist(
        (set, get) => ({
            cartOpen: false,
            cartItems: [],
            handleSetCartOpen: (state) => {
                set({ cartOpen: state })
            },

            handleUpdateCartItems: (newItem) => {
                set({
                    cartItems: [...get().cartItems, newItem]
                })

                toast({
                    title: "Product added"
                })
            },

            handleRemoveFromCart: (productId) => {
                set({
                    cartItems: get().cartItems.filter(item => item.id !== productId)
                })

                toast({
                    title: "Product removed",
                    variant: "destructive"
                })
            },

            SetCurrentCategoryToView: (category) => {
                set({ CurrentCategoryToView: category })
            },

            CurrentCategoryToView: "ALL",
        }),

        {
            name: 'cart-storage', // Key for local storage
        }
    ))

export default useStore