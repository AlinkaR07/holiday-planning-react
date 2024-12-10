import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Components/HomePage'; // Главная страница до авторизации
import Dashboard from './Components/Dashboard'; // Личный кабинет
import EventsPage from './Components/EventsPage';
import GostsPage from './Components/GostsPage';
import ContractorsPage from './Components/ContractorsPAge';
import BudgetPage from './Components/BudgetPage';
import TasksPage from './Components/TasksPage';

import './Styles/Layout.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Если авторизован - перенаправляем на личный кабинет */}
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <HomePage setIsAuth={setIsAuth} />} />
        <Route path="/dashboard" element={isAuth ? <Dashboard setIsAuth={setIsAuth}/> : <Navigate to="/" />} />
        <Route path="/events" element={<EventsPage setIsAuth={setIsAuth}/>}/>
        <Route path="/gosts" element={<GostsPage setIsAuth={setIsAuth}/>}/>
        <Route path="/contractors" element={<ContractorsPage setIsAuth={setIsAuth}/>}/>
        <Route path="/budget" element={<BudgetPage setIsAuth={setIsAuth}/>}/>
        <Route path="/tasks" element={<TasksPage setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
