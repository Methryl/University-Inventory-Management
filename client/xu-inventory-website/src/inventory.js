import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './inventory.css';

function Inventory() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/assets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched assets:', data); // Log the data to verify
        setAssets(data);
      })
      .catch(error => console.error('Error fetching assets:', error));
  }, []);

  const handleRowClick = (id) => {
    // Navigate to the detailed view of the asset
    navigate(`/inventory/${id}`);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Asset ID</th>
            <th>Company</th>
            <th>Asset Type</th>
            <th>Serial Number</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {assets.length > 0 ? (
            assets.map(asset => (
              <tr key={asset.id} onClick={() => handleRowClick(asset.id)}>
                <td>{asset.id}</td>
                <td>{asset.title}</td>
                <td>{asset.asset_id}</td>
                <td>{asset.company}</td>
                <td>{asset.asset_type}</td>
                <td>{asset.serial_number}</td>
                <td>{asset.assigned_to}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No assets available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
