import { Link } from 'react-router-dom';
import './hero.scss';
import headerParallax from './src/tloz-tears-of-the-kindom.jpg';

function Hero() {
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
      <Link to='/TheLegendOfZeldaTotk' className='parallax-link'> </Link>
    </section>
  );
}

export default Hero;

