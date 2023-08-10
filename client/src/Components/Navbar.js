import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './static/Navbar.css'
function Navbar({auth}) {

  const handleSignout = () =>{
    axios.get('http://localhost:8080/logout')
    .then(res=>{
      if(res.data.Status = 'Success'){
        window.location.reload(true)
      }
      else{
        alert('error')
      }
    })
    .catch((err)=>console.log('err'))
  }

  return (
    <div className='nav'>
        <h1 className='brand-name'>News Today</h1>
        {
          auth?<li className='log' onClick={handleSignout}>Log Out</li>:<li><Link to='/login' className='log' style={{textDecoration:'none'}}>Log In</Link></li>
        }
        
    </div>
  )
}

export default Navbar