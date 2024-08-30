/*import React from "react";
 
 
function InventoryForm() {
    return (
                 
      <div>
      <h1>Inventory Form</h1>
      
      <p> Hi this is the Inventory form</p>
    </div>
  );
   
  }
  
  export default InventoryForm;
  */
// src/AssetForm.js
import React, { useState, useEffect } from 'react';
 
 
const AssetForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    asset_id: '',
    company: '',
    asset_type: '',
    serial_number: '',
    assigned_to: ''
  });
 
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    // Fetch users to populate the dropdown
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
 
    fetchUsers();
  }, []);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:3001/assets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
 
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  return (
    <div>
      <h1>Add New Asset</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Asset ID:
            <input
              type="text"
              name="asset_id"
              value={formData.asset_id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Asset Type:
            <input
              type="text"
              name="asset_type"
              value={formData.asset_type}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Serial Number:
            <input
              type="text"
              name="serial_number"
              value={formData.serial_number}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Assigned To:
            <select
             type="text"
              name="assigned_to"
              value={formData.assigned_to}
              onChange={handleChange}
            >
              <option value="">Select User</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default AssetForm;
 