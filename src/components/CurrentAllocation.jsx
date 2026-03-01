import React from 'react';
import './CurrentAllocation.css';

const CurrentAllocation = () => {
    return (
        <section className="current-estate">
            <div className="section-label">CURRENT ALLOCATIONS</div>
            <div className="estate-container">
                <div className="estate-header">
                    <h2 className="estate-title">Two Estates. Two Origins.</h2>
                    <div className="estate-meta">
                        <span className="meta-item">Thailand</span>
                        <span className="dot">•</span>
                        <span className="meta-item">Laos</span>
                        <span className="dot">•</span>
                        <span className="meta-item">Micro-Batch</span>
                    </div>
                </div>

                <div className="estate-card">
                    <div className="estate-image">
                        <img src="/plantation.png" alt="Coffee Plantation" />
                    </div>
                    <div className="estate-description">
                        <p><strong>Jardin de Claude, Thailand</strong> — Natural Anaerobic · Yellow Caturra</p>
                        <p><strong>Boun Thateng, Laos</strong> — Washed · Typica</p>
                        <p style={{ marginTop: '12px' }}>Both $19.50 · 200g · Free Shipping</p>
                        <a href="/allocation" className="btn-outline">View Both Harvests</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentAllocation;
