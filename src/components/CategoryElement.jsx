import React from 'react';

const CategoryElement = (props) => {
    return (
        <div className={`${props.className} bg-[${props.catColor}] text-[12px] font-medium inline-block py-1 px-2`} >
            {props.children}
        </div>
    );
};

export default CategoryElement;