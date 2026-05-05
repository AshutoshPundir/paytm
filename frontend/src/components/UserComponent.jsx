// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserComponent = () => {
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState("");
  
  useEffect(()=> {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
    .then(response => {
      setUser(response.data.user)
      // console.log(users)
    })
  },[filter])
  
  return (
    <div className="w-screen m-2 p-2">
      <div className="font-bold mx-3">
        User
      </div>
      <div>
        <input onChange={async(e)=> {
          setFilter(e.target.value)
        }} 
        type="search" placeholder="Search users..." className="m-2 mx-3 w-[98.5%] border border-gray-200 p-1 rounded-md mr-2" />
      </div>
      <div>
        {users.map(user => <User key={user._id} user={user} />)}
      </div>
    </div>
  )
  
}
function User({user}){
  
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center m-1 p-1">
        <div className="flex justify-center items-center" >
            <h4 className="m-1 p-2 w-10 h-10 flex justify-center items-center bg-gray-300 rounded-4xl"> {user.firstName[0]} </h4>
            
            {/* <div> {user[0]}</div> */}
            <div>{user.firstName} {user.lastName} </div>
        </div>
        <div>
            <button onClick={
              (e)=> navigate('/send?id=' + user._id + "&name=" + user.firstName)} 
              className="bg-gray-900 text-gray-200 w-40 p-2 rounded-md">Send Money</button>
        </div>
    </div>
  ) 
}

export default UserComponent
