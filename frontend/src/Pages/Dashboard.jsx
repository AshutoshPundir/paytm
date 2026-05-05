
// import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import UserComponent from '../components/UserComponent'

const Dashboard = () => {
  return (
    <div className='w-screen'>
      <Appbar/>
      <Balance value={10000}/>
      <UserComponent />
    </div>
  )
}

export default Dashboard
