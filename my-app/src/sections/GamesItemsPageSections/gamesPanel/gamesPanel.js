import './gamesPanel.scss';
import bannerImg from './src/zelda-totk-banner.jpg';

function GamesPanel() {
  return (
    <section className='games-panel-wrapper'>
      <div className='games-panel'>
        <div className='game-graphic-presentation'>
          <picture className='banner'>
            <img className='banner-graphic' src={bannerImg} alt='The Legend of Zelda Tears of The Kingdom'></img>
          </picture>
        </div>

        <div className='game-panel-item wide'>
          <div className='item-name'>
            <h1>The Legend of Zelda: Tears of the Kingdom Switch - Europe</h1>
          </div>

          <div className='item-subinfo'>
            <div className='platform'>
              <div className='platform-nintendo'>
                <div className='icon-s icon-switch'></div>
              </div>
              <span>Switch</span>
              <div className='spacer'></div>
            </div>

            <div className='avaible'>
              <div className='icon-check icon-xxs'></div>
              <span>In stock</span>
              <div className='spacer'></div>
            </div>

            <div className='download'>
              <div className='icon-check icon-xxs'></div>
              <span>Digital download</span>
            </div>
          </div>

          <div className='viral'>
            <span className='fire'>
              <div className='fire-icon icon-xs'></div>
              74 users on this page
            </span>
          </div>

          <div className='amount'>
            <div className='discounts'>
              <div className='icon-tag'></div>
              <div className='retail'>280.47zł</div>
            </div>

            <div className='discounted'>-24%</div>
            <div className='total'>347.78zł</div>
          </div>

          <div className='action-priced'>
            <a className='button-addToCart button'>
              <div className='icon-cart-games-panel icon-s'></div>
            </a>
            <a className='button-buyNow button'>Buy now</a>
          </div>
        </div>
      </div>

      <div className='seperator'></div>
    </section>
  );
}

export default GamesPanel;