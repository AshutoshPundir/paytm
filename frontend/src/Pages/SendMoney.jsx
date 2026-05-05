
// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SendMoney = () => {
  const [amount, setAmount] = useState(0)
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <div className='bg-cyan-50 w-screen h-screen flex justify-center items-center'>
      
      <div className='w-90 h-80 rounded-lg flex flex-col justify-center items-center shadow-2xl'>
        <div className='w-full h-full m-3 p-3 flex flex-col justify-evenly '>

        <div className='w-full flex justify-center items-center'>
          <h1 className='font-bold text-2xl'>Send Money</h1>
        </div>

        <div className='flex items-center'>
          <h3 className="m-1 p-2 w-10 h-10 flex justify-center items-center bg-green-500 rounded-4xl">{name[0].toUpperCase()}</h3>
          <h2>{name}</h2>
        </div>

        <div>
          <h3>Amount (in Rs)</h3>
          <input onChange={(e)=> setAmount(e.target.value)} type="text" placeholder='Enter amount' className='border border-gray-200 p-2 w-full rounded-lg' />
        </div>

        <div className='flex justify-center w-full'>
          <button onClick={async ()=> {
            await axios.post("http://localhost:3000/api/v1/account/transfer",{
              to: id,
              amount: parseInt(amount)
            },{
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }).then(res => {
              alert(res.data.message);
            }).catch(err => {
              alert(err.response?.data?.message || "Transfer failed");
            })
          }} className='bg-green-500 text-white p-3 rounded-lg w-full'>initiate Transfer</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney
