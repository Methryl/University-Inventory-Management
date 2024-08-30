import React from 'react';
import './App.css'; 
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="topBar">
      <ul className="logo">
<Link to="/">
      <img
       src="/image copy.png" 
       alt="XU Logo"
        style={{
          height: '50px',
          width: '50px', 
          borderRadius: '50%', 
          objectFit: 'cover' 
        }}
       
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
