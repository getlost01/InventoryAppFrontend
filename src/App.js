import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
// import store from './store/store';
// import Home from './components/Main/Home';
import Cart from './components/Main/CartIndex';
// import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard';
import { useEffect } from "react";


function App() {
	const user = localStorage.getItem("token");

	const handelWakeup = async () => {
		try {
			const url = `https://inventoryappbackend.onrender.com/wake/api`;
			const { data } = await axios.get(url);
			console.log( data );
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handelWakeup();
	}, []);

	return (
		<Routes>
			{user && <Route path="/" exact element={<Dashboard />} />}
			{ <Route path="/products" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/cart" exact element={<Cart />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
		</Routes>
	);
}

export default App;
