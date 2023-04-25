import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './layouts/default';
import Hero from './sections/hero/hero';
import TrendyGames from './sections/trendyGames/trendyGames';
import TrustPanel from './sections/trustPanel/trustPanel';
import Preorders from './sections/preorders/preorders';
import Partner from './sections/partner/partner';
import WebsiteReviews from './sections/website-reviews/websiteReviews';
import MiddleBanner from './sections/middleBanner/middleBanner';
import SliderReviews from './sections/sliderReviews/sliderReviews';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Hero/>
      <TrendyGames/>
      <TrustPanel/>
      <Preorders/>
      <Partner/>
      <WebsiteReviews/>
      <MiddleBanner/>
      <SliderReviews/>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
