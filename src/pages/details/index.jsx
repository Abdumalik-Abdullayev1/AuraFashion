import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MdCheck } from "react-icons/md";
import { products } from '../../components/product-images'
import stars from '../../assets/stars.png'

const Index = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedColor, setSelectedColor] = useState(null);
    const [count, setCount] = useState(0)

    const handleClick = (color) => {
        setSelectedColor(color);
    };
    const handleDecrement = () => {
        setCount((prev) => prev > 0 ? prev - 1 : prev)
    }
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    const handleCart = (item) => {
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const isItemInCart = existingCart.some(cartItem => cartItem.id === item.id);
        if (!isItemInCart) {
            const updatedCart = [...existingCart, item];
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        navigate(`${item.id}`)
    }

    const product = products.filter((item) => item.id == id)
    return (
        <div className='px-5 my-5 xl:px-20'>
            <div>
                {product.map((item, index) => (
                    <div key={index} className='md:flex gap-5'>
                        <div className='sm:flex flex-row-reverse items-center gap-2 md:flex-col md:items-start lg:flex-row-reverse'>
                            <img className='w-full sm:w-[80%] md:w-[90%]' src={item.imgSrc} alt="Shorts" />
                            <div className='w-1/3 my-2 flex items-center gap-3 sm:flex-col md:flex-row lg:flex-col'>
                                <img className='w-[90%] sm:w-[73%] md:w-[85%]' src={item.imgSrc} alt="" />
                                <img className='w-[90%] sm:w-[73%] md:w-[85%]' src={item.imgSrc} alt="" />
                                <img className='w-[90%] sm:w-[73%] md:w-[85%]' src={item.imgSrc} alt="" />
                            </div>
                        </div>
                        <div className='md:mt-1 2xl:mt-5 lg:w-[35%] xl:w-[55%]'>
                            <p className='font-extrabold text-3xl'>{item.title}</p>
                            <div className='flex gap-5 items-center my-1'>
                                <img className='lg:w-2/12' src={stars} alt="ranking_stars" />
                                <span className='text-slate-500'>4.5 / 5</span>
                            </div>
                            <div className='flex items-end text-3xl gap-3'>
                                <p className='text-2xl sm:text-3xl'>{item.price}000uzs</p>
                                <div>
                                    {product.map((item, index) => {
                                        const discount = item.price / 0.20
                                        return <del className='text-red-400 text-xl' key={index}>{discount}000uzs</del>
                                    })}
                                </div>
                                <div className='bg-slate-200 text-lg px-5 rounded-3xl flex items-center'>
                                    <p className='text-red-700'>-20%</p>
                                </div>
                            </div>
                            <p className='text-[12px] my-3 text-slate-500 md:text-sm md:w-[80%]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                            <hr />
                            <div className='my-2'>
                                <p className='text-xl my-1 text-slate-400'>Select colors</p>
                                <div className='flex gap-2'>
                                    <button
                                        className={'w-[50px] h-[50px] rounded-[50%] relative'}
                                        style={{ backgroundColor: 'rgb(79,70,49)' }}
                                        onClick={() => handleClick('color1')}
                                    >
                                        {selectedColor === 'color1' && <MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                    </button>
                                    <button
                                        className={'w-[50px] h-[50px] rounded-[50%] relative'}
                                        style={{ backgroundColor: 'rgb(49,79,74)' }}
                                        onClick={() => handleClick('color2')}
                                    >
                                        {selectedColor === 'color2' && <MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                    </button>
                                    <button
                                        className={'w-[50px] h-[50px] rounded-[50%] relative'}
                                        style={{ backgroundColor: 'rgb(49,52,79)' }}
                                        onClick={() => handleClick('color3')}
                                    >
                                        {selectedColor === 'color3' && <MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className='my-2'>
                                <p className='text-xl my-1 text-slate-400'>Choose Size</p>
                                <div className='flex gap-1'>
                                    <button className='w-[25%] sm:w-[15%] md:w-[25%] xl:w-[15%] py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>S</button>
                                    <button className='w-[25%] sm:w-[15%] md:w-[25%] xl:w-[15%] py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>M</button>
                                    <button className='w-[25%] sm:w-[15%] md:w-[25%] xl:w-[15%] py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>L</button>
                                    <button className='w-[25%] sm:w-[15%] md:w-[25%] xl:w-[15%] py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>XL</button>
                                </div>
                            </div>
                            <hr />
                            <div className='w-[95%] sm:w-[60%] xl:w-[50%] flex gap-5 items-center'>
                                <div className='bg-slate-300 w-[35%] py-2 xl:py-1 flex items-center justify-evenly my-2 rounded-[50px] text-xl'>
                                    <button onClick={handleDecrement} className='outline-none'>-</button>
                                    <span>{count}</span>
                                    <button onClick={handleIncrement} className='outline-none'>+</button>
                                </div>
                                <button
                                    onClick={() => handleCart(item)}
                                    className='w-[60%] bg-slate-300 py-2 rounded-[50px] hover:bg-black hover:text-white'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index
