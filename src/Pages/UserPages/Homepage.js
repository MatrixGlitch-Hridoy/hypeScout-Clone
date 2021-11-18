import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
import SelectCards from '../../components/Home/SelectCards/SelectCards';
const Homepage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <SelectCards/>
            <Footer/>
        </div>
    );
};

export default Homepage;