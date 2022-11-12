import React from 'react';
import { BiChevronRight, BiSearch, BiMenu } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

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
            <div className='container mx-auto px-4 flex items-center justify-between gap-5 w-10/12'>
                <div className='flex items-center w-3/5 gap-6'>

                    <div className='flex items-center w-12 h-12'>
                        <img
                            src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                            alt='logo'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-4/5 h-9 flex items-center gap-3 bg-white px-3 py-2 rounded'>
                        <BiSearch className='text-gray-500 text-xl' />
                        <input
                            type="search"
                            className='w-full bg-transparent border-none focus:outline-none onclick:border-black'
                            placeholder='Search for Movies, Events, Plays, Sports and Activities' />
                    </div>

                </div>

                <div className='flex items-start items-center justify-between gap-6'>
                    <span
                        className='text-gray-200 text-300 flex items-center hover:text-white gap-1 cursor-pointer'>
                        Mumbai
                        <RiArrowDownSFill className='text-2xl rounded' />
                    </span>
                    <button
                        className='bg-bms-50 text-white px-4 py-1 text-sm rounded-md hover:bg-red-600'>
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

    const location = useLocation();

    const ToPlaysPage = () => {
        location('/plays');
    }

    return (
        <>
            <nav className='bg-bms-700 p-2'>
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

            <nav className='container mx-auto flex bg-gray-800 p-2'>
                <div className='text-base hidden lg:flex flex flex-end '>

                    <div className='flex text-gray-300 gap-5 ml-36'>
                        <div className='hover:text-white cursor-pointer'>Movies</div>
                        <div className='hover:text-white cursor-pointer'>Stream</div>

                        <Link to={"/events"}>
                            <h4 className='hover:text-white cursor-pointer'>
                                Events
                            </h4>
                        </Link>

                        <Link to={'/plays'}>
                            <h4 className='hover:text-white cursor-pointer'>
                                Plays
                            </h4>
                        </Link>

                        <div className='hover:text-white cursor-pointer'>Sports</div>
                        <div className='hover:text-white cursor-pointer'>Activities</div>
                        <div className='hover:text-white cursor-pointer mr-8'>Buzz</div>
                    </div>


                    <div className='text-sm align-center flex text-white ml-96 space-x-6'>
                        <div className='ml-8 cursor-pointer'>ListYourShow</div>
                        <div className='cursor-pointer'>Corporates</div>
                        <div className='cursor-pointer'>Offers</div>
                        <div className='cursor-pointer'>Gift Cards</div>
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar;