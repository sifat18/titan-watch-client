import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import General from './General/General';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <General></General>
        </>
    );
};

export default Home;