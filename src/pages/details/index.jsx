import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdCheck } from "react-icons/md";
import { products } from '../../components/products'
import stars from '../../assets/stars.png'

const Index = () => {
    const { id } = useParams()
    const [selectedColor, setSelectedColor] = useState(null);

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    const product = products.filter((item) => item.id == id)
    return (
        <div className='px-5 my-5 xl:px-20'>
            {product.map((item, index) => (
                <div key={index} className='md:flex gap-5'>
                    <div className='sm:flex flex-row-reverse items-center gap-2'>
                        <img className='w-full sm:w-[80%]' src={item.imgSrc} alt="Shorts" />
                        <div className='w-1/3 my-2 flex items-center gap-3 sm:flex-col'>
                            <img className='w-[90%] sm:w-[73%]' src={item.imgSrc} alt="" />
                            <img className='w-[90%] sm:w-[73%]' src={item.imgSrc} alt="" />
                            <img className='w-[90%] sm:w-[73%]' src={item.imgSrc} alt="" />
                        </div>
                    </div>
                    <div className='md:mt-5'>
                        <p className='font-extrabold text-3xl'>{item.title}</p>
                        <div className='flex gap-5 items-center my-2'>
                            <img className='w-3/12' src={stars} alt="ranking_stars" />
                            <span className='text-slate-500'>4.5 / 5</span>
                        </div>
                        <div className='flex text-3xl gap-3'>
                            <p>{item.price}</p>
                            <del className='text-slate-500'>$300</del>
                            <div className='bg-slate-200 text-lg px-5 rounded-3xl flex items-center'>
                                <p className='text-red-700'>-40%</p>
                            </div>
                        </div>
                        <p className='text-[12px] my-3 text-slate-500 md:text-sm md:w-[80%]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        <hr />
                        <div className='my-2'>
                            <p className='text-xl my-1 text-slate-400'>Select colors</p>
                            <div className='flex gap-2'>
                                <button
                                    className={'w-[40px] h-[40px] rounded-[50%] relative'}
                                    style={{ backgroundColor: 'rgb(79,70,49)' }}
                                    onClick={() => handleClick('color1')}
                                >
                                    {selectedColor === 'color1' && <MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                </button>
                                <button
                                    className={'w-[40px] h-[40px] rounded-[50%] relative'}
                                    style={{ backgroundColor: 'rgb(49,79,74)' }}
                                    onClick={() => handleClick('color2')}
                                >
                                    {selectedColor === 'color2' && <MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                </button>
                                <button
                                    className={'w-[40px] h-[40px] rounded-[50%] relative'}
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
                                <button className='px-3 py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>Small</button>
                                <button className='px-3 py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>Medium</button>
                                <button className='px-3 py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>Large</button>
                                <button className='px-3 py-1 bg-slate-300 rounded-[50px] focus:bg-black focus:text-white'>X-Large</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index
