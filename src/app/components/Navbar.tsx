import Link from 'next/link'
import React from 'react'
// import { HiLogin, HiLogout } from 'react-icons/Hi'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between px-8 py-3 gap-3 items-center bg-slate-800 rounded'>
                <Link href="/" className='font-bold text-white'>
                    Articles.
                </Link>
                <div className='flex gap-3'>
                    <Link href="/addTopic" className='bg-gray-200 rounded p-2 transition hover:bg-gray-300 transition-duration: 150ms text-black'>+ Add Topic</Link>

                    <Link href="/" className='bg-green-200 rounded p-2 transition hover:bg-green-300 transition-duration: 150ms text-black flex gap-1 items-center'>
                        {/* <HiLogin size={24} /> */}
                        <span>
                            Sign in
                        </span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar