import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './static/Login.css'

function Login() {

  const API = process.env.REACT_APP_BACKEND
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

async function loginUser(e){
  e.preventDefault();
  
  
  await axios.post(`${API}login`,{email,password})
  .then(result => {
    console.log(result);
    if(result.data.Status === "Success"){
      navigate('/')
    }
    
  
  })
  .catch((err)=>console.log(err))


}

  return (
    <div className="App">
      <h1 className='login-title'>Login User</h1>
      <form  className='login' onSubmit={loginUser}>
        <input type='email' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type='password' placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/><br/>
        <input className='button' type='submit' value='Login'/><br/>
        <span className='new-user'>New user?</span>
        <a href='/register' className='user-register'>Register</a>
      </form>
    </div>
  );
}

export default Login;
