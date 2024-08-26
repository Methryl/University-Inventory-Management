import React from 'react';
import { FaHome, FaWarehouse, FaUsers, FaExchangeAlt, FaSearch } from 'react-icons/fa';
import './App.css'; // Ensure this file exists with your custom styles

function TopBar() {
  return (
    <div className="topBar">
      <img
        style={{ height: '200px' }}
        src="https://cdn.schuelerkarriere.de/schuelerkarriere/2bfe712d-93ec-48af-9941-d4ea50dc3be9%252Fxu-exponential-university_logo.webp"
        alt="XU Logo"
      />
      <h2>XU Inventory Management</h2>
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><FaHome /> Home</li>
        <li><FaWarehouse /> Inventory <span className="badge">⚠️</span></li>
        <li><FaUsers /> Employees</li>
        <li><FaExchangeAlt /> Transactions</li>
      </ul>
      <a href="#" className="logout">LOGOUT</a>
    </nav>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <header>
        <h1>Home</h1>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button><FaSearch /></button>
        </div>
      </header>
      <div className="homeboxContainer">
        <div className="homebox">
          <h1>#</h1>
          <p>Requests</p>
          <button className="roundButton">Open</button>
        </div>
        <div className="homebox"></div>
        <div className="homebox"></div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
