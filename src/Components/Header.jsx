import Link from 'next/link';
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className='w-full flex justify-between px-4 sm:px-32 p-2'>

            <div className="flex items-center gap-2 sm:gap-10">
                <Link href={'/'} className="primary-text-btn ">HOME</Link>
                <Link href={'/about'} className="primary-text-btn ">ABOUT</Link>
                <Link href={'/test'} className="primary-text-btn ">TEST</Link>
            </div>
            <div className="flex items-center gap-3">
            <button className="cursor-pointer">
            <DarkModeSwitch />
            </button>
                    <h1 className="text-2xl px-3 py-1 rounded-sm bg-orange-400">SMT</h1>
            </div>

    </div>
  )
}

export default Header