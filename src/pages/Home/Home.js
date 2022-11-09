import React from 'react'

import './Home.css';

import Hero from '../../components/Home/Hero/Hero';
import Programs from '../../components/Home/Programs/Programs';

function Home() {
    return (
        <div className='App'>
            <Hero />
            <Programs />
        </div>
    )
}

export default Home