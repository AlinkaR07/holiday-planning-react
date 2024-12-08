import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Components/HomePage'; // Главная страница до авторизации
import Dashboard from './Components/Dashboard'; // Личный кабинет

import './Styles/Layout.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Если авторизован - перенаправляем на личный кабинет */}
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <HomePage setIsAuth={setIsAuth} />} />
        <Route path="/dashboard" element={isAuth ? <Dashboard setIsAuth={setIsAuth}/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
