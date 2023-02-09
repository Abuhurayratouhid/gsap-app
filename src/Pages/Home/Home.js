import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Blog from './Blog';
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
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;