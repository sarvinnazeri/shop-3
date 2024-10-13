"use client";

import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../store';

export default function Page() {
    const { products, plusFormCart, minusFormCart, num, totalPrice } = useStore();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
        totalPrice();
    }, [totalPrice]);

    const change = () => {
        router.push('./all');
    };

    if (!isClient) {
        return (
            <img src="" alt="Loading..." />
        );
    }

    return (
        <div className="border justify-center flex h-[70vh] flex-wrap content-center *:justify-center *:m-2 overflow-scroll">
            <h1 className="flex justify-center text-[30px] w-full pt-20">Your cart</h1>
            {products.length === 0 && (
                <>
                    <span className="flex justify-center w-full">Your cart is currently empty.</span>
                    <button onClick={change} className="w-[200px] rounded-sm h-[40px] bg-[rgb(85,123,150)] flex justify-center items-center text-[white]">continue shopping</button>
                </>
            )}
            <ul className="flex w-full flex-wrap pt-[40px]">
                {products.map((val) => (
                    <li key={val.id} className="flex items-center p-4 border border-gray-300 rounded-md bg-gray-100 m-2 w-[80%]">
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{val.id} : {val.title} - ${val.price} - {val.count}</h2>
                            <em className="text-sm text-gray-600">Total: ${val.price * val.count}</em>
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-[rgb(67,96,118)] text-white rounded-md" onClick={() => {
                                plusFormCart(val.id);
                                totalPrice();
                            }}>Plus</button>
                            <button className="px-4 py-2 bg-[#9f6f6f] text-white rounded-md" onClick={() => {
                                minusFormCart(val.id);
                                totalPrice();
                            }}>Minus</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="flex justify-center w-full ">Total price is: ${num}</h3>
        </div>
    );
}
