"use client";
import React from 'react';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import jo1 from './/img/iStock-1390066236-1024x615.jpg';
import jo2 from './/img/Iris-van-Herpen_Sculpting-the-Senses_installation-view_12_GOMA_C-Callistemon_supplied.jpg';
import jo3 from './/img/Cute-Summer-Outfits-from-Top-Fashion-Brands_4.webp';
import jo4 from './/img/bodycon-fitted-dress.png';

function Page({ children }) {
    return (
        <>
            <section className='h-[100vh] bg-back-1 bg-center bg-cover flex justify-center content-center flex-wrap capitalize'>
                <h2 className='w-full text-[48px] h-fit justify-center flex text-[white]'>LONDØNWORKS</h2>
                <p className='w-full text-[28px] h-fit justify-center flex text-[white]'>Slow fashion & underground culture</p>
            </section>
            <section className='w-full flex flex-wrap capitalize justify-center'>
                <div className='w-full justify-center items-center content-center flex flex-wrap my-20'>
                    <h2 className='w-full flex justify-center my-5 text-[28px] text-center'>YOUR LOCAL INDEPENDENT BOUTIQUE</h2>
                    <a href="" className='w-full flex justify-center md:text-[15px] text-center text-[12px]'>Shop our curated collection of homeware, fashion, gifts, and beauty</a>
                </div>
                <div className='w-fulls justify-center flex text-center'>
                    <p className='flex w-full my-10 '>FEATURED COLLECTIONS</p>
                </div>
                <div className='w-full flex flex-wrap justify-center content-center'>
                    <figure className="flex flex-col items-center m-5">
                        <Link href="/men">
                            <div className="relative group">
                                <Image
                                    src={jo1}
                                    alt="Revolution Clothing"
                                    width={800}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                        </Link>
                        <figcaption className="mt-2 text-center text-gray-700 text-[25px]">men clothing</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center m-5">
                        <Link href='/technology'>
                            <div className="relative group">
                                <Image
                                    src={jo2}
                                    alt="Revolution Clothing"
                                    width={800}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>

                        </Link>
                        <figcaption className="mt-2 text-center text-gray-700 text-[25px]">technology</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center m-5">
                        <Link href='/women'>
                            <div className="relative group">
                                <Image
                                    src={jo3}
                                    alt="Revolution Clothing"
                                    width={800}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>

                        </Link>
                        <figcaption className="mt-2 text-center text-gray-700 text-[25px]">women clothing</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center m-5 ">
                        <Link href='/classy'>
                            <div className="relative group">
                                <Image
                                    src={jo4}
                                    alt="Revolution Clothing"
                                    width={800}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                        </Link>
                        <figcaption className="mt-2 text-center text-gray-700 text-[25px]">classy</figcaption>
                    </figure>
                </div>
            </section>
        </>
    );
}

export default Page;
