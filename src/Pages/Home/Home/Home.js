import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <ShowReview></ShowReview>
          <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;