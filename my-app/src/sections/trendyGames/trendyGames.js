import './trendyGames.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import got from './src/ghost-of-tushima.jpg';
import nioh2 from './src/nioh2.jpg';
import sekiro from './src/sekiro.jpg';
import er from './src/elden-ring.jpg';
import wl from './src/wo-long.jpg';
import ln from './src/little-nightmares.jpg';
import hl from './src/hogwart-legacy-deluxe-edition.jpg';
import bb from './src/bloodborne-endless-nocturne.jpg';
import t7 from './src/tekken7.jpg';

function TrendyGames() {
  return (
    <section className='section-wrapper-trendy'>
      <div className='headline'>
        <h2 className='headline-title'>Popular now!</h2>
        <div className='button'>View all</div>
      </div>
      <div className='games-container'>

        {/* Ghost of Tushima */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={got} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-28%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Ghost of Tushima</span>
              </div>
            </div>
            <div className='price'>212.74zł</div>
          </div>
        </div>

        {/* Nioh 2 */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={nioh2} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-30%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Nioh 2</span>
              </div>
            </div>
            <div className='price'>185.24zł</div>
          </div>
        </div>

        {/* Sekiro */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={sekiro} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-20%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Sekiro</span>
              </div>
            </div>
            <div className='price'>193.64zł</div>
          </div>
        </div>

        {/* Elden Ring */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={er} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-42%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Elden Ring</span>
              </div>
            </div>
            <div className='price'>147.34zł</div>
          </div>
        </div>

        {/* Wo Long */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={wl} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-5%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Wo Long: Fallen Dynasty Digital Deluxe Edition</span>
              </div>
            </div>
            <div className='price'>289.64zł</div>
          </div>
        </div>

        {/* Little Nightmares*/}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={ln} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-82%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Little Nightmares</span>
              </div>
            </div>
            <div className='price'>44.78zł</div>
          </div>
        </div>

        {/* Hogwarts Legacy Deluxe Edition*/}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={hl} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-12%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Hogwarts Legacy Deluxe Edition</span>
              </div>
            </div>
            <div className='price'>297.26zł</div>
          </div>
        </div>

        {/* Bloodborne Endless Nocturne */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={bb} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-37%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Bloodborne Endless Nocturne</span>
              </div>
            </div>
            <div className='price'>164.89zł</div>
          </div>
        </div>

        {/* Tekken 7 */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={t7} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-87%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Tekken 7</span>
              </div>
            </div>
            <div className='price'>27.20zł</div>
          </div>
        </div>
      </div>
      <div className='splide-wrapper'>
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
          {/* Ghost of Tushima */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={got} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-28%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Ghost of Tushima</span>
                  </div>
                </div>
                <div className='price'>212.74zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Nioh 2 */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={nioh2} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-30%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Nioh 2</span>
                  </div>
                </div>
                <div className='price'>185.24zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Sekiro */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={sekiro} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-20%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Sekiro</span>
                  </div>
                </div>
                <div className='price'>193.64zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Elden Ring */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={er} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-42%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Elden Ring</span>
                  </div>
                </div>
                <div className='price'>147.34zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Wo Long */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={wl} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-5%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Wo Long: Fallen Dynasty Digital Deluxe Edition</span>
                  </div>
                </div>
                <div className='price'>289.64zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Little Nightmares*/}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={ln} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-82%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Little Nightmares</span>
                  </div>
                </div>
                <div className='price'>44.78zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Hogwarts Legacy Deluxe Edition*/}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={hl} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-12%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Hogwarts Legacy Deluxe Edition</span>
                  </div>
                </div>
                <div className='price'>297.26zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Bloodborne Endless Nocturne */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={bb} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-37%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Bloodborne Endless Nocturne</span>
                  </div>
                </div>
                <div className='price'>164.89zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Tekken 7 */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={t7} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-87%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Tekken 7</span>
                  </div>
                </div>
                <div className='price'>27.20zł</div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default TrendyGames;