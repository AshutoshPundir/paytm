// import React from 'react'

import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Header from "../components/Header"
import InputBox from "../components/InputBox"
import SubHead from "../components/SubHead"
// import Dashboard from "./Dashboard"
// import Signin from "./Signin"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Sign_up = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen p-0 m-0 bg-transparent">
        <div className="w-92 h-120 flex flex-col justify-center items-center shadow-sm ">

            <Header header={"Sign Up"}/>
            <SubHead label={"Enter your information to create an account"}/>
            <InputBox onChange={(e)=> setFirstName(e.target.value) } InputHead={"First Name"} placeholder={"John"} />
            <InputBox onChange={(e)=> setLastName(e.target.value)} InputHead={"Last Name"} placeholder={"Doe"} />
            <InputBox onChange={(e)=> setUserName(e.target.value)} InputHead={"Email"} placeholder={"Email"} />
            <InputBox onChange={(e)=> setPassword(e.target.value)} InputHead={"Password"} placeholder={"123456"} />
            <Button onClick={async ()=> {
              
              const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                  firstName,
                  lastName,
                  username,
                  password
                })
                localStorage.setItem('token',response.data.token);
              
                navigate("/dashboard")
            }} button={"Sign Up"} />
            <BottomWarning bottomLineText={"Already have an account?"} LinkTo={"Sign in"} to={"/signin"} />
    
        </div>

      
    </div>
  )
}

export default Sign_up
