
// import React from 'react'
import axios from "axios"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Header from "../components/Header"
import InputBox from "../components/InputBox"
import SubHead from "../components/SubHead"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Dashboard from './Dashboard';
// import Sign_up from './Sign_up';

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  return (

    <div className="flex justify-center items-center w-screen h-screen p-0 m-0 bg-transparent">
        <div className="w-92 h-100 flex flex-col justify-evenly items-center shadow-sm ">

            <div>

            <Header header={"Sign In"}/>
            <SubHead label={"Enter your credentials to access your account"}/>
            </div>

            <div className="w-full">
            <InputBox onChange={(e)=> setUserName(e.target.value)} InputHead={"Email"} placeholder={"Email"} />
            <InputBox onChange={(e)=> setPassword(e.target.value)} InputHead={"Password"} placeholder={"123456"} />
            </div>

            <div className="w-full flex flex-col items-center">
            <Button onClick={ async()=>{
              
              const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
              })
              localStorage.setItem(response.data.token);
              navigate("/dashboard")

            }} button={"Sign In"} afterThis={"/dashboard"} />
            <BottomWarning bottomLineText={"Don't have an account?"} LinkTo={"Sign_up"} to={"/signup"} />
            </div>
        </div>

      
    </div>
  )
}

export default Signin
