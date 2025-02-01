import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TShirt from '../../assets/Tshirt.png'
import Pants from '../../assets/Pants.png'
import stars from '../../assets/stars.png'
import Shirt from '../../assets/vertical_tshirt.png'
import Shorts from '../../assets/Shorts.png'
import Frame33 from '../../assets/Frame33.png'
import Frame34 from '../../assets/Frame 34.png'
import Frame38 from '../../assets/Frame 38.png'
import Frame70 from '../../assets/Frame 70.png'
import Frame71 from '../../assets/Frame 71.png'
import Frame73 from '../../assets/Frame 73.png'

export const products = [
    { id: 1, imgSrc: TShirt, title: "T-SHIRT WITH TAPE DETAILS", price: "120" },
    { id: 2, imgSrc: Pants, title: "FADED SKINNY JEANS", price: "210" },
    { id: 3, imgSrc: Shorts, title: "LOOSE FIT BERMUDA SHORTS", price: "80" },
    { id: 4, imgSrc: Shirt, title: "Vertical Striped Shirt", price: "230" },
    { id: 5, imgSrc: Frame71, title: "FADED SKINNY JEANS", price: "240" },
    { id: 6, imgSrc: Frame33, title: "Gradient Graphic T-shirt", price: "145" },
    { id: 7, imgSrc: Frame34, title: "Polo with Tipping Details", price: "180" },
    { id: 8, imgSrc: Frame38, title: "Black Striped T-shirt", price: "120" },
    { id: 9, imgSrc: Frame70, title: "COURAGE GRAPHIC T-SHIRT", price: "145" },
    { id: 10, imgSrc: Frame73, title: "SLEEVE STRIPED T-SHIRT", price: "130" },
]

const Index = () => {
    const [showAll, setShowAll] = useState(false)
    const [showCasual, setShowCasual] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)
    const navigate = useNavigate()

    const getCardShow = () => {
        if (screen <= 640) return 2;
        if (screen <= 768) return 3;
        if (screen <= 1024) return 4;
        return 5
    }
    const getCasualCard = () => {
        if (screen <= 640) return [5, 6];
        if (screen <= 768) return [5, 6, 7];
        if (screen <= 1024) return [5, 6, 7, 8];
        return [5, 6, 7, 8, 9]
    }
    const cardShow = getCardShow()
    const casualShow = getCasualCard()

    const handleSee = () => {
        setShowAll(!showAll)
    }
    const handleSaw = () => {
        setShowCasual(!showCasual)
    }
    const handleCart = (item) => {
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const isItemInCart = existingCart.some(cartItem => cartItem.id === item.id);
        if (!isItemInCart) {
            const updatedCart = [...existingCart, item];
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        }
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
                            <div className="font-bold text-xl p-3 h-[15vh] flex flex-col justify-between">
                                <p className="text-sm lg:text-lg">{product.title}</p>
                                <span><img src={stars} alt="ranking_stars" /></span>
                                <div className='sm:flex items-center justify-between'>
                                    <p>{product.price}000 uzs</p>
                                    <button onClick={() => handleCart(product)} className='bg-[rgb(240,238,237)] rounded text-sm px-2'>Add to cart</button>
                                </div>
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
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mb-20'>
                    {Array.isArray(showCasual ? products.length : casualShow)
                        ? casualShow.map(index => (
                            <div key={index} className='hover:shadow-xl hover:bg-[rgb(240,238,237)] duration-500 rounded-lg'>
                                <button onClick={() => handleClick(products[index])}>
                                    <img src={products[index].imgSrc} alt={products[index].title} />
                                </button>
                                <div className="font-bold text-xl p-3">
                                    <p className="text-sm lg:text-lg">{products[index].title}</p>
                                    <img src={stars} alt="ranking_stars" />
                                    <p>{products[index].price}000 uzs</p>
                                </div>
                            </div>
                        ))
                        : products.slice(0, showCasual ? products.length : casualShow).map((product, index) => (
                            <div key={index} className='hover:shadow-xl hover:bg-[rgb(240,238,237)] duration-500 rounded-lg'>
                                <button onClick={() => handleClick(product)}>
                                    <img src={product.imgSrc} alt={product.title} />
                                </button>
                                <div className="font-bold text-xl p-3">
                                    <p className="text-sm lg:text-lg">{product.title}</p>
                                    <img src={stars} alt="ranking_stars" />
                                    <p>{product.price}000 uzs</p>
                                </div>
                            </div>
                        ))}
                </div>
                <button
                    onClick={handleSaw}
                    className='w-full my-3 py-3 rounded-[50px] border outline-none text-lg font-bold hover:bg-black hover:text-white duration-300 mb-10 lg:hidden'
                >
                    {showCasual ? "See less" : 'See more'}
                </button>
            </div>
        </div>
    )
}

export default Index
