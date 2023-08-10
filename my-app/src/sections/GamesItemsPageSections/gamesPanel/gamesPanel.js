import './gamesPanel.scss';
import { useLocation } from 'react-router-dom';

function GamesPanel(props) {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

  return (
    <section className='games-panel-wrapper'>
      <div className='games-panel'>
        <div className='game-graphic-presentation'>
          <picture className='banner'>
            <img className='banner-graphic' src={ data ? data.gameImage : "There should be game Image" } alt='The Legend of Zelda Tears of The Kingdom'></img>
          </picture>
        </div>

        <div className='game-panel-item wide'>
          <div className='item-name'>
            <h1>{ data ? data.productName : "Product Name" }</h1>
          </div>

          <div className='item-subinfo'>
            <div className='platform'>
              <div className={ data ? data.platformBackground : "platform" }>
                <div className={ data ? data.platformImage : "icon-s" }></div>
              </div>
              <span>{ data ? data.platformName : "Platform Name" }</span>
              <div className='spacer'></div>
            </div>

            <div className='avaible'>
              <div className='icon-check icon-xxs'></div>
              <span>{ data ? data.quntinityAvailable : "Available" }</span>
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
              { data ? data.userOnPage : "I dunno, sorry :^/" } users on this page
            </span>
          </div>

          <div className='amount'>
            <div className='discounts'>
              <div className='icon-tag'></div>
              <div className='retail'>{ data ? data.retailPrice : "Retail Price" }</div>
            </div>

            <div className='discounted'>{ data ? data.discount : "Discount" }</div>
            <div className='total'>{ data ? data.price : "Price" }</div>
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