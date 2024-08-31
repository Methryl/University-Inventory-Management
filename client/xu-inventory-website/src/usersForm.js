import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sname: '',
    mail: ''
  });

  const [message, setMessage] = useState(''); 

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
      const response = await fetch('http://localhost:3001/users/add', {
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

      setFormData({
        name: '',
        sname: '',
        mail: ''
      }); 

      setMessage('User successfully added!'); 
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to add user. Please try again.'); 
    }
  };

  return (
    <div className="vertical-center"> 
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input
              type="text"
              name="sname"
              value={formData.sname}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default UserForm;
