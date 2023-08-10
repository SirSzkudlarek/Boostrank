import './footerCart.scss';

function FooterCart() {
  return (
    <footer className='footer-wrapper-cart'>
      <div className='footer-content-cart'>
        <div className='links-cart'>
          <div className='logo-wrapper'>
            <div className='logo'>
              <a href="#" title="Homepage" className='logo-br'></a>
            </div>
          </div>
        </div>
        <div className='information-copyright'>      
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

export default FooterCart;