import React from 'react';
import CampaignDescription from '../../components/Campaign/CampaignDescription';
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer'
const CampaignDescriptionPage = () => {
    return (
        <>
            <Header/>
                <CampaignDescription/>
            <Footer/>
        </>
    );
};

export default CampaignDescriptionPage;