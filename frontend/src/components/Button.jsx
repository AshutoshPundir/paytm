// import React from 'react'

import { useNavigate } from "react-router-dom"

const Button = ({button,onClick}) => {
    // const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center m-1 my-0 mx-3 px-8.5 p-1 py-2 w-full  '>
      {/* <button onClick={()=> navigate(afterThis)} className='w-full bg-mist-900 text-gray-200 rounded-md p-1.5 font-sans '>{button}</button> */}
      <button onClick={onClick} className='w-full bg-mist-900 text-gray-200 rounded-md p-1.5 font-sans '>{button}</button>
    </div>
  )
}

export default Button
