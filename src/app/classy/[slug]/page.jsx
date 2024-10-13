// app/all/[slug]/page.js
'use client';

import { useEffect, useState } from 'react';
import useStore from '../../store';

async function getData(slug) {
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default function Page({ params }) {
    const { addProduct } = useStore();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData(params.slug)
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, [params.slug]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <main className="justify-center flex flex-wrap">
            <div className="w-full h-[300px] flex justify-center items-center capitalize text-[30px] bg-center text-[black] bg-back-2">
                <h2>Revolution Clothing</h2>
            </div>
            <div className="container mx-auto px-4 py-8 my-20 justify-center flex flex-wrap">
                <div className="w-[400px]">
                    <div key={data.id} className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                        <div className="p-4">
                            <div className="mt-4 relative group">
                                <img src={data.image} alt={data.title} className="w-full h-[200px] object-contain rounded-lg" />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                            <div className="mt-5 mb-2">
                                <h2 className="text-lg font-bold mb-2">{data.title}</h2>
                                <p>{data.description}</p>
                                <strong className="text-md text-gray-900">${data.price}</strong>
                            </div>

                            <button
                                onClick={() => addProduct({ ...data, count: 1 })}
                                className="mt-4 w-full bg-[rgb(67,96,118)] text-white py-2 rounded-lg hover:bg-[rgb(67,96,118)] transition duration-300 text-xs"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
