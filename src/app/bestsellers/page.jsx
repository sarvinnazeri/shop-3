"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStore from "../store";

async function getData() {
    const productIds = [5, 11, 2, 15];
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

export default async function Bestsellers({ temp }) {
    const { addProduct } = useStore();
    const data = await getData();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {data.map(product => (
                    <div key={product.id} className="bg-gray overflow-hidden mx-auto lg:w-[25%] w-[50%] ">
                    <div className="p-4 h-[400px] ">
                        <Link href={`/all/${product.id}`} className="group">
                            <div className="mt-4 relative group">
                                <img src={product.image} alt={product.title} className="w-full h-[150px] object-contain rounded-lg" />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                            <div className="h-[70px] mt-5 mb-2">
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
            </Slider>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}
