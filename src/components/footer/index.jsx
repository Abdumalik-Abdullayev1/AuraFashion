import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub
} from "react-icons/fa";
import Logo from '../../assets/SHOP.CO.png'

const Index = () => {
  return (
    <div className='px-5'>
      <div className='bg-black p-5 rounded-xl sm:flex items-center justify-between'>
        <h2 className='text-white text-3xl font-extrabold lg:text-5xl sm:w-[50%] lg:w-[70%] xl:w-[50%]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className='lg:w-[35%]'>
          <div className='bg-slate-300 flex items-center gap-5 text-md rounded-[50px] px-5 py-2 my-3'>
            <span><IoMailOutline /></span>
            <input className='w-full bg-transparent' type="text" placeholder='Enter your email address' />
          </div>
          <button className='w-full bg-slate-300 hover:bg-slate-500 text-center gap-5 text-md rounded-[50px] px-5 py-2'>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className='md:flex gap-1'>
        <div className='my-5'>
          <img src={Logo} alt="Company logo" />
          <p className='text-slate-400 my-3 w-[200px] text-[12px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className='flex gap-2'>
            <button className='border border-black rounded-[50%] p-2 bg-white hover:bg-black hover:text-white'><FaTwitter /></button>
            <button className='border border-black rounded-[50%] p-2 bg-white hover:bg-black hover:text-white'><FaFacebookF /></button>
            <button className='border border-black rounded-[50%] p-2 bg-white hover:bg-black hover:text-white'><FaInstagram /></button>
            <button className='border border-black rounded-[50%] p-2 bg-white hover:bg-black hover:text-white'><FaGithub /></button>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:mt-5 text-[13px]'>
          <div>
            <h2 className='font-bold text-xl'>Company</h2>
            <ul className='flex flex-col gap-2 mt-2'>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Features</button>
              </li>
              <li>
                <button>Works</button>
              </li>
              <li>
                <button>Career</button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-xl'>HELP</h2>
            <ul className='flex flex-col gap-2 mt-2'>
              <li>
                <button>Customer Support</button>
              </li>
              <li>
                <button>Delivery Details</button>
              </li>
              <li>
                <button>Terms & Conditions</button>
              </li>
              <li>
                <button>Privacy Policy</button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-xl'>FAQ</h2>
            <ul className='flex flex-col gap-2 mt-2'>
              <li>
                <button>Account</button>
              </li>
              <li>
                <button>Manage Deliveries</button>
              </li>
              <li>
                <button>Orders</button>
              </li>
              <li>
                <button>Payment</button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-xl'>RESOURCES</h2>
            <ul className='flex flex-col gap-2 mt-2'>
              <li>
                <button>Free eBook</button>
              </li>
              <li>
                <button>Development Tutorial</button>
              </li>
              <li>
                <button>How to - Blog</button>
              </li>
              <li>
                <button>Youtube Playlist</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
