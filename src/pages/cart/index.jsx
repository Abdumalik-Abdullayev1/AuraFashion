import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FcFullTrash } from "react-icons/fc";
import { products } from '../../components/products'

const Index = () => {
    const { id } = useParams()
    const cartProducts = products.filter((item) => item.id == id)
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((prev) => prev > 0 ? prev - 1 : prev)
    }
    const increment = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <div className='px-5 mb-5'>
            <h1 className='my-3 font-extrabold text-4xl'>Your Cart</h1>
            <div className='border border-slate-400 rounded-2xl p-2'>
                {
                    cartProducts.map((item, index) => (
                        <div key={index} className='grid grid-cols-3 gap-3'>
                            <img src={item.imgSrc} alt="T-shirt" />
                            <div className='grid col-span-2 justify-between'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='font-semibold text-sm'>{item.title}</h2>
                                    <button className='text-xl'><FcFullTrash /></button>
                                </div>
                                <span className='text-slate-400 text-sm'>Size: Large</span>
                                <span className='text-slate-400 text-sm'>Color: White</span>
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-semibold text-xl'>{item.price}</h3>
                                    <div className='bg-slate-300 flex gap-5 px-3 py-1 rounded-[50px] text-md'>
                                        <button onClick={decrement}>-</button>
                                        <span>{count}</span>
                                        <button onClick={increment}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Index
