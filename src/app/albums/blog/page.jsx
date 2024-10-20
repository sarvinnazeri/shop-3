"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Albumm from '../../album-covers/page';

export default function Page() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('/albums');

    const album = {
        aval: {
            fig: 'AN INTERVIEW WITH ANALOG DANCE - Stranger Minds Album',
            img: 'https://londonworks.com/cdn/shop/articles/41KJoSaihzL._UXNaN_FMjpg_QL85_720x.jpg?v=1728923369',
            span1: 'October 16, 2024',
            span2: '',
            p: 'London based DIY electronic/dark wave project Analog Dance has released his first album Stranger Minds. This artist operates with a newly s...',
        },
        dovom: {
            fig: 'MOLCHAT DOMA - "Belaya Polosa" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/MOLCHATDOMA-BELAYAPOLOSA-PACKSHOT_1296x.jpg?v=1727274188',
            span1: 'September 25, 2024',
            span2: '',
            p: '"Belaya Polosa" is the fourth album by Belarus post-punk trio Molchat Doma. Globally known for their unmistakable gloomy post-Soviet sound, t...',
        },
        sevom: {
            fig: 'SYDNEY VALETTE - "The Healer" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/S-Vallete-Cover_1296x.jpg?v=1726769520',
            span1: 'April 19, 2024',
            span2: '',
            p: 'The Healer is the new LP by Paris based electronic artist Sydney Valette. After the success of "Other Side", and "Home Alone", among his many ...',
        },
    };

    const handleFilterChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        if (value === "/albums") {
            window.location.href = '/albums';
        } else {
            router.push(value);
        }
    }

    return (
        <div className='w-[85%] justify-center content-center flex flex-wrap py-10 mx-auto'>
            <h2 className='text-[25px] content-center items-center'>LONDONWORKS lifestyle, art and music blog.</h2>
            <div className='my-10 mt-10 flex w-full justify-center *:mx-4'>
                <span className='h-full content-center'>filter by</span>
                <select
                    id="BlogTagFilter"
                    aria-describedby="a11y-refresh-page-message"
                    className='border-black border p-2'
                    onChange={handleFilterChange}
                    value={selectedOption}
                >
                    <option value="" disabled>Select an option</option>
                    <option value="/albums">All topics</option>
                    <option value="/albums/albumsoftheyear">album of the year</option>
                    <option value="/albums/blog">blog</option>
                    <option value="/albums/music">music</option>
                </select>
            </div>
            <div className='w-full flex flex-wrap *:lg:w-[33.33%] *:w-[85%] justify-center lg:justify-between *:p-5 content-center mb-20'>
                <Albumm album={album} />
            </div>
        </div>
    );
}
