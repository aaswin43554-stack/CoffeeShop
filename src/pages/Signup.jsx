import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        announcements: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock signup logic
        console.log('Signup Data:', formData);
        alert('Welcome to the One Estate Community!');
        navigate('/');
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-image-side">
                    <div className="branding-image-container">
                        <img src="/signimage.png" alt="Specialty Coffee Bag" className="branding-bag-img" />
                    </div>
                    <div className="branding-overlay">
                        <p className="subtitle">JOIN THE HARVEST</p>
                        <h1>One Estate Community</h1>
                        <p className="description">
                            Gain exclusive access to limited-run specialty releases,
                            estate stories, and the journey from farm to cup.
                        </p>
                    </div>
                </div>

                <div className="signup-form-side">
                    <div className="form-wrapper">
                        <h2 className="form-title">Create Account</h2>
                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="form-group">
                                <label htmlFor="name">FULL NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="whatsapp">WHATSAPP NUMBER</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    placeholder="+1 234 567 890"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group-checkbox">
                                <input
                                    type="checkbox"
                                    id="announcements"
                                    name="announcements"
                                    checked={formData.announcements}
                                    onChange={handleChange}
                                />
                                <label htmlFor="announcements">
                                    Receive Community Announcements & Special Releases
                                </label>
                            </div>

                            <button type="submit" className="btn-signup-submit">
                                CREATE ACCOUNT
                            </button>
                        </form>

                        <p className="login-prompt">
                            Already have an account? <span onClick={() => navigate('/login')}>Sign In</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
