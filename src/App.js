import React from 'react';
import Appfech from "./apifetching"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Details from "./details"
import './style.css'
import Error from './Pages/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <React.StrictMode> 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Appfech/>}></Route>
        <Route path="/menu" element={<Details/>}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
    </>
  )
}

export default App
