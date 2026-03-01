import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src="/logo.jpg" alt="ONE ESTATE logo" className="logo-icon" />
                    <span>ONE ESTATE</span>
                </Link>

                <ul className="nav-links">
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>HOME</Link></li>
                    <li><Link to="/allocation" className={isActive('/allocation') ? 'active' : ''}>ALLOCATION</Link></li>
                    <li><Link to="/journal" className={isActive('/journal') ? 'active' : ''}>JOURNEY</Link></li>
                </ul>

                <Link to="/signup" className="btn-join">Join Release</Link>
            </nav>
        </header>
    );
};


export default Header;
