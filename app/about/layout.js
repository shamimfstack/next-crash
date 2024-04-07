import React from 'react';
import Link from "next/link"

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