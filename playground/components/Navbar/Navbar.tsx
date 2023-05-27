import React from 'react'
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
        </ul>
    </nav>
  )
}