'use client'
import Link from 'next/link';
import React from 'react';
import { authClient } from '../lib/auth-client';
import Image from 'next/image';
import img from '../../asset/icons8-book-100.png'

const Navbar = () => {
        
  const { data: session } = authClient.useSession()
  const user = session?.user
 

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/all-books">All Books</Link></li>
        <li><Link href="/profile">My Profile</Link></li>
        
      </ul>
    </div>
  <div className='flex flex-col md:flex-row  items-center gap-0 p-0 m-0'>
      <Image className='p-0 m-0' src={img} alt="Logo" width={50} height="auto" />
    <Link href="/" className="btn btn-ghost text-xl m-0 p-0">
     Book Store
    </Link>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
        <li><Link href="/all-books">All Books</Link></li>
        <li><Link href="/profile">My Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user ? (<div className="flex items-center gap-2">
    <p className='text-green-800 font-semibold'>{user ? `Welcome, ${user.name}` : ''}</p>
    <button className="btn btn-neutral" onClick={async()=>await authClient.signOut()}>Logout</button>
  </div>) :(<Link href="/login"><button className="btn btn-primary">Login</button></Link> ) }
  </div>
</div>
    );
};

export default Navbar;