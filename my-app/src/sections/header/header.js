import './header.scss';

const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

function Header() {
  return (
    <nav className='header-container'>
        <div className='menu'>
          <div className='trendings'>
            <a className='links-nav-menu' href='#'>Trending</a>
            <a className='links-nav-menu' href='#'>Pre-orders</a>
            <a className='links-nav-menu' href='#'>Upcoming</a>
            <a className='links-nav-menu' href='#'>Support 24/7</a>
          </div>

          <div className='product-menu'>
            <div className='glossy'></div>
            <div className='links-nav-menu'>
              <div className='nav pc'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-pc icon-xs'></div>
                  <span className='title'>PC</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav playstation'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-pc icon-xs'></div>
                  <span className='title'>Playstation</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav xbox'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-pc icon-xs'></div>
                  <span className='title'>Xbox</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav nintendo'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-pc icon-xs'></div>
                  <span className='title'>Nintendo</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Header;