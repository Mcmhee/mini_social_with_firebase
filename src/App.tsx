import React from 'react';
import './Css/App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Nav } from './component/Navbar';
import { CreatePost } from './screens/CreatePost';


function App() {

  
  return (
    <BrowserRouter>
       
      <Nav/>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/CreatePost" element={<CreatePost/>} />
        </Routes>
        
        </BrowserRouter>
  );
}

export default App;
