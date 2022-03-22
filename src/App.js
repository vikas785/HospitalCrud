import React from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import EditPatient from './components/EditPatient';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/add" element={<AddPatient />} />

        <Route exact path="/edit/:id" element={<EditPatient />} />
          

       

      </Routes>
      
    </div>
  );
}

export default App;
