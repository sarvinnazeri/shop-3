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
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterOption, setFilterOption] = useState('all');
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setData(data);
            setFilteredData(data);
        }
        fetchData();
    }, []);

    const handleFilterChange = (event) => {
        const { value } = event.target;
        setFilterOption(value);
        setCurrentPage(1);

        let filtered;
        if (value === 'all') {
            filtered = data;
        } else {
            filtered = data.filter(product => product.category === value);
        }
        setFilteredData(filtered);
    };

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortOption(value);

        let sorted = [...filteredData];
        if (value === 'price') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (value === 'name') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        }
        setFilteredData(sorted);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    // Logic for displaying the current page data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <section>
            <div className="w-full h-[300px] flex justify-center items-center capitalize text-[30px] bg-center bg-cover text-[white] bg-back-all">
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
                            onChange={handleFilterChange}
                            value={filterOption}
                        >
                            <option value="all">All topics</option>
                        </select>
                    </div>
                    <div className="*:mx-2 *:my-2 relative">
                        <span>sort by</span>
                        <select
                            id="SortOption"
                            aria-describedby="a11y-refresh-page-message"
                            className='border-black border p-2 w-[150px] lg:w-[200px] mt-1'
                            onChange={handleSortChange}
                            value={sortOption}
                        >
                            <option value="name">name</option>
                            <option value="price">price</option>
                        </select>
                    </div>
                </div>
                <span className="text-[13px] px-7 lg:my-0 mt-5">{filteredData.length} products</span>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20">
                    {currentData.map(product => (
                        <Example key={product.id} temp={product} addProduct={addProduct} />
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`mx-2 p-2 px-3 ${currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Example({ temp, addProduct }) {
    const x = `/all/${temp.id}`;
    return (
        <div className="bg-white bg-center  overflow-hidden">
            <Link href={x} className='group'>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                        alt={temp.title}
                        src={temp.image}
                        className="w-full object-contain object-center group-hover:opacity-75 transition duration-300 h-[200px]"
                    />
                </div>
                <div className="p-4 h-[100px]">
                    <h3 className="text-sm text-gray-700">{temp.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${temp.price}</p>
                </div>
            </Link>
            <div className="p-4">
                <button
                    onClick={() => addProduct(temp)}
                    className="mt-4 w-full bg-[rgb(113,128,140)] text-white py-2 hover:bg-gray-400 transition duration-300 text-xs"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
