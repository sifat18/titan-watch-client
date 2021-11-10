import React from 'react';
import Banner from '../Banner/Banner';
import useWatchData from '../DataLoads/watchData';
import Header from '../Header/Header';
import General from './General/General';
import HomeProduct from './HomeProduct/HomeProduct';

const Home = () => {
    const [watches] = useWatchData();
    const homeData = watches.slice(0, 6);
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <General></General>
            <HomeProduct data={homeData}></HomeProduct>
        </>
    );
};

export default Home;