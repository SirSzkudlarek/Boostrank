import React from 'react';
import LayoutDefault from '../layouts/default/default';
import Hero from '../sections/HomeSections/hero/hero';
import TrendyGames from '../sections/HomeSections/trendyGames/trendyGames';
import TrustPanel from '../sections/HomeSections/trustPanel/trustPanel';
import Preorders from '../sections/HomeSections/preorders/preorders';
import Partner from '../sections/HomeSections/partner/partner';
import WebsiteReviews from '../sections/HomeSections/website-reviews/websiteReviews';
import MiddleBanner from '../sections/HomeSections/middleBanner/middleBanner';
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