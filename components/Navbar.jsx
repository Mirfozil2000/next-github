import React from 'react';
import Link from 'next/link';
import ProfileIcon from './ProfileIcon';

const Navbar = () => {
  return (
    <nav className='fixed left-0 right-0 flex items-center justify-between px-8 text-white bg-blue-500 h-14'>
      <Link href={'/'} className='font-bold'>Home</Link>
      <ProfileIcon />
    </nav>
  );
}

export default Navbar;
