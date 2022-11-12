import React from 'react'

import './Home.css';

import Hero from '../../components/Home/Hero/Hero';
import Programs from '../../components/Home/Programs/Programs';
import Reasons from '../../components/Home/Reasons/Reasons';
import Plans from '../../components/Home/Plans/Plans';
import Footer from '../../components/Home/Footer/Footer';

function Home() {
    return (
        <div className='App'>
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Footer />
        </div>
    )
}

export default Home