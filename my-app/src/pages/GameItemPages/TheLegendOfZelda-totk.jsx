import React from 'react';
import '../../sections/HomeSections/hero/hero.scss';
import LayoutDefault from '../../layouts/default/default';
import Parallax from '../../sections/HomeSections/hero/src/tloz-tears-of-the-kindom.jpg'
import ContentGamesItemsPage from '../../wrappers/contentGamesItemsPage';
import GamesPanel from '../../sections/GamesItemsPageSections/gamesPanel/gamesPanel';


function TheLegendOFZeldaTotk() {
    return (
      <LayoutDefault>
        <section className='highlights-wrapper'>
          <div className='parallax'>
            <div className='header-top-gradient'></div>
            <img src={Parallax} alt='header-parallax'></img>
          </div>
        </section>
        <ContentGamesItemsPage>
          <GamesPanel/>
        </ContentGamesItemsPage>
      </LayoutDefault>
    );
}

export default TheLegendOFZeldaTotk;