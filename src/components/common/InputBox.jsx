import { useState } from 'react'
export default function InputBox({ value = [], setValue, placeholder, options = [] }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelect = (item) => {
        if (!value.includes(item)) {
            setValue([...value, item]);
        }
    };
      const handleRemove = (item) => {
        setValue(value.filter(val => val !== item));
    };


    return (
        <div className="relative w-full">
            
            <div
                className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-sm focus-within:border-blue-500"
                onClick={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                tabIndex={0}
            >
                {value.map((item, idx) => (
                    <span
                        key={idx}
                        className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                    >
                        {item}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(item);
                            }}
                            className="ml-1 text-blue-700 hover:text-red-500"
                        >
                            ×
                        </button>
                    </span>
                ))}
                <input
                    className="flex-1 min-w-[100px] focus:outline-none"
                    placeholder={!value.length ? placeholder : ''}
                    readOnly
                />
            </div>

            {showDropdown && (
                <ul className="absolute z-10 w-full max-h-55 overflow-auto bg-white border border-gray-300 rounded-sm shadow">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className={`
                            ${value.includes(option) ? 'text-gray-300' : 'text-gray-600'}
                            text-sm p-2
                          hover:bg-blue-100
                            cursor-pointer hover:text-blue-600 hoveer:bg-blue-100`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
