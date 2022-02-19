import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import RecentOrders from './Components/RecentOrders/RecentOrders';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div>
    <Navbar />
    <Dashboard />
    {/* <RecentOrders /> */}
    
    {/* <Login /> */}

    </div>
  );
}

export default App;