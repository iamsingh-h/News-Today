import React from 'react'
import { Link } from 'react-router-dom'
import './static/Nav.css'



function Nav() {
  return (
    <div className='nav-ul'>
        <ul>
          <li><Link to='/world' className='nav-link'>World</Link></li>
          <li><Link to='/health'className='nav-link'>Health</Link></li>
          <li><Link to='/science' className='nav-link'>Science</Link></li>
          <li><Link to='/business' className='nav-link'>Business</Link></li>
          <li><Link to='/entertainment' className='nav-link'>Entertainment</Link></li>
          <li><Link to='/technology'className='nav-link'>Technology</Link></li>
          <li><Link to='/sports' className='nav-link'>Sports</Link> </li>
            
        </ul>
    </div>
  )
}

export default Nav