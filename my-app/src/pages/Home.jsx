import React from 'react';
import LayoutDefault from '../layouts/default/default';
import Hero from '../sections/hero/hero';
import TrendyGames from '../sections/trendyGames/trendyGames';
import TrustPanel from '../sections/trustPanel/trustPanel';
import Preorders from '../sections/preorders/preorders';
import Partner from '../sections/partner/partner';
import WebsiteReviews from '../sections/website-reviews/websiteReviews';
import MiddleBanner from '../sections/middleBanner/middleBanner';
import SliderReviews from '../sections/sliderReviews/sliderReviews';

function Home() {
    return (
      <LayoutDefault>
        <Hero/>
        <TrendyGames/>
        <TrustPanel/>
        <Preorders/>
        <Partner/>
        <WebsiteReviews/>
        <MiddleBanner/>
        <SliderReviews/>
    </LayoutDefault>
    );
}

export default Home;