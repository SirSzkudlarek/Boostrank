import './hero.scss';


function Hero() {
  return (
    <section className='section-wrapper'>
      <h2>Popular now!</h2>
      <div className='games-container'>
        <div className='game'>
          <img className='game-img'></img>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Ghost of Tushima</span>
              </div>
              <div className='price'>200.00zł</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;