import './footer.scss';

function Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-content'>
        <div className='links'>
          <div className='logo-wrapper'>
            <div className='logo'>
              <a href="#" title="Homepage" className='logo-br'></a>
            </div>
          </div>

          <div className='list-wrapper'>
            <ul className='list'>
              <li>
                <a className='sublinks'>Polityka prywatności</a>
              </li>
              <li>
                <a className='sublinks'>Warunki korzystania</a>
              </li>
              <li>
                <a className='sublinks'>Kontakt do nas</a>
              </li>
              <li>
                <a className='sublinks'>FAQ</a>
              </li>
            </ul>
          </div>

          <div className='media'>
            <div className='icons'>
              {/* Facebook */}
              <a href="#" title='Facebook' className='socials facebook'>
                <div className='icon-facebook icon-socials'></div>
              </a>

              {/* Twitch */}
              <a href="#" title='Twitch' className='socials twitch'>
                <div className='icon-twitch icon-socials'></div>
              </a>

              {/* Youtube */}
              <a href="#" title='Youtube' className='socials youtube'>
                <div className='icon-youtube icon-socials'></div>
              </a>

              {/* Instagram */}
              <a href="#" title='Instagram' className='socials instagram'>
                <div className='icon-instagram icon-socials'></div>
              </a>

              {/* Reddit */}
              <a href="#" title='Reddit' className='socials reddit'>
                <div className='icon-reddit icon-socials'></div>
              </a>

              {/* Twitter */}
              <a href="#" title='Twitter' className='socials twitter'>
                <div className='icon-twitter icon-socials'></div>
              </a>
            </div>
          </div>

          <div className='footer-hero-wrapper'>
            <p className='hero-heading'>Join our <br/> socials!</p>
          </div>
        </div>
        <div className='information-copyright'>
          <div className='copyright'>Copyright © 2023 Boostrank - All rights reserved</div>
          
          <div className='lng-currency'>
            <div className='location-icon'></div>
            <span className='language'> English </span>
            <span className='currency'>PLN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;