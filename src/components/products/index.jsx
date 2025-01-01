import React, { useState, useEffect } from 'react'
import TShirt from '../../assets/Tshirt.png'
import Pants from '../../assets/Pants.png'
import stars from '../../assets/stars.png'
import Shirt from '../../assets/vertical_tshirt.png'
import Shorts from '../../assets/Shorts.png'

const Index = () => {
    const [showAll, setShowAll] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)

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

    const products = [
        { imgSrc: TShirt, title: "T-SHIRT WITH TAPE DETAILS", price: "$120" },
        { imgSrc: Pants, title: "FADED SKINNY JEANS", price: "$210" },
        { imgSrc: Shorts, title: "LOOSE FIT BERMUDA SHORTS", price: "$80" },
        { imgSrc: Shirt, title: "Vertical Striped Shirt", price: "$212" },
        { imgSrc: Pants, title: "FADED SKINNY JEANS", price: "$210" },
    ]
    return (
        <div className='xl:px-10'>
            <div className='px-5'>
                <h2 className='text-black font-extrabold text-center text-[32px] my-3'>New Arrivals</h2>
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mb-20'>
                    {products.slice(0, showAll ? products.length : cardShow).map((product, index) => (
                        <div key={index} className='hover:shadow-xl duration-500 rounded-lg'>
                            <img src={product.imgSrc} alt={product.title} />
                            <div className="font-bold text-xl p-3">
                                <p className="text-sm lg:text-lg">{product.title}</p>
                                <img src={stars} alt="ranking_stars" />
                                <p>{product.price}</p>
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
                        <div key={index}>
                            <img src={product.imgSrc} alt={product.title} />
                            <div className="font-bold text-xl">
                                <p className="text-sm">{product.title}</p>
                                <img src={stars} alt="ranking_stars" />
                                <p>{product.price}</p>
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
