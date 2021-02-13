import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './Home.css'
import SideBar from '../Shared/SideBar/SideBar';

const Home = () => {
    return (
        <div>
            <Header/>
            <SideBar/>
            <Footer/>
        </div>
    );
};

export default Home;