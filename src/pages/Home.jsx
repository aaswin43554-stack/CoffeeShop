import React from 'react';
import Hero from '../components/Hero';
import CurrentAllocation from '../components/CurrentAllocation';
import Journey from '../components/Journey';
import Documentation from '../components/Documentation';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <CurrentAllocation />
            <Journey />
            <Documentation />
            <Newsletter />
        </div>
    );
};

export default Home;
