import React, { useState } from 'react'
import Logo from '../../assets/SHOP.CO.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser, FaOpencart, FaSearch, FaDropbox, FaSalesforce } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { SiAdidas } from "react-icons/si";


const Index = () => {
  const [sideBar, setSideBar] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const navigate = useNavigate()

  const handleCart =()=>{
    navigate('/cart')
  }
  const handleClick = () => {
    setSideBar(!sideBar)
  }
  const closeSideBar = () => {
    setSideBar(false)
  }
  const handleSearch = () => {
    setSearchVisible(!searchVisible)
  }
  const closeSearch = () => {
    setSearchVisible(false)
  }

  return (
    <div className='px-8 lg:px-16 xl:px-20 bg-slate-300 py-5 w-full top-0 z-50 fixed'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <button onClick={handleClick}>
            <FaBarsStaggered className='sm:hidden' />
          </button>
          {
            sideBar && (
              <div className='fixed inset-0 z-50 flex'>
                <div className='fixed inset-0 bg-black opacity-50' onClick={closeSideBar}></div>
                <div className='relative w-64 h-full bg-white shadow-lg z-50 p-4'>
                  <button onClick={closeSideBar}>SHOP.CO</button>
                  <ul className='space-y-1 flex flex-col mt-5'>
                    <Link className='hover:bg-black hover:text-white duration-300 p-3 rounded-xl flex items-center gap-2'>
                      <p><FaSalesforce /></p>
                      <button>On Sale</button>
                    </Link>
                    <Link className='hover:bg-black hover:text-white duration-300 p-3 rounded-xl flex items-center gap-2'>
                      <p><FaDropbox /></p>
                      <button>New Arrivals</button>
                    </Link>
                    <Link className='hover:bg-black hover:text-white duration-300 p-3 rounded-xl flex items-center gap-2'>
                      <p><SiAdidas /></p>
                      <button>Brands</button>
                    </Link>
                  </ul>
                </div>
              </div>
            )
          }
          <p onClick={() => navigate('/')}><img className='w-32 xl:w-64' src={Logo} alt="Company logo" /></p>
          <div className='hidden sm:flex items-center w-full gap-3 2xl:gap-5 2xl:text-xl'>
            <select className='bg-transparent outline-none'>
              <option value="1">Shop</option>
              <option value="2">Clothes</option>
              <option value="3">Shoes</option>
            </select>
            <button>On Sale</button>
            <button>New Arrivals</button>
            <button>Brands</button>
          </div>
        </div>
        <div className='flex items-center gap-4 2xl:gap-6 text-[20px] 2xl:text-2xl'>
          <div className='hidden md:flex items-center gap-2 p-2 w-[160px] lg:w-[300px] 2xl:w-[500px] bg-slate-200 rounded-[50px] text-[12px] lg:text-[16px] lg:px-5'>
            <button><FaSearch /></button>
            <input className='bg-transparent outline-none' type="text" placeholder='Search for products...' />
          </div>
          {!searchVisible ? (
            <button className='md:hidden' onClick={handleSearch}><FaSearch /></button>
          ) : (
            <div className='flex items-center gap-2 p-2 w-[210px] bg-slate-200 rounded-[50px] text-[12px]'>
              <button onClick={closeSearch}><FaSearch /></button>
              <input className='bg-transparent outline-none relative' type="text" placeholder='Search for products...' />
            </div>
          )}
          <button onClick={handleCart}><FaOpencart /></button>
          <button onClick={() => navigate('/login')}><FaUser /></button>
        </div>
      </div>
    </div>
  )
}

export default Index
