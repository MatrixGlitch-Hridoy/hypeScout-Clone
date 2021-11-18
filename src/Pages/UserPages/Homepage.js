import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import SelectCards from '../../components/SelectCards/SelectCards';
const Homepage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <SelectCards/>
        </div>
    );
};

export default Homepage;