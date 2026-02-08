import React from 'react';
import Stats from './Stats';
import Pricing from './Pricing';
import Award from './Award';
import Education from './Education';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default HomePage;