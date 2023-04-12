import './partner.scss';
import geralt from './src/geralt.png'
import stars from './src/stars.png'

function Partner() {
  return (
    <section className='section-partner'>
      <div className='content-partner'>
        <picture>
          <img src={geralt} className='partner-img' alt='geralt-review'></img>
        </picture>

        <div className='text-partner'>
          <img src={stars} className='partner-stars' alt='stars-rating'></img>

          <div className='partner-comment'>
            <span>
              <strong>Blitzrank</strong> is as versatile and fast as a witcher on potions. If you care about fast and safe order fulfillment, you've come to the right place.
            </span>
            <span>
              Geralt of Rivia, Witcher of the School of the Wolf.
            </span>
          </div>

          <a href='#' title='user feedbacks' className='partner-button'>
            23,324 user feedbacks
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partner;