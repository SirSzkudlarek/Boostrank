import React from 'react';
import '../../sections/HomeSections/hero/hero.scss';
import LayoutDefault from '../../layouts/default/default';
import ContentGamesItemsPage from '../../wrappers/contentGamesItemsPage';
import GamesPanel from '../../sections/GamesItemsPageSections/gamesPanel/gamesPanel';
import GamesDetails from '../../sections/GamesItemsPageSections/gamesDetails/gamesDetails';
import GamesVisuals from '../../sections/GamesItemsPageSections/gamesVisuals/gamesVisuals';
import { useLocation } from 'react-router-dom';


function TheLegendOFZeldaTotk(props) {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

    return (
      <LayoutDefault>
        <section className='highlights-wrapper'>
          <div className='parallax'>
            <div className='header-top-gradient'></div>
            <img src = { data ? data.parallaxImage : "There should be parallax Image" } alt="header-parallax"></img>
          </div>
        </section>
        <ContentGamesItemsPage>
          <GamesPanel/>
          <GamesDetails/>
          <GamesVisuals/>
        </ContentGamesItemsPage>
      </LayoutDefault>
    );
}

export default TheLegendOFZeldaTotk;