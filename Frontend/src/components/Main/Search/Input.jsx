import React, {useState} from 'react'

const Input = ({placeholder}) => {
    
    return (
        <input
        type="text"
        placeholder={placeholder}
        className="m-1 p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
      />
    )
}

export default Input
