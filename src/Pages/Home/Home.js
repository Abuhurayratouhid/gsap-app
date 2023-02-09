import React from 'react';
import Header from '../../Components/Header';
import Contact from './Contact';
import Feedback from './Feedback';
import Hero from './Hero';
import MiddleHero from './MiddleHero';
import Offer from './Offer';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Products></Products>
            <Offer></Offer>
            <Feedback></Feedback>
            <MiddleHero></MiddleHero>
            <Contact></Contact>
        </div>
    );
};

export default Home;