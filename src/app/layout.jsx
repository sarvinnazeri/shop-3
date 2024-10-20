'use client'
import React, { useState } from 'react';
import './globals.css';
import Link from 'next/link';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

function Layout({ children }) {
    return (
        <html>
            <body className=''>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const toggleSearch = () => {
        setShowSearch(!showSearch);

    };

    const closeSearch = () => {
        setShowSearch(false);
        setSearchTerm('');
        setFilteredProducts([]);
    };

    const search = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };

    return (
        <header className='w-full bg-white h-[70px] border flex uppercase text-black text-[13px]'>
            <nav className='w-full flex justify-between items-center px-11'>
                <a href="/" className='text-lg font-bold'>LONDØNWORKS</a>
                <ul className='hidden space-x-4 justify-center items-center lg:flex cursor-pointer'>
                    <li key="men"><Link href='/men'>men</Link></li>
                    <li key="women"><Link href='/women'>women</Link></li>
                    <li key="classy"><Link href='/classy'>classy</Link></li>
                    <li key="technology"><Link href='/technology'>technology</Link></li>
                </ul>
                <ul className='flex space-x-4'>
                    <li key="home"><Link href="/" className='sm:flex hidden' aria-label="Home">
                        <HomeIcon />
                    </Link></li>
                    <li key="basket">
                        <div className="flex items-center">
                            <Link href="/basket" className='flex' aria-label="Basket">
                                <ShoppingBasketIcon />
                            </Link>
                        </div>
                    </li>
                    <li key="search" onClick={toggleSearch} aria-label="Search">
                        <SearchIcon className='cursor-pointer' />
                    </li>
                    <li key="all-products">
                        <Link href="/all" className='flex' aria-label="All Products">
                            All Products
                        </Link>
                    </li>
                </ul>
            </nav>
            {showSearch && (
                <div className='w-full flex justify-between mt-4 absolute bg-white content-center items-center *:border px-10'>
                    <input
                        type="text"
                        className='border p-2 w-[90%]'
                        placeholder="Search..."
                        value={searchTerm}
                        onInput={search}
                        autoFocus
                    />
                    <CloseIcon className='cursor-pointer' onClick={closeSearch} />
                </div>
            )}
            {showSearch && filteredProducts.length > 0 && (
                <div className='w-[500px] flex flex-wrap items-center mt-4 pt-5 absolute z-10 bg-red left-5 top-9'>
                    <h2 className='border-b w-[90%] bg-white py-3 ps-5 text-[20px] pt-5'>products</h2>
                    {filteredProducts.map(product => (
                        <Link href={`/all/${product.id}`} className="group" onClick={closeSearch}>
                            <div key={product.id} className='border p-4 w-[90%] bg-white flex justify-evenly'>
                                <div className='w-[70%]'>
                                    <h2 className='text-lg font-bold text-[18px]'>{product.title}</h2>
                                    <p className='text-[13px]'>{product.description}</p>
                                    <p className='text-black font-bold text-[16px]'>${product.price}</p>
                                </div>
                                <img src={product.image} alt="" className='w-[30%] px-2 object-contain' />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}


function Footer() {
    return (
        <footer className='border flex w-full'>
            <section className='flex p-10 px-5  justify-center items-start bg-[rgb(245,245,245)] w-full text-[rgb(64,69,73)] flex-wrap'>
                <ul className='*:my-5 w-full md:w-[50%] lg:w-[22%] lg:mt-0 mt-5'>
                    <li className='text-[14px]'>INFO</li>
                    <li className='text-[13px]'>terms and conditions</li>
                    <li className='text-[13px]'>Deliveries & Returns</li>
                    <li className='text-[13px]'>Privacy Policy</li>
                    <li className='text-[13px]'>Photostudio</li>
                    <li className='text-[13px]'>Agency/Showroom</li>
                </ul>
                <ul className='*:my-5 w-full md:w-[50%] lg:w-[22%] lg:mt-0 mt-5'>
                    <li className='text-[14px]'>CONTACT US</li>
                    <li className='text-[13px]' >LONDONWORKS</li>
                    <li className='text-[13px]' >ABD Social LTD</li>
                    <li className='text-[13px]' >72 Fortis Green Road, N10 3HN, LONDON</li>
                    <li className='text-[13px]'>Email: info@londonworks.com</li>
                </ul>
                <ul className='*:my-5 w-full md:w-[50%] lg:w-[22%] lg:mt-0 mt-5'>
                    <li className='text-[14px]'>CAREERS</li>
                    <li className='text-[13px]'>Click here to find out about our latest roles available.</li>
                </ul>
                <ul className='*:my-5 w-full md:w-[50%] lg:w-[22%] lg:mt-0 mt-5'>
                    <li className='text-[14px]'>NEWSLETTER</li>
                    <li>
                        <form action="" className='*:w-full'>
                            <input type="text" className='h-[40px] border my-2 text-sm px-2' placeholder='Email address' />
                            <input type="submit"  value='subscribe' className='border bg-[rgb(67,96,118)] text-[white] h-[40px] cursor-pointer' />
                        </form>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Layout;



