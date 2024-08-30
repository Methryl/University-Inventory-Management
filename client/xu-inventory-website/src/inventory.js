import React, { useState, useEffect } from 'react';
import './inventory.css';
import { useNavigate } from 'react-router-dom';
import './inventory.css';



function Inventory() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch assets data from the API
    fetch('/api/assets')
      .then(response => response.json())
      .then(data => setAssets(data))
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
          {assets.map(asset => (
            <tr key={asset.id} onClick={() => handleRowClick(asset.id)}>
              <td>{asset.id}</td>
              <td>{asset.title}</td>
              <td>{asset.asset_id}</td>
              <td>{asset.company}</td>
              <td>{asset.asset_type}</td>
              <td>{asset.serial_number}</td>
              <td>{asset.assigned_to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}





/*function Inventory() {
    return (
                 
      <div>
      <h1>Hi this is the inventory</h1>
      
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button><i className="fas fa-search"></i></button>
      </div>
  
      <div className="dataTableContainer">
      <table id="example" class="display" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011-04-25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011-07-25</td>
                <td>$170,750</td>
            </tr>
            </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
      </div>
    </div>
  );
   
  }*/

  export default Inventory;
