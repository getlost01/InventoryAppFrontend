import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import axios from 'axios';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  const handleUpload = async (e) => {
		e.preventDefault();
		try {
      const data = JSON.parse(localStorage.getItem('products_data'));
			const url = "http://localhost:8080/api/product/create";
			const { data:res} = await axios.post(url, data);
		} catch (error) {
			console.log(error);
		}
	};

  
  
  return (
    <header>
      <h1>Inventory Management</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Item</button>
        <button className="muted-button" onClick={handleLogout}>
					Logout
				</button>
        <button className="muted-button" onClick={handleUpload}>
					Upload On Database
				</button>
      </div>
    </header>
  );
};

export default Header;