import './hero.scss';
import headerParallax from './src/tloz-tears-of-the-kindom.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxtlouTearOfTheKingdom from './src/tloz-tears-of-the-kindom.jpg';
import bannerImg from '../../GamesItemsPageSections/gamesPanel/src/zelda-totk-banner.jpg';
import rateTen from '../../GamesItemsPageSections/gamesDetails/src/rate-ten.png'
import ss1 from '../../GamesItemsPageSections/gamesVisuals/src/screenshoot1.png';
import ss2 from '../../GamesItemsPageSections/gamesVisuals/src/screenshoot2.png';
import ss3 from '../../GamesItemsPageSections/gamesVisuals/src/screenshoot3.png';
import ss4 from '../../GamesItemsPageSections/gamesVisuals/src/screenshoot4.png';
import ss5 from '../../GamesItemsPageSections/gamesVisuals/src/screenshoot5.png';

function Hero() {
  const [data] = useState({
    tlozTearOfTheKingdom: {
      parallaxImage: ParallaxtlouTearOfTheKingdom,
      gameImage: bannerImg,
      productName: 'The Legend of Zelda: Tears of the Kingdom Switch - Europe',
      platformBackground: 'platform-nintendo',
      platformImage: 'icon-s icon-nintendo',
      platformName: 'Switch',
      quntinityAvailable: 'In stock',
      userOnPage: '78',
      retailPrice: '280.47zł',
      discount: '-24%',
      price: '347.78zł',
      aboutGame: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda:Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a worldfuelled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you will decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Links new abilities to fight back against the',
      gameRate: rateTen,
      reviewsNumber: '67',
      developer: 'Nintendo',
      publisher: 'Nintendo',
      releaseDate: '12 May 2023',
      genreOne: 'Action',
      genreTwo: 'Adventure',
      video: 'https://player.vimeo.com/video/817334121?h=76790cc73d&title=0&byline=0&portrait=0',
      screenshoot1: ss1,
      screenshoot2: ss2,
      screenshoot3: ss3,
      screenshoot4: ss4,
      screenshoot5: ss5,
      descriptionFirstApostrof: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fuelled by your imagination.',
      descriptionSecondApostrof: 'In this sequel to The Legend of Zelda: Breath of the Wild, you will decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Links new abilities to fight back against the malevolent forces that threaten the kingdom?',
    },
  });

  return (
    <section className='highlights-wrapper'>
      <div className='parallax'>
        <div className='header-top-gradient'></div>
        <img src={headerParallax} alt='header-parallax'></img>
      </div>
      <div className='content'>
        <span className='banner-title'>The Legend of Zelda Tears of the Kingdom</span>
        <div className='banner-numbers'>
          <span className='discount-parallax'>-24%</span>
          <span className='price-parallax'>280.47zł</span>
        </div>
      </div>
      <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tlozTearOfTheKingdom }} className='parallax-link'> </Link>
    </section>
  );
}

export default Hero;

