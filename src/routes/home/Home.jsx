import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer'
import "./Home.css"

const Home = () => {
    return (
        <div className="backgraund_color">
                <HeroBanner />
                <Main />
                <Footer/>
        </div>

    )
}

export default Home