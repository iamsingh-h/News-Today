import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';
import News from './Components/News';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [auth, setAuth] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/').then((res) => {
      if (res.data.Status === 'Success') {
        setAuth(true);
      } else {
        setAuth(false);
        setMsg(res.data.Message);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar auth={auth} />

      {
        auth? <Nav/> : null
      }
      <Routes>
      
          <Route path="/" element={<News auth={auth} category={'general'} />} />
          <Route path="/business" element={<News category={'business'} />} />
          <Route path="/world" element={<News category={'world'} />} />
          <Route path="/technology" element={<News category={'technology'} />} />
          <Route path="/entertainment" element={<News category={'entertainment'} />} />
          <Route path="/sports" element={<News category={'sports'} />} />
          <Route path="/science" element={<News category={'science'} />} />
          <Route path="/health" element={<News category={'health'} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
