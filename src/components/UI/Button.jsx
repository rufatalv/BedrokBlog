import Link from 'next/link';
import React from 'react';

const Button = ({children, className}) => {
    return (
        <Link href='/' className={`text-white inline-block rounded-[6px] text-lg py-[12px] px-12 border-[1px] border-white ${className}`}>
            {children}
        </Link>
    );
};

export default Button;