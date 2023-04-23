import './sliderReviews.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import d2 from './src/diablo2.jpg';
import da3 from './src/dragon-age-inquisition.jpg';
import w3 from './src/warcraft3.jpg';
import gk from './src/graveyard-keeper.jpg';
import tlouI from './src/the-last-of-us-part1.jpg';
import tlouHater from './src/tlou-hater.png';
import warcraftHater from './src/warcraft-hater.png';
import d2Fan from './src/d2-fan.png';
import da3Fan from './src/da-Inquisition-fan.png';
import gkFan from './src/graveyard-keeper-fan.png'; 
import arrowPrev from './src/arrow-previous.png';
import arrowNext from './src/arrow-next.png';

function SliderReviews() {
  return (
    <section className='section-sliderReview'>
      <div class="headline-sliderReviews">
        <h2 class="headline-title">Gamer reviews</h2>
        <div class="button">Add Review</div>
      </div>
      <div className='splide-sliderReviews-wrapper'>
        <Splide hasTrack={ false } options={{
          breakpoints: {
            0: {
              fixedWidth: '20rem',
              pagination: false,
              arrows: false,
              width: '100vw',
              gap: '3rem',
              type: 'loop',
              padding: '5rem',
              focus: 'center',
              autoplay: false,
              interval: 6000,
              speed: 1300,
            },

            768: {
              fixedWidth: 'auto',
              gap: '4.5rem',
            },

            1024: {
              gap: '5rem',
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true,
            },

            1400: {
              gap: '7rem'
            },

            1900: {
              perPage: 3,
              arrows: true,
              autoWidth: true,
              gap: '5rem',
              padding: '4rem',
              width: '75%',
              fixedHeight: 'auto',
              autoplay: false,
            },
          },
          mediaQuery: 'min',
        }}
          aria-label="game-slider"
        >
          <SplideTrack>
            {/* Diablo II */}
            <SplideSlide>
              <div className='sliderReviews-item border-animated-gradient'>
                <img src={d2} alt='Diablo II'></img>

                <div className='sliderReviews-itemContent'>
                  <div className='user-container'>
                    <img src={d2Fan} alt='user-male-icon' className='user-icon'></img>
                  </div>
                  <div className='recommended-icon like'>
                    <div className='icon-socials icon-like'></div>
                  </div>
                </div>

                <div className='sliderReviews-itemReadable'>
                  Diablo II is greatest of all hack&slash games. Amount of heavy atmosphere is giving me goosebumps. Love mechanics and lore. If you are looking uniqe lore and inovative mechanics you had found your game.
                </div>
              </div>
            </SplideSlide>

            {/* Dragon Age Inquisition */}
            <SplideSlide>
            <div className='sliderReviews-item border-animated-gradient'>
                <img src={da3} alt='Dragon Age Inquisition'></img>

                <div className='sliderReviews-itemContent'>
                  <div className='user-container'>
                    <img src={da3Fan} alt='user-female-icon' className='user-icon'></img>
                  </div>
                  <div className='recommended-icon like'>
                    <div className='icon-socials icon-like'></div>
                  </div>
                </div>

                <div className='sliderReviews-itemReadable'>
                  Dragon Age Inquisition has wonderfull lore and world creation. This game is the best example of how to put equality values into a game.
                </div>
              </div>
            </SplideSlide>

            {/* Warcraft III: Reforged */}
            <SplideSlide>
              <div className='sliderReviews-item border-animated-gradient'>
                <img src={w3} alt='Warcraft III'></img>

                <div className='sliderReviews-itemContent'>
                  <div className='user-container'>
                    <img src={warcraftHater} alt='user-male-icon' className='user-icon'></img>
                  </div>
                  <div className='recommended-icon dislike'>
                    <div className='icon-socials icon-dislike'></div>
                  </div>
                </div>

                <div className='sliderReviews-itemReadable'>
                  Warcraft III is nothing more than cashgrab. A lot of bugs and destroyed naration. Cutscenes are terrible joke to orginal game. If you want support toxic pratices, then go for IT!
                </div>
              </div>
            </SplideSlide>

            {/* Graveyard Keeper */}
            <SplideSlide>
            <div className='sliderReviews-item border-animated-gradient'>
                <img src={gk} alt='Graveyard Keeper'></img>

                <div className='sliderReviews-itemContent'>
                  <div className='user-container'>
                    <img src={gkFan} alt='user-male-icon' className='user-icon'></img>
                  </div>
                  <div className='recommended-icon like'>
                    <div className='icon-socials icon-like'></div>
                  </div>
                </div>

                <div className='sliderReviews-itemReadable'>
                  This game was my escape from sad reality. Hope it would do same for you. Indie game is about mantaining your graveyard. While male protagonist is trying to get back to "real" world. Where he left his wife. Ironic does it not?
                </div>
              </div>
            </SplideSlide>

            {/* The Last of Us Part I */}
            <SplideSlide>
              <div className='sliderReviews-item border-animated-gradient'>
                <img src={tlouI} alt='The Last of Us Part I'></img>

                <div className='sliderReviews-itemContent'>
                  <div className='user-container'>
                    <img src={tlouHater} alt='user-female-icon' className='user-icon'></img>
                  </div>
                  <div className='recommended-icon dislike'>
                    <div className='icon-socials icon-dislike'></div>
                  </div>
                </div>

                <div className='sliderReviews-itemReadable'>
                  Bugged, not optymalized piece of garbage. Cashgrab feeding on meanwhile trending series The Last of Us. Remastering remastered game from 2014, what a monkey logic. 
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src={arrowPrev} alt="arrow-previous" aria-label='arrow-previous'></img>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <img src={arrowNext} alt="arrow-next" aria-label='arrow-next'></img>
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
}

export default SliderReviews; 