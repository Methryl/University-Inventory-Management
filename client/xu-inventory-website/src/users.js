import React, { useState, useEffect } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched users:', data); // Log the data to verify
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Second name</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.sname}</td>
                <td>{user.mail}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
   
  }
  
  export default Users;