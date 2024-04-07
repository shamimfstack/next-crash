import React from 'react';
import Link from "next/link"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['italic'],
    subsets: ['latin'],
  })

//   setting metadata for individual page
  export const metadata = {
    title: "About us",
    description: "This is a blog about page",
  }

const AboutLayout = ({children}) => {
    return (
        <div>
            <nav className='my-6'>
                <ul>
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/vission">Vission</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default AboutLayout;