import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div className={styles.navbar}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">Wender.in</span>
            <div>
                <Link className="navLink" to="/products">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <Link className="navLink" to="/">
                   Admin
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
