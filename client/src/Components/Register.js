import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './static/Register.css'

function Register() {
  
  const API = process.env.REACT_APP_BACKEND
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

async function registerUser(e){
  e.preventDefault();
    
  await axios.post(`${API}register`,{name,email,password})
  .then(result => {
    console.log(result);
    navigate('/login')
  
  })
  .catch((err)=>console.log(err))


}

  return (
    <div className="App">
      <h1 className='register-title'>Register User</h1>
      <form className='register'onSubmit={registerUser}>
        <input type='text' placeholder="Name" onChange={(e)=>setName(e.target.value)}/> <br/>
        <input type='email' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type='password' placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/><br/>
        <input className='button' type='submit' value='Register'/>
      </form>
    </div>
  );
}

export default Register;
