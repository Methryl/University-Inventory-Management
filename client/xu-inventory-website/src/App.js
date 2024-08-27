import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Inventory from './inventory';
import InventoryForm from './inventoryForm';
import UsersForm from './usersForm';
import Users from './users';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="users" element={<Users />} />
          <Route path="inventoryForm" element={<InventoryForm />} />
          <Route path="usersForm" element={<UsersForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
