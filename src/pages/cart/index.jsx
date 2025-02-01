import React, { useEffect, useState } from 'react'
import { FcFullTrash } from "react-icons/fc";

const Index = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [count, setCount] = useState(cartProducts.map(() => 1))

    useEffect(() => {
        const storedProducts = sessionStorage.getItem('cart')
        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts)
            setCartProducts(parsedProducts)
            setCount(parsedProducts.map(() => 1))
        }
    }, [])
    const decrement = (index) => {
        setCount(prev => {
            const newCount = [...prev];
            if (newCount[index] > 1) {
                newCount[index]--;
            }
            return newCount;
        })
    }
    const increment = (index) => {
        setCount(prev => {
            const newCount = [...prev];
            newCount[index]++;
            return newCount;
        })
    }
    const deleteProduct = (id) => {
        const updatedCart = cartProducts.filter(item => item.id !== id)
        setCartProducts(updatedCart)
        sessionStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    return (
        <div className='px-5 mb-5 lg:px-20 xl:px-24'>
            <h1 className='my-3 font-extrabold text-4xl'>Your Cart</h1>
            <div className='lg:flex items-start gap-5'>
                <div className='w-full'>
                    {
                        cartProducts.map((item, index) => (
                            <div key={index} className='flex gap-10 mb-5'>
                                <div className='w-2/6 h-full sm:w-3/12 md:w-2/12 lg:w-3/12 xl:w-2/12'>
                                    <img src={item.imgSrc} alt="T-shirt" />
                                </div>
                                <div className='w-4/6 md:w-[75%] flex flex-col justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='font-bold text-sm sm:text-xl md:text-2xl'>{item.title}</h2>
                                        <button onClick={() => deleteProduct(item.id)} className='text-xl sm:text-2xl md:text-3xl'><FcFullTrash /></button>
                                    </div>
                                    <p className='text-slate-400 text-sm sm:text-lg'>Size: L</p>
                                    <p className='text-slate-400 text-sm sm:text-lg'>Color: White</p>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='font-semibold text-lg sm:text-xl md:text-2xl'>{item.price}000 uzs</h3>
                                        <div className='bg-slate-300 flex gap-5 px-3 py-1 rounded-[50px] text-md'>
                                            <button onClick={() => decrement(index)} className='sm:px-3'>-</button>
                                            <span>{count[index]}</span>
                                            <button onClick={() => increment(index)} className='sm:px-3'>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-sm bg-white shadow-lg border rounded-2xl p-6 my-5 lg:my-0">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>
                                {cartProducts
                                    .map((item, index) => item.price * count[index])
                                    .reduce((prev, curr) => prev + curr, 0)}000 uzs
                            </span>
                        </div>
                        <div className="flex justify-between text-red-500 font-semibold">
                            <span>Discount</span>
                            <span>
                                {cartProducts
                                    .map((item, index) => item.price * 0.20 * count[index])
                                    .reduce((prev, curr) => prev + curr, 0)}000 uzs
                            </span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Delivery Fee</span>
                            <span>{cartProducts.length > 0 ? "15000 uzs" : "0 uzs"}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>
                                {(() => {
                                    const subtotal = cartProducts
                                        .map((item, index) => item.price * count[index])
                                        .reduce((prev, curr) => prev + curr, 0);

                                    const discount = cartProducts
                                        .map((item, index) => item.price * 0.20 * count[index])
                                        .reduce((prev, curr) => prev + curr, 0);

                                    const deliveryFee = cartProducts.length > 0 ? 15 : 0;

                                    return (subtotal - discount + deliveryFee);
                                })()}000 uzs
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center bg-gray-100 rounded-lg p-2">
                        <span className="text-gray-400">🏷️</span>
                        <input
                            type="text"
                            placeholder="Add promo code"
                            className="bg-transparent flex-1 outline-none px-2 text-gray-500"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-lg">Apply</button>
                    </div>
                    <button className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center">
                        Go to Checkout →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index
