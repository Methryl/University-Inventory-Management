import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function InventoryDetail() {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    fetch(`/api/assets/${id}`)
      .then(response => response.json())
      .then(data => setAsset(data))
      .catch(error => console.error('Error fetching asset details:', error));
  }, [id]);

  if (!asset) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Asset Details</h1>
      <p><strong>ID:</strong> {asset.id}</p>
      <p><strong>Title:</strong> {asset.title}</p>
      <p><strong>Asset ID:</strong> {asset.asset_id}</p>
      <p><strong>Company:</strong> {asset.company}</p>
      <p><strong>Asset Type:</strong> {asset.asset_type}</p>
      <p><strong>Serial Number:</strong> {asset.serial_number}</p>
      <p><strong>Assigned To:</strong> {asset.assigned_to}</p>
    </div>
  );
}

export default InventoryDetail;
