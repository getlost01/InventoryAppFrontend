import styles from "./styles.module.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Home from './Home';
import Cart from './Cart';
import Navbar from "../Navbar/Navbar";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		 <div className="App" style={{ backgroundColor: 'white', padding:'2rem',borderRadius:'5px'}}>
			<div className="Appcon">
			<Provider store={store}>
					<Navbar />
					{<Home />}
			</Provider>
			</div>
		</div>


	);
};

export default Main;
