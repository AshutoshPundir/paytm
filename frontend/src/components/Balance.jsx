
// import React from 'react'

const Balance = ({value}) => {
  return (
    <div className='w-screen flex m-2 mx-[18px] mt-3 px-2'>
      <p><span className="font-bold pr-1">Your balance </span> {value}</p>
    </div>
  )
}

export default Balance
