
// import {Signup,Signin,Dashboard,SendMoney} from './components'
// import Signup from './Pages/signup';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import SendMoney from './Pages/SendMoney'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Sign_up from './Pages/Sign_up';

function App() {

  return (
    <Router> 
        <Routes>
          <Route path='/Signup' element={<Sign_up/>} />
          {/* <Route path="/" element={<Signup/>}/> */}
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
    </Router>
  )
}

export default App
