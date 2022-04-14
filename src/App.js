
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './Home';
import Add from './Add';
import Unknown from './Unknown'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' exact element={<Home />}>
        </Route>
        <Route path='add' element={<Add />}>

        </Route>
        <Route path='edit/:id'>
        </Route>
        <Route path='*' element={<Unknown />}></Route>
      </Routes>
    </React.Fragment>);
}

export default App;
