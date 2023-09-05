import './gamesVisuals.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ss1 from './src/screenshoot1.png';
import ss2 from './src/screenshoot2.png';
import ss3 from './src/screenshoot3.png';
import ss4 from './src/screenshoot4.png';
import ss5 from './src/screenshoot5.png';
import { useLocation } from 'react-router-dom';

function GamesVisuals(props) {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

  return (
    <section className='game-visuals-wrapper'>
      <div className='seperator'></div>
      <div className='headlineGamesItemsPage'>
        <h2 className='headline-visuals'>Visuals</h2>
      </div>

      <div className='vimeo'>
        <iframe title='showcase-video' src={ data ? data.video : "There should be video" } width="966" height="560" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className='gallery-wrapper'>
        <div className='highlight-img'>
          <picture>
            <img className='gallery-img-highlight' src={ data ? data.screenshoot1 : "ss" } alt='ss1'></img>
          </picture>
        </div>
        <div className='rest-img-wrapper'>
          <div className='rest-img'>
            <picture>
              <img className='gallery-img' src={ data ? data.screenshoot2 : "ss" } alt='ss2'></img>
            </picture>
          </div>

          <div className='rest-img'>
            <picture>
              <img className='gallery-img' src={ data ? data.screenshoot3 : "ss" } alt='ss3'></img>
            </picture>
          </div>

          <div className='rest-img'>
            <picture>
              <img className='gallery-img' src={ data ? data.screenshoot4 : "ss" } alt='ss4'></img>
            </picture>
          </div>

          <div className='rest-img'>
            <picture>
              <img className='gallery-img' src={ data ? data.screenshoot5 : "ss" } alt='ss5'></img>
            </picture>
          </div>
        </div>
      </div> 

      <div className='splide-wrapper-gamesItemsPage'>
        <Splide options={{
          breakpoints: {
            0: {
              fixedWidth: '20rem'
            },

            550: {
              fixedWidth: '25rem'
            },

            768: {
              fixedWidth: '30rem'
            },
          },
          mediaQuery: 'min',
          pagination: false,
          arrows: false,
          gap: '3rem',
          type: 'loop',
          padding: '5rem',
          focus: "center",
          autoplay: true,
          interval: 6000,
          speed: 1300,
        }}
          aria-label="game-slider"
        >
          <SplideSlide>
            <div className='splide-screenshot-wrapper'>
              <div className='splide-screenshot-cover'>
                <picture>
                  <img src={ data ? data.screenshoot1 : "ss" } className='splide-screenshot-img' alt='test'></img>
                </picture>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='splide-screenshot-wrapper'>
              <div className='splide-screenshot-cover'>
                <picture>
                  <img src={ data ? data.screenshoot2 : "ss" } className='splide-screenshot-img' alt='test'></img>
                </picture>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='splide-screenshot-wrapper'>
              <div className='splide-screenshot-cover'>
                <picture>
                  <img src={ data ? data.screenshoot3 : "ss" } className='splide-screenshot-img' alt='test'></img>
                </picture>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='splide-screenshot-wrapper'>
              <div className='splide-screenshot-cover'>
                <picture>
                  <img src={ data ? data.screenshoot4 : "ss" } className='splide-screenshot-img' alt='test'></img>
                </picture>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='splide-screenshot-wrapper'>
              <div className='splide-screenshot-cover'>
                <picture>
                  <img src={ data ? data.screenshoot5 : "ss" } className='splide-screenshot-img' alt='test'></img>
                </picture>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <div className='seperator'></div>

      <div className='description'>
          <h2 className='headlineGamesItemsPage'>Description</h2>
        <div className='text'>
          <span>
            { data ? data.descriptionFirstApostrof : "First Apostrof" }
            <br/>
            <br/>
            { data ? data.descriptionSecondApostrof : "" }
          </span>
        </div>
      </div>

      <div className='seperator'></div>
    </section>
  );
}

export default GamesVisuals;