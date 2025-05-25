import React from 'react'

export default function CheckBox({ checked, onChange }) {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="
           appearance-none w-5 h-5 
      border border-gray-300 
      rounded-sm 
      checked:bg-blue-500 checked:border-blue-500
      relative
      before:content-['✓'] before:absolute 
      before:text-white before:text-sm 
      before:top-1/2 before:left-1/2 
      before:-translate-x-1/2 before:-translate-y-1/2 
      before:opacity-0 checked:before:opacity-100
        "
            />

        </label>
    )
}
