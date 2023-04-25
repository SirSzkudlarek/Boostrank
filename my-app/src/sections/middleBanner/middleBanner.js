import './middleBanner.scss';
import bannerParallax from './src/banner.jpg';

function MiddleBanner() {
  return (
    <section className='highlights-middleBanner-wrapper'>
      <div className='parallax'>
        <img src={bannerParallax} alt='header-parallax'></img>
      </div>
      <div className='content'>
        <span className='banner-title'>Northgard</span>
        <div className='banner-numbers'>
          <span className='discount-parallax'>-48%</span>
          <span className='price-parallax'>66.85zł</span>
        </div>
      </div>
      <a target='_blank' rel='noopener noreferrer' className='parallax-link' href='https://northgard.net/' title='Buy Diablo 3 on blizzard offical website.'> </a>
    </section>
  );
}

export default MiddleBanner;
