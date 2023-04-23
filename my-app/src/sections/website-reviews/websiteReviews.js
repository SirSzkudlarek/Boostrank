import './websiteReviews.scss';
import userMale from './src/user-male-icon.png';
import rateStar from './src/rate-star.png';
import userOne from './src/user1.png';
import userTwo from './src/user2.png';
import userThree from './src/user3.png';
import userFour from './src/user4.png';
import userFive from './src/user5.png';

function WebsiteReviews() {
  return (
    <section className='section-websiteReviews'>
      <div className='container-websiteReviews'>
        {/* Diablo II */}
        <div className='item-websiteReviews'>
          <div className='user-websiteReviews'>
            <img src={userOne} alt="user-male" className='user-icon-websiteReviews'></img>
            <div className='review-summary-websiteReviews'>
              <div className='rating-container-websiteReviews'>
                <img src={rateStar} alt='rate-star' className='star-websiteReviews'></img>
                <span> 5/5</span>
              </div>
              <span className='game-name-websiteReviews'>Diablo II</span>
            </div>
          </div>
          
          <div className='readable-websiteReviews'>Buying Diablo II was fast and easy!!</div>
          <div className='time-posted-websiteReviews'>57 minutes ago</div>
        </div>

        {/* Sekiro */}
        <div className='item-websiteReviews'>
          <div className='user-websiteReviews'>
            <img src={userTwo} alt="user-male" className='user-icon-websiteReviews'></img>
            <div className='review-summary-websiteReviews'>
              <div className='rating-container-websiteReviews'>
                <img src={rateStar} alt='rate-star' className='star-websiteReviews'></img>
                <span> 3/5</span>
              </div>
              <span className='game-name-websiteReviews'>Sekiro</span>
            </div>
          </div>
          
          <div className='readable-websiteReviews'>Had some problems with key but support helped me quickly.</div>
          <div className='time-posted-websiteReviews'>1 day ago</div>
        </div>

        {/* Elden Ring */}
        <div className='item-websiteReviews'>
          <div className='user-websiteReviews'>
            <img src={userThree} alt="user-male" className='user-icon-websiteReviews'></img>
            <div className='review-summary-websiteReviews'>
              <div className='rating-container-websiteReviews'>
                <img src={rateStar} alt='rate-star' className='star-websiteReviews'></img>
                <span> 4/5</span>
              </div>
              <span className='game-name-websiteReviews'>Elden Ring</span>
            </div>
          </div>
          
          <div className='readable-websiteReviews'>Great keys in cheap prices, but small diversity and you have to wait whole week for new offer.</div>

          <div className='time-posted-websiteReviews'>3 hours ago</div>
        </div>

        {/* Dragon Age: Dreadwolf */}
        <div className='item-websiteReviews'>
          <div className='user-websiteReviews'>
            <img src={userFour} alt="user-male" className='user-icon-websiteReviews'></img>
            <div className='review-summary-websiteReviews'>
              <div className='rating-container-websiteReviews'>
                <img src={rateStar} alt='rate-star' className='star-websiteReviews'></img>
                <span> 5/5</span>
              </div>
              <span className='game-name-websiteReviews'>Dragon Age: Dreadwolf</span>
            </div>
          </div>
          
          <div className='readable-websiteReviews'>Cheepest preorder in my life! Can't wait to play it!</div>
          <div className='time-posted-websiteReviews'>7 hours ago</div>
        </div>

        {/* Ghost of Tushima */}
        <div className='item-websiteReviews'>
          <div className='user-websiteReviews'>
            <img src={userFive} alt="user-male" className='user-icon-websiteReviews'></img>
            <div className='review-summary-websiteReviews'>
              <div className='rating-container-websiteReviews'>
                <img src={rateStar} alt='rate-star' className='star-websiteReviews'></img>
                <span> 5/5</span>
              </div>
              <span className='game-name-websiteReviews'>Ghost of Tushima</span>
            </div>
          </div>
          
          <div className='readable-websiteReviews'>You rock guys! Reliable source of cheep and great keys!! :^&#41;</div>

          <div className='time-posted-websiteReviews'>21 minutes ago</div>
        </div>
      </div>
    </section>
  );
}

export default WebsiteReviews; 