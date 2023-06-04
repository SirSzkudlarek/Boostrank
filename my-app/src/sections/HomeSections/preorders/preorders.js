import './preorders.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import d4 from './src/diablo4.jpg';
import tww from './src/total-war-warhammer.jpg';
import lotr from './src/lotr-gollum.jpg';
import sk from './src/skull-bones.jpg';
import dad from './src/dragon-age-dreadwolf.jpg';
import tes from './src/tes-nec.jpg';

function Preorders() {
  return (
    <section className='section-wrapper-bestseller'>
      <div className='headline'>
        <h2 className='headline-title'>Pre-orders</h2>
        <div className='button'>View All</div>
      </div>
      <div className='games-container'>

        {/* Diablo IV */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={d4} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-24%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Diablo IV</span>
              </div>
            </div>
            <div className='price'>280.47zł</div>
          </div>
        </div>

        {/* Total War Warhammer */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={tww} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-32%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Total War: Warhammer III - Forge of the Chaos Dwarfs</span>
              </div>
            </div>
            <div className='price'>91.12zł</div>
          </div>
        </div>

        {/* The Lord of the Rings: Gollum */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={lotr} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-52%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>The Lord of the Rings: Gollum</span>
              </div>
            </div>
            <div className='price'>135.42zł</div>
          </div>
        </div>

        {/* Skull and Bones */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={sk} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-17%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Skull and Bones</span>
              </div>
            </div>
            <div className='price'>224.96zł</div>
          </div>
        </div>

        {/* Dragon Age: Dreadwolf */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={dad} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-12%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Dragon Age: Dreadwolf</span>
              </div>
            </div>
            <div className='price'>328.36zł</div>
          </div>
        </div>

        {/* The Elder Scrolls Online Upgrade: Necrom */}
        <div className='game'>
          <a className='game-cover'>
            <picture>
              <img src={tes} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-27%</div>
          </a>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>The Elder Scrolls Online Upgrade: Necrom</span>
              </div>
            </div>
            <div className='price'>137.30zł</div>
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
          {/* Diablo IV */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={d4} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-24%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Diablo IV</span>
                  </div>
                </div>
                <div className='price'>280.47zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Total War: Warhammer III - Forge of the Chaos Dwarfs */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={tww} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-32%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Total War: Warhammer III - Forge of the Chaos Dwarfs</span>
                  </div>
                </div>
                <div className='price'>91.12zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* The Lord of the Rings: Gollum */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={lotr} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-52%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>The Lord of the Rings: Gollum</span>
                  </div>
                </div>
                <div className='price'>135.42zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Skull and Bones */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={sk} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-17%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Skull and Bones</span>
                  </div>
                </div>
                <div className='price'>224.96zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Dragon Age: Dreadwolf */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={dad} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-12%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Dragon Age: Dreadwolf</span>
                  </div>
                </div>
                <div className='price'>328.36zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* The Elder Scrolls Online Upgrade: Necrom */}
          <SplideSlide>
            <div className='game'>
              <a className='game-cover'>
                <picture>
                  <img src={tes} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-27%</div>
              </a>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>The Elder Scrolls Online Upgrade: Necrom</span>
                  </div>
                </div>
                <div className='price'>137.30zł</div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Preorders;