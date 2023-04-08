import './hero.scss';
import headerParallax from './src/Diablo4.jpg';

function Hero() {
  return (
    <section className='highlights-wrapper'>
      <div className='parallax'>
        <div className='header-top-gradient'></div>
        <img src={headerParallax} alt='header-parallax'></img>
      </div>
      <div className='content'>
        <span className='banner-title'>Diablo 4</span>
        <div className='banner-numbers'>
          <span className='discount-parallax'>-24%</span>
          <span className='price-parallax'>280.47zł</span>
        </div>
      </div>
      <a target='_blank' rel='noopener noreferrer' className='parallax-link' href='https://diablo4.blizzard.com/pl-pl/' title='Buy Diablo 3 on blizzard offical website.'> </a>
    </section>
  );
}

export default Hero;

