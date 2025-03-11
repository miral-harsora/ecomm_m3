import React, { useState } from 'react';
import RangeSlider from './RangeSlider';
import DiscountFilter from './DiscountFilter';

const Filter = ({ setPriceRange, setSelectedDiscount }) => {
    const [localPrice, setLocalPrice] = useState([10, 14000]);
    const [localDiscount, setLocalDiscount] = useState("");

    const handleClearFilters = () => {
        setLocalPrice([10, 14000]);
        setLocalDiscount("");
        setPriceRange([10, 14000]); // Reset in parent
        setSelectedDiscount(""); // Reset in parent
    };

    return (
        <div className="p-4 border-[1px] border-gray-500 rounded shadow-md">
            <div className="flex justify-between items-center">
                <p className="font-bold mx-2">FILTERS</p>
                <p className="text-[#F7569B] mx-2 cursor-pointer text-xs lg:text-base" onClick={handleClearFilters}>
                    CLEAR ALL
                </p>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            
            {/* Price Filter */}
            <div className="flex flex-col">
                <p className="font-bold mx-2">PRICE</p>
                <RangeSlider value={localPrice} onChange={(value) => {
                    setLocalPrice(value);
                    setPriceRange(value); // Update parent
                }}/>
                <hr className="my-2 w-full border-gray-300" />
            </div>

            {/* Discount Filter */}
            <div className="flex flex-col">
                <p className="font-bold mx-2">DISCOUNT</p>
                <DiscountFilter value={localDiscount} onChange={(value) => {
                    setLocalDiscount(value);
                    setSelectedDiscount(value); // Update parent
                }} />
                <hr className="my-2 w-full border-gray-300" />
            </div>
        </div>
    );
};

export default Filter;
