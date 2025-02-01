import React, { useState } from 'react'
import { MdCheck } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import stars from '../../assets/stars.png'
import { useNavigate } from 'react-router-dom';
import Formal1 from '../../assets/zara_rb.png'
import Formal2 from '../../assets/ii_rb.png'
import Formal3 from '../../assets/img3.png'
import Formal4 from '../../assets/img.png'
import Formal5 from '../../assets/img4.png'
import Formal6 from '../../assets/img2.png'

export const formal = [
  {id: 11, imgSrc: Formal1, title: "Zara", price: "500"},
  {id: 12, imgSrc: Formal2, title: "Loro Piana", price: "850"},
  {id: 13, imgSrc: Formal3, title: "Loro Piana", price: "850"},
  {id: 14, imgSrc: Formal4, title: "Loro Piana", price: "850"},
  {id: 15, imgSrc: Formal5, title: "Loro Piana", price: "850"},
  {id: 16, imgSrc: Formal6, title: "Loro Piana", price: "850"},
]

const Index = () => {
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("Large");
  const colors = ["green", "red", "yellow", "orange", "cyan", "blue", "purple", "pink", "black"];
  const sizes = ["3XL", "2XL", "XL", "L", "M", "S"];
  const handleClick = (item) => {
    navigate(`/${item.id}`)

  }
  const openFilter = () => {
    
  }
  return (
    <div className='px-5 xl:px-24'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl my-5 2xl:text-4xl'>Casual</h1>
        <button onClick={openFilter} className='text-xl'>
          <VscSettings />
        </button>
      </div>
      <div className='lg:flex gap-3 2xl:gap-5'>
        <div className="hidden lg:block mb-5 w-64 2xl:w-96 border border-black p-4 rounded-lg shadow-md space-y-6">
          <h3 className="font-semibold text-lg 2xl:text-xl">Filters</h3>
          <div className="space-y-2 2xl:space-y-1">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
              <p key={category} className="cursor-pointer hover:text-blue-500 2xl:text-xl">{category}</p>
            ))}
          </div>
          <div>
            <h4 className="font-medium">Price</h4>
            <div className='grid grid-cols-2 gap-2'>
              <input type="number" placeholder='uzs' className='bg-slate-200 text-sm rounded-md px-1 outline-none 2xl:p-2' />
              <input type="number" placeholder='uzs' className='bg-slate-200 text-sm rounded-md px-1 outline-none 2xl:p-2' />
            </div>
          </div>

          <div>
            <h4 className="font-medium">Colors</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center border cursor-pointer relative`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (<MdCheck className="absolute text-white text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium">Size</h4>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`px-2 rounded-lg text-center cursor-pointer ${size === selectedSize ? "bg-black text-white" : "bg-gray-200"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 2xl:space-y-1">
            <h4 className="font-medium 2xl:text-xl">Dress Style</h4>
            <div>
              <p className="cursor-pointer hover:text-blue-500 2xl:text-xl">Casual</p>
              <p className="cursor-pointer hover:text-blue-500 2xl:text-xl">Formal</p>
              <p className="cursor-pointer hover:text-blue-500 2xl:text-xl">Party</p>
              <p className="cursor-pointer hover:text-blue-500 2xl:text-xl">Gym</p>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md">Apply Filter</button>
        </div>
        <div className='grid grid-cols-2 gap-2 my-5 sm:grid-cols-3 lg:my-0'>
          {formal.slice(-6).map((item, index) => {
            return <div key={index}>
              <div className='hover:shadow-xl hover:bg-[rgb(240,238,237)] duration-500 rounded-lg'>
                <button onClick={() => handleClick(item)} className='bg-[rgb(240,238,237)] rounded-lg' ><img src={item.imgSrc} alt={item.title} /></button>
                <div className="font-bold text-xl p-3">
                  <p className="text-sm sm:text-xl lg:text-lg">{item.title}</p>
                  <img src={stars} alt="ranking_stars" />
                  <p>{item.price}000 uzs</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Index
