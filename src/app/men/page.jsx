"use client";
import Link from "next/link";
import useStore from "../store";

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

export default async function Page({ temp }) {
    const { addProduct } = useStore();
    const data = await getData();

    return (
        <section>
            <div className="w-full h-[300px] flex justify-center items-center capitalize text-[30px] bg-center text-[black] bg-back-2">
                <h2>Revolution Clothing</h2>
            </div>

            <div className="container mx-auto px-4 py-8 my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map(product => (
                        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
                            <div className="p-4">
                                <Link href={`/all/${product.id}`} className="group">
                                    <div className="mt-4 relative group">
                                        <img src={product.image} alt={product.title} className="w-full h-[200px] object-contain rounded-lg" />
                                        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                                    </div>
                                    <div className="h-[100px] mt-5 mb-2">
                                        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                                        <strong className="text-md text-gray-900">${product.price}</strong>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => addProduct({ ...product, count: 1 })}
                                    className="mt-4 w-full bg-[rgb(67,96,118)] text-white py-2 rounded-lg hover:bg-[rgb(67,96,118)] transition duration-300 text-xs"
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