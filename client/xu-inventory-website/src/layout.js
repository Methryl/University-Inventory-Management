import React from 'react';
import './App.css'; // Ensure this file contains styles for your layout
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="topBar">

      <ul className="logo">
<Link to="/">
      <img
        style={{
          height: '50px',
          width: '50px', /* Ensure width matches height for a perfect circle */
          borderRadius: '50%', /* Make the image circular */
          objectFit: 'cover' /* Optional: Ensures image covers the circle properly */
        }}
        src="https://cdn.schuelerkarriere.de/schuelerkarriere/2bfe712d-93ec-48af-9941-d4ea50dc3be9%252Fxu-exponential-university_logo.webp"
        alt="XU Logo"
      />
    </Link>
</ul>

<ul className="centeredContent">
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <h2>XU Inventory Management</h2>
  </Link>
</ul>
    </div>
      
      <div className="contentWrapper">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory </Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/usersForm">Add User</Link></li>
            <li><Link to="/inventoryForm">Add Item</Link></li>

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
