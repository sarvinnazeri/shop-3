import React from 'react';
import Link from 'next/link';

export default function Albumm({ album }) {
    return (
        <>
            {Object.keys(album).map((key, index) => (
                <figure className=' '>
                    <img
                        src={album[key].img}
                        className='w-full object-cover cursor-pointer'
                        alt={album[key].fig}
                    />
                    <figcaption className='text-[20px] my-4'>
                        {album[key].fig}
                    </figcaption>
                    <span className='text-[13px]'>{album[key].span1}</span>
                    <p className='my-5 text-[rgb(105,114,123)] text-[13px]'>
                        {album[key].p}
                    </p>
                    <div className='text-[13px] flex my-5 *:mr-4 *:underline'>
                        <Link href={'/albums/albumsoftheyear'} >
                            album of the year
                        </Link>

                        <Link href={'/albums/blog'} >
                            blog
                        </Link>

                        <Link href={'/albums/music'} >
                            music
                        </Link >
                        <Link href={'/albums'} >
                            all
                        </Link >
                    </div >
                    <span className='uppercase border px-4 py-2 border-black text-[14px] cursor-pointer'>
                        read more
                    </span>
                </figure >
            ))
            }

        </>
    );
}
