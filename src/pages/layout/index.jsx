import React from 'react'
import Hero from '../../assets/hero_img.png'
import Hero2 from '../../assets/hero_img2.png'
import Versace from '../../assets/Versace.png'
import Zara from '../../assets/Zara.png'
import Gucci from '../../assets/Gucci.png'
import Prada from '../../assets/Prada.png'
import CK from '../../assets/CK.png'
import { Products } from '../../components'

const Index = () => {
  return (
    <div className='my-5'>
      <div>
        <div className='px-5 lg:px-10 xl:px-16 2xl:px-20 sm:grid grid-cols-2 items-start'>
          <div>
            <h1 className='text-4xl sm:text-3xl md:text-5xl lg:w-[120%] font-extrabold mt-10'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-slate-500 text-sm my-3 lg:text-lg lg:py-5'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='w-full bg-black text-white rounded-[50px] py-2 font-semibold lg:py-4 lg:text-lg lg:w-[60%] xl:w-[40%]'>Shop Now</button>
            <div className='text-sm sm:text-[12px] lg:text-[15px] flex flex-wrap justify-center gap-1 sm:flex-nowrap lg:justify-start mt-5 2xl:mt-10'>
              <div className='px-3 border-slate-400 border-r'>
                <h2 className='text-3xl sm:text-2xl font-bold lg:text-4xl'>200+</h2>
                <p>International Brands</p>
              </div>
              <div className='px-3 border-slate-400 border-r'>
                <h2 className='text-3xl sm:text-2xl font-bold lg:text-4xl'>2,000+</h2>
                <p>High-Quality Products</p>
              </div>
              <div className='px-3'>
                <h2 className='text-3xl sm:text-2xl font-bold lg:text-4xl'>30,000+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className='h-full flex justify-center md:justify-end'>
            <img className='hidden sm:block lg:hidden' src={Hero} alt="Hero_img" />
            <img className='sm:hidden lg:block' src={Hero2} alt="Hero_img" />
          </div>
        </div>
      </div>
      <div className='bg-black flex flex-wrap justify-evenly py-5'>
        <button><img src={Versace} alt="Versace" /></button>
        <button><img src={Zara} alt="Zara" /></button>
        <button><img src={Gucci} alt="Gucci" /></button>
        <button className='mt-5 px-5 sm:mt-0'><img src={Prada} alt="Prada" /></button>
        <button className='mt-5 sm:mt-0'><img src={CK} alt="CK" /></button>
      </div>
      <Products/>
    </div>
  )
}

export default Index
