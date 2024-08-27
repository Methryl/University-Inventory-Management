import React from 'react';
import './App.css'; // Ensure this file contains styles for your layout
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="topBar">
        <img
          style={{ height: '200px' }}
          src="https://cdn.schuelerkarriere.de/schuelerkarriere/2bfe712d-93ec-48af-9941-d4ea50dc3be9%252Fxu-exponential-university_logo.webp"
          alt="XU Logo"
        />
        <h2>XU Inventory Management</h2>
      </div>
      
      <div className="contentWrapper">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory </Link></li>
            <li><Link to="/employees">Users</Link></li>
            <li><Link to="/transactions">Add Item</Link></li>
            <li><Link to="/transactions">Add User</Link></li>

          </ul>
        </nav>
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
