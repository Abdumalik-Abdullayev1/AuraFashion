import React from 'react'
import Logo from '../../assets/SHOP.CO.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser, FaOpencart, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <div className='px-8 lg:px-16 xl:px-20 bg-slate-300 py-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <FaBarsStaggered className='sm:hidden' />
          <img className='w-32 xl:w-64' src={Logo} alt="Company logo" />
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
          <input className='bg-transparent outline-none' type="text" placeholder='Search for products...'/>
          </div>
          <button className='md:hidden'><FaSearch /></button>
          <button><FaOpencart /></button>
          <button><FaUser /></button>
        </div>
      </div>
    </div>
  )
}

export default Index
