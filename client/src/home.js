import React from 'react';
import './home.css'; 

function Home() {
  return (
               
    <div>
    <h1>Home</h1>
    
    <div className="search-box">
      <input type="text" placeholder="Search" />
      <button><i className="fas fa-search"></i></button>
    </div>

    <div className="homeboxContainer">
      <div className="homebox">
        <h1>#</h1>
        <p>Requests</p>
        <button className="roundButton">Open</button>
      </div>
      <div className="homebox"></div>
      <div className="homebox"></div>
    </div>
  </div>
);
 
}

export default Home;
