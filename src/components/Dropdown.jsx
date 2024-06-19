import React from 'react';

const Dropdown = ({ value, onChange, options }) => {
    return (
        <select
            className="border p-2 rounded-md bg-[#F4F4F5] text-gray-700 focus:outline-none cursor-pointer"
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={option} className="bg-white text-gray-700 hover:bg-gray-100">
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
