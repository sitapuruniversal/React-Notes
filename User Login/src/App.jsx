import { useState } from 'react';
import './App.css';
import logo from "./assets/instagram.png"

function App() {
  const [login,setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  return (
   <div className ='container'>
        <div className="user">
              <img src={logo} alt="" />
              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email'/>
              <input hidden={login} type="text" placeholder='Full Name'/>
              <input type="email" name="" id="" placeholder='enter your email'/>
              <input type="password" placeholder='Password' />
              <button>{login?"Sign in":"Sign up"}</button>
          <div className='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
          </div>  
   </div>
  );
}

export default App;
