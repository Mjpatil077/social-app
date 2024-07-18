import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './pages/Auth/SignInPage';
import HomePage from './pages/Home/HomePage';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
    </Router>
    
    
  );
  
  
};

export default App;
