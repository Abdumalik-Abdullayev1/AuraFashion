import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TShirt from '../../assets/Tshirt.png'
import Pants from '../../assets/Pants.png'
import stars from '../../assets/stars.png'
import Shirt from '../../assets/vertical_tshirt.png'
import Shorts from '../../assets/Shorts.png'

export const products = [
    { id: 1, imgSrc: TShirt, title: "T-SHIRT WITH TAPE DETAILS", price: "120" },
    { id: 2, imgSrc: Pants, title: "FADED SKINNY JEANS", price: "210" },
    { id: 3, imgSrc: Shorts, title: "LOOSE FIT BERMUDA SHORTS", price: "80" },
    { id: 4, imgSrc: Shirt, title: "Vertical Striped Shirt", price: "230" },
    { id: 5, imgSrc: Pants, title: "FADED SKINNY JEANS", price: "210" },
]

const Index = () => {
    const [showAll, setShowAll] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)
    const navigate = useNavigate()

    const getCardShow = () => {
        if (screen <= 640) return 2;
        if (screen <= 768) return 3;
        if (screen <= 1024) return 4;
        return 5
    }
    const cardShow = getCardShow()

    const handleSee = () => {
        setShowAll(!showAll)
    }

    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleClick = (item) => {
        navigate(`/${item.id}`)

    }

    return (
        <div className='xl:px-10'>
            <div className='px-5'>
                <h2 className='text-black font-extrabold text-center text-[32px] my-3'>New Arrivals</h2>
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mb-20'>
                    {products.slice(0, showAll ? products.length : cardShow).map((product, index) => (
                        <div key={index} className='hover:shadow-xl hover:bg-[rgb(240,238,237)] duration-500 rounded-lg'>
                            <button onClick={() => handleClick(product)}><img src={product.imgSrc} alt={product.title} /></button>
                            <div className="font-bold text-xl p-3">
                                <p className="text-sm lg:text-lg">{product.title}</p>
                                <img src={stars} alt="ranking_stars" />
                                <p>{product.price}000 uzs</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleSee}
                    className='w-full my-3 py-3 rounded-[50px] border outline-none text-lg font-bold hover:bg-black hover:text-white duration-300 mb-10 lg:hidden'
                >
                    {showAll ? "See less" : 'See more'}
                </button>
                <hr />
            </div>
            <div className='px-5 mt-5 lg:mt-14'>
                <h2 className='text-black font-extrabold text-center text-[32px] my-3'>TOP SELLING</h2>
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    {products.slice(0, showAll ? products.length : cardShow).map((product, index) => (
                        <div key={index} className='hover:shadow-xl hover:bg-[rgb(240,238,237)] duration-500 rounded-lg'>
                            <button onClick={() => handleClick(product)}><img src={product.imgSrc} alt={product.title} /></button>
                            <div className="font-bold text-xl p-3">
                                <p className="text-sm lg:text-lg">{product.title}</p>
                                <img src={stars} alt="ranking_stars" />
                                <p>{product.price}000 uzs</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleSee}
                    className='w-full my-3 py-3 rounded-[50px] border outline-none text-lg font-bold hover:bg-black hover:text-white duration-300 mb-10 lg:hidden'
                >
                    {showAll ? "See less" : 'See more'}
                </button>
            </div>
        </div>
    )
}

export default Index
