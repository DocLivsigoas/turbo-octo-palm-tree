import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce Store</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Link to="/admin/login">Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;