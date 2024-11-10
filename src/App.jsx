import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router
import Header from './Components/Header'; 
import './index.css'; 
import HomePage from './pages/Home.jsx'; 
import LoginPage from './pages/Login'; 
import RegisterPage from './pages/Register'; 
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import TestPage from './pages/TestForm.jsx';
import ResultPage from './pages/Result.jsx';

const App = () => {
    return (
        <Router>
            <Header /> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/register" element={<RegisterPage />} /> 
                <Route path="/about" element={<AboutPage />} /> 
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path='/test' element={<TestPage/>}/>
                <Route path='/result' element={<ResultPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
