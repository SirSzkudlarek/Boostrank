import './gamesDetails.scss';
import { useLocation } from 'react-router-dom';

function GamesDetails(props) {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

  return (
    <section className='game-details-wrapper'>
      <div className='about'>
        <div className='headline'>
          <h2>About the game</h2>
        </div>

        <div className='text readable'>
          { data ? data.aboutGame : "About the Game" }
        </div>
        <div className='readable show-more-description'>Read more</div>
      </div>

      <div className='specifics'>
        <div className='socials-specifics'>
          <div className='reviews-rating'>
            <div className='note-container'>
              <img className='rate' src={ data ? data.gameRate : "Game Rate" } alt='ten-rate'></img>
            </div>
            <div className='based'>
              <span>Based on</span>
              <span className='based-link'>{ data ? data.reviewsNumber : "Reviews Number" } reviews</span>
            </div>
          </div>
        </div>

        <div className='table'>
          <div className='table-row'>
            <div className='table-cell'>Installation:</div>
            <div className='table-cell'>
              <a className='table-link'>How to activate your game</a>
            </div>
          </div>
          
          <div className='table-row'>
            <div className='table-cell'>Developer:</div>
            <div className='table-cell'>
              <a className='table-link'>{ data ? data.developer : "Developer" }</a>
            </div>
          </div>

          <div className='table-row'>
            <div className='table-cell'>Publisher:</div>
            <div className='table-cell'>
              <a className='table-link'>{ data ? data.publisher : "Publisher" }</a>
            </div>
          </div>

          <div className='table-row'>
            <div className='table-cell'>Release date:</div>
            <div className='table-cell'>
              <span className='table-text'>{ data ? data.releaseDate : "Release date" }</span>
            </div>
          </div>

          <div className='table-row'>
            <div className='table-cell'>Genre:</div>
            <div className='table-cell'>
              <a className='table-link'>{ data ? data.genreOne : "First" }</a>,  <a className='table-link'>{ data ? data.genreTwo : "Second" }</a>
            </div>
          </div>
        </div>
      </div>
      <div className='seperator-details'></div>
    </section>
  );
}

export default GamesDetails;