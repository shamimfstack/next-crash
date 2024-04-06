import React from 'react';

const AboutLayout = ({children}) => {
    return (
        <div>
            <nav className='my-6'>Mission | Vission</nav>
            {children}
        </div>
    );
};

export default AboutLayout;