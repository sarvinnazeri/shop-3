"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import useStore from '../store';

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products/');
    if (!res.ok) {
        throw new Error('failed to fetch');
    }
    return res.json();
}

export default function Page() {
    const { addProduct } = useStore();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData()
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="w-full h-[300px] flex justify-center items-center capitalize text-[30px] text-[black] bg-back-2">
                <h2>Revolution Clothing</h2>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20">
                    {data.map(product => (
                        <Example key={product.id} temp={product} addProduct={addProduct} />
                    ))}
                </div>
            </div>
        </>
    );
}

function Example({ temp, addProduct }) {
    const x = `/all/${temp.id}`;

    return (
        <div className="bg-white bg-center shadow-lg rounded-lg overflow-hidden">
            <Link href={x} className='group'>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                    <img
                        alt={temp.title}
                        src={temp.image}
                        className="w-full object-contain object-center group-hover:opacity-75 transition duration-300 h-[200px]"
                    />
                </div>
                <div className="p-4 h-[130px]">
                    <h3 className="text-sm text-gray-700">{temp.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${temp.price}</p>
                </div>
            </Link>
            <div className="p-4">
                <button
                    onClick={() => addProduct(temp)}
                    className="w-full bg-[rgb(67,96,118)] text-white py-2 rounded-lg hover:bg-[rgb(67,96,118)] transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
