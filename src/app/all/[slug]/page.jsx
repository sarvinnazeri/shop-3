// app/all/[slug]/page.js
'use client';
import { useRef } from 'react';

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


    const imageRef = useRef(null);
    const handleMouseMove = (e) => {
        const zoomableImage = imageRef.current;
        const { left, top, width, height } = zoomableImage.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        zoomableImage.style.transformOrigin = `${x}% ${y}%`;
        zoomableImage.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
        const zoomableImage = imageRef.current;
        zoomableImage.style.transform = 'scale(1)';
    };

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

            <div className="container mx-auto px-4 py-8 my-20 justify-center flex flex-wrap">
                <div className="w-full">
                    <div key={data.id} className="bg-white border rounded-lg overflow-hidden mx-auto ">
                        <div className="p-4 flex *:w-full flex-wrap *:lg:w-[50%] content-center items-center">
                            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="mt-4 relative group justify-center my-5 flex overflow-hidden" onMouseMove={handleMouseMove}>
                                <img ref={imageRef} src={data.image} alt={data.title} className="w-full h-[300px] px-10 object-contain rounded-lg transition-transform duration-300 transform" id="zoomable-image" />
                            </div>
                            <div >
                                <div className="mt-5 mb-2">
                                    <h2 className="text-[25px] mb-2 uppercase">{data.title}</h2>
                                    <p className="text-[15px] text-[rgb(105,114,123)]">${data.price}</p>
                                    <p className="text-[15px] text-[rgb(105,114,123)] capitalize mb-10 pt-2">tax included</p>
                                    <div className='my-5 flex flex-wrap *:w-full justify-center'>
                                        <label className='text-[14px]'>Size</label>
                                        <select className='border py-4 mt-4 px-2' >
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L" selected="selected">L</option>
                                        </select>
                                        <button
                                            onClick={() => addProduct({ ...data, count: 1 })}
                                            className="uppercase mt-4 w-full bg-[rgb(113,128,140)] text-white py-4  hover:bg-[rgb(67,96,118)] transition duration-300 text-xs"
                                        >
                                            Add to Cart
                                        </button>
                                        <button className='bg-[rgb(69,36,218)] uppercase text-white text-xs py-4 my-4'>
                                            buy with shop pay
                                        </button>
                                        <a href="" className='capitalize underline text-[rgb(105,114,123)] text-[13px] w-full justify-center flex'>More payment options</a>
                                    </div>

                                    <div className='border p-5 *:text-[14px]'>
                                        <span className='uppercase text-[rgb(105,114,123)]'>details</span>
                                        <p className='text-[rgb(105,114,123)] mt-5'>{data.description}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
