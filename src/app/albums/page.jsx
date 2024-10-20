"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Albumm from '../album-covers/page';

export default function Page() {
    const router = useRouter();
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
        charom: {
            fig: 'KITE - VII Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/a1502820388_65_720x.jpg?v=1723577755',
            span1: 'September 19, 2024',
            span2: '',
            p: 'The Scandinavian synth-wave duo composed of Nicklas Stenemo and Christian Hutchinson Berg aka Kite have gifted us with countless singles and ...',
        },
        panjom: {
            fig: 'LABYRINTHUS STELLARUM - "Vortex Of The Worlds" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/1200x1200bb_720x.jpg?v=1721242337',
            span1: 'November 15, 2024',
            span2: '',
            p: 'Ukrainian cosmic black metal band Labyrinthus Stellarum, who entered the scene with Tales of the Void, have recently released their second f...',
        },
        sheshom: {
            fig: 'AN INTERVIEW WITH CHALK - Conditions II EP',
            img: 'https://londonworks.com/cdn/shop/articles/a3999289950_65_720x.jpg?v=1718366984',
            span1: 'January 4, 2024',
            span2: '',
            p: 'Having previously introduced and discussed this Belfast trio last year during the release of "Conditions", I recently had the immense pleasure...',
        },
        haftom: {
            fig: 'THE FLOWER CARTEL - "Dark Portraits" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/channels4_profile_720x.jpg?v=1708882874',
            span1: 'January 22, 2024',
            span2: '',
            p: 'The Flower Cartel is the new solo project of Danish producer and multi instrumentalist Jens Søltoft Buur Holmboe. After many singles released ...',
        },
        hashtom: {
            fig: 'ABRICTION - "Banshee" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/a3550408342_65_720x.jpg?v=1708085330',
            span1: 'December 2, 2024',
            span2: '',
            p: 'Abriction is the shoegaze/atmospheric black metal project ran by Meredith Salvatori, a very prolific American artist known for her filtered po...',
        },
        nohom: {
            fig: 'ARKONA - "KOB" ALBUM REVIEW',
            img: 'https://londonworks.com/cdn/shop/articles/R-27380043-1686742386-8802_720x.jpg?v=1702429247',
            span1: 'November 6, 2024',
            span2: '',
            p: 'After one of the longest breaks in between albums, Arkonas release of Kob proved to be worth the wait. The name of this record translates a...',
        },
    };
    const handleFilterChange = (event) => {
        const { value } = event.target;
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
                >
                    <option value="select">Select an option</option>
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
