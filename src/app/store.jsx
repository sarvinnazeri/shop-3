import local from "next/font/local";
import { create } from 'zustand';

const useStore = create((set) => ({
    products: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartProducts')) || [] : [],
    num: 0,
    addProduct: (product) => set((state) => {
        const existingProduct = state.products.find((item) => item.id === product.id);
        let newProducts;
        if (existingProduct) {
            alert('Product is already in cart');
            newProducts = [...state.products];
        } else {
            newProducts = [...state.products, product];
        }
        localStorage.setItem('cartProducts', JSON.stringify(newProducts));
        return { products: newProducts };
    }),
    plusFormCart: (pId) => set((state) => {
        const index = state.products.findIndex((item) => item.id === pId);
        if (index !== -1) {
            state.products[index].count += 1;
            const newProducts = [...state.products];
            localStorage.setItem('cartProducts', JSON.stringify(newProducts));
            return { products: newProducts };
        }
    }),
    minusFormCart: (pId) => set((state) => {
        const index = state.products.findIndex((item) => item.id === pId);
        if (index >= 0) {
            state.products[index].count -= 1;
            let newProducts;
            if (state.products[index].count === 0) {
                newProducts = state.products.filter((item) => item.id !== pId);
            } else {
                newProducts = [...state.products];
            }
            localStorage.setItem('cartProducts', JSON.stringify(newProducts));
            return { products: newProducts };
        }
    }),
    totalPrice: () => set((state) => {
        let total = 0;
        state.products.forEach((item) => {
            total += item.price * item.count;
        });
        return { num: total };
    })
}));

export default useStore;
