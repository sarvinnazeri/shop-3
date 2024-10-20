"use client";
import React from 'react';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import { Album } from '@mui/icons-material';
import Albumm from './album-covers/page';
import Bestsellers from './bestsellers/page';

function Page({ children }) {

    const album = {
        aval: { fig: 'AN INTERVIEW WITH ANALOG DANCE - Stranger Minds Album', img: 'https://londonworks.com/cdn/shop/articles/41KJoSaihzL._UXNaN_FMjpg_QL85_720x.jpg?v=1728923369', span1: 'October 16, 2024', span2: '', p: ' London based DIY electronic/dark wave project Analog Dance has released his first album Stranger Minds. This artist operates with a newly s...', },
        dovom: { fig: 'MOLCHAT DOMA - "Belaya Polosa" Album Review', img: 'https://londonworks.com/cdn/shop/articles/MOLCHATDOMA-BELAYAPOLOSA-PACKSHOT_1296x.jpg?v=1727274188', span1: 'September 25, 2024', span2: '', p: '"Belaya Polosa" is the fourth album by Belarus post-punk trio Molchat Doma. Globally known for their unmistakable gloomy post-Soviet sound, t...', },
        sevom: { fig: 'SYDNEY VALETTE - "The Healer" Album Review', img: 'https://londonworks.com/cdn/shop/articles/S-Vallete-Cover_1296x.jpg?v=1726769520', span1: 'September 19, 2024', span2: '', p: ' The Healer is the new LP by Paris based electronic artist Sydney Valette. After the success of "Other Side", and "Home Alone", among his many ...', },
    }

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
                    <p className='flex w-full mt-10'>FEATURED COLLECTIONS</p>
                </div>
                <div className='w-[90%] flex flex-wrap justify-center content-center my-20 *:p-5'>
                    <figure className="flex flex-col  w-[50%] justify-center relative items-center">
                        <Link href="/men">
                            <div className="relative group w-full">
                                <img src="https://londonworks.com/cdn/shop/collections/jN14ZBy7_14577bd2-581b-407e-ab39-0b6e73ab7477.jpg?v=1707301413" alt="" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                        </Link>
                        <figcaption className="mt-2 text-center text-white text-[25px] absolute">men clothing</figcaption>
                    </figure>
                    <figure className="flex flex-col  w-[50%] justify-center relative items-center">
                        <Link href='/technology'>
                            <div className="relative group">
                                <img src="https://londonworks.com/cdn/shop/collections/Screenshot_2024-02-07_at_11.31.12.png?v=1707302080" alt="" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                        </Link>
                        <figcaption className="mt-2 text-center text-white text-[25px] absolute">technology</figcaption>
                    </figure>
                    <figure className="flex flex-col  w-[50%] justify-center relative items-center">
                        <Link href='/women'>
                            <div className="relative group">
                                <img src="https://londonworks.com/cdn/shop/collections/Screenshot_2023-11-17_at_13.33.19_1080x.png?v=1707301035" alt="" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>

                        </Link>
                        <figcaption className="mt-2 text-center text-white text-[25px] absolute">women clothing</figcaption>
                    </figure>
                    <figure className="flex flex-col w-[50%] relative justify-center items-center">
                        <Link href='/classy'>
                            <div className="relative group h-full">
                                <img src="https://londonworks.com/cdn/shop/collections/HUNTERSJACKET_RACINGGREENHALFPANAMA-4_1_1024x1024_2x_ea59a7ca-2e25-49b0-9c58-9144659a9d7f_1080x.jpg?v=1727717597" alt="" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition duration-300"></div>
                            </div>
                        </Link>
                        <figcaption className="mt-2 text-center text-white text-[25px] absolute">classy</figcaption>
                    </figure>
                </div>



                <div className=' w-[85%] justify-center content-center flex flex-wrap py-10'>
                    <h2 className='my-5 text-[20px]'>Best sellers product</h2>
                    <div className='w-full flex flex-wrap justify-center lg:justify-between  *:p-5 content-center mb-20'>
                        <Bestsellers />
                    </div>
                </div>

                <div className=' w-[85%] justify-center content-center flex flex-wrap py-10'>
                    <h2 className='my-5 text-[20px]'>Blog posts</h2>
                    <div className='w-full flex flex-wrap *:lg:w-[33.33%] *:w-[85%] justify-center lg:justify-between  *:p-5 content-center mb-20'>
                        <Albumm album={album} />
                    </div>
                </div>



            </section>
        </>
    );
}

export default Page;
