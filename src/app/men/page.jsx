"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useStore from '../store';

async function getData() {
    const productIds = [1, 2, 3, 4];
    const requests = productIds.map(id => fetch(`https://fakestoreapi.com/products/${id}`));
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(res => {
        if (!res.ok) {
            throw new Error('failed to fetch');
        }
        return res.json();
    }));
    return data;
}

export default function Page() {
    const { addProduct } = useStore();
    const [data, setData] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setData(data);
        }
        fetchData();
    }, []);

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortOption(value);

        let sortedData;
        if (value === 'price') {
            sortedData = [...data].sort((a, b) => a.price - b.price);
        } else if (value === 'name') {
            sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
        }
        setData(sortedData);
    };

    return (
        <section>
            <div className="w-full h-[300px] flex justify-center items-center capitalize text-[30px] bg-center bg-cover text-[white] bg-back-men">
                <h2>Revolution Clothing</h2>
            </div>
            <div className="py-5 border flex w-full mt-10 justify-between lg:items-center content-center px-2 lg:px-20 flex-wrap">
                <div className=" *:mx-5 text-[13px] *:uppercase w-full lg:w-[70%] flex justify-start">
                    <div className="*:mx-2 *:my-2 relative">
                        <span className='h-full content-center'>filter by</span>
                        <select
                            id="BlogTagFilter"
                            aria-describedby="a11y-refresh-page-message"
                            className='border-black border p-2 w-[150px] lg:w-[200px] mt-1'
                        >
                            <option value="/albums">All topics</option>
                            <option value="/albums/albumsoftheyear">bag</option>
                            <option value="/albums/blog">t-shirt</option>
                            <option value="/albums/music">jacket</option>
                        </select>
                    </div>
                    <div className="*:mx-2 *:my-2 relative">
                        <span>sort by</span>
                        <select
                            id="SortOption"
                            aria-describedby="a11y-refresh-page-message"
                            className='border-black border p-2 w-[150px] lg:w-[200px] mt-1'
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="name">name</option>
                            <option value="price">price</option>
                        </select>
                    </div>
                </div>
                <span className="text-[13px] px-7 lg:my-0 mt-5">{data.length} products</span>
            </div>
            <div className="container my-20 mx-auto">
                <div className="flex flex-wrap ">
                    {data.map(product => (
                        <div key={product.id} className="bg-gray overflow-hidden lg:w-[25%] w-[50%] ">
                            <div className="p-4 h-[400px] ">
                                <Link href={`/all/${product.id}`} className="group">
                                    <div className="mt-4 relative group">
                                        <img src={product.image} alt={product.title} className="w-full h-[150px] object-contain rounded-lg" />
                                        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                                    </div>
                                    <div className="h-[100px] mt-5 mb-2">
                                        <h2 className="text-[15px] mb-2">{product.title}</h2>
                                        <p className="text-[13px] text-[rgb(149,155,161)]">${product.price}</p>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => addProduct({ ...product, count: 1 })}
                                    className="mt-4 w-full bg-[rgb(113,128,140)] text-white py-2 hover:bg-gray-400 transition duration-300 text-xs"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
