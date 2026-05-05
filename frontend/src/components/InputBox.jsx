// import React from 'react'

const InputBox = ({InputHead,onChange,placeholder}) => {
  return (
    <div className="p-1 w-full  px-8 flex flex-col justify-center ">
      <h1 className="font-medium py-1">{InputHead}</h1>
      <input type="text" onChange={onChange} placeholder={placeholder} className="w-full font-mono rounded-sm border border-gray-200 pl-1 text-sm p-1" />
    </div>
  )
}

export default InputBox
