// import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const BottomWarning = ({bottomLineText,LinkTo,to}) => {
  // const navigate = useNavigate();
  return (

    <div className="flex justify-center py-2 text-sm font-[500] text-gray-700">
      <div>
        {bottomLineText}
      </div>
      <Link
       to={to} 
       className="pointer cursor-pointer underline pl-1"> {LinkTo}
       </Link>
      {/* <p onClick={()=> navigate(to)} className="pointer cursor-pointer underline pl-1">{LinkTo}</p> */}
    </div>
  )
}

export default BottomWarning
