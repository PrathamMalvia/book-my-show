import React from 'react';
import { BiChevronRight, BiSearch, BiMenu } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";

const NavSm = () => {
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div>
                    <h3 className='text-xl font-bold '>
                        It All Starts Here!
                    </h3>
                    <span className='text-gray-400 text-xs flex items-center'>Mumbai <BiChevronRight /> </span>
                </div>
                <div className='w-8 h-8'>
                    <BiSearch className='w-full h-full' />
                </div>
            </div>
        </>
    )
}

const NavMd = () => {
    return (
        <div className='w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md'>
            <BiSearch className='text-gray-500 text-xl' />
            <input
                type="search"
                className='w-full bg-transparent border-none focus:outline-none'
                placeholder='Search for Movies, Events, Plays, Sports and Activities' />
        </div>
    )

}

const NavLg = () => {
    return (
        <>
            <div className='container mx-auto px-4 flex items-center justify-between gap-5'>
                <div className='flex items-center w-3/5 gap-5'>

                    <div className='w-12 h-12 ml-[20px]'>
                        <img
                            src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                            alt='logo'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-[700px] flex items-center gap-3 bg-white px-3 py-2 rounded'>
                        <BiSearch className='text-gray-500 text-xl' />
                        <input
                            type="search"
                            className='w-full bg-transparent border-none focus:outline-none onclick:border-black'
                            placeholder='Search for Movies, Events, Plays, Sports and Activities' />
                    </div>

                </div>

                <div className='flex items-center justify-between gap-6 ml-10'>
                    <span
                        className='text-gray-200 text-300 flex items-center hover:text-white gap-1 cursor-pointer'>
                        Mumbai
                        <RiArrowDownSFill className='text-2xl rounded' />
                    </span>
                    <button
                        className='bg-red-500 text-white px-4 py-1 text-sm rounded-md hover:bg-red-700'>
                        Sign in
                    </button>
                    <div className='w-8 h-8 text-gray-200 hover:text-white cursor-pointer'>
                        <BiMenu className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>

    )
}

const Navbar = () => {
    return (
        <>
            <nav className='bg-bms-700 p-3'>
                <div className='md:hidden'>{ /*Mobile screen*/}
                    <NavSm />
                </div>
                <div className='hidden md:flex lg:hidden'>{ /*Medium/Tab screen*/}
                    <NavMd />
                </div>
                <div className='hidden lg:flex'>{ /*Large screen*/}
                    <NavLg />
                </div>
            </nav>
        </>
    )
}

export default Navbar;