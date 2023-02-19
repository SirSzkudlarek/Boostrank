import './header.scss';
import iconPC from './graphics/png/icon-pc.png';
import iconPS from './graphics/png/icon-ps.png';
import iconXBOX from './graphics/png/icon-xbox.png';
import iconNIN from './graphics/png/icon-nin.png';

function Header() {
  return (
    <div className='header-wrapper'>
      <div className='title-wrapper'>
        <h1>Boostrank</h1>
      </div>
      <nav className='header-nav-wrapper'>
        <div className='menu'>
          <div className='menu-items'>
            <div className='pc-item'>
              <a className='link' href='#'>
                <div className='icon'>
                  <img src={iconPC} className='icon' alt="iconPC" />
                </div>
                <span className='text'>PC</span>
                <span id="uparrow"></span>
              </a>
            </div>

            <div className='playstation-item'>
              <a className='link' href='#'>
                <div className='icon'>
                  <img src={iconPS} className='icon' alt="iconPS" />
                </div>
                <span className='text'>Playstation</span>
                <span id="uparrow"></span>
              </a>
            </div>

            <div className='xbox-item'>
              <a className='link' href='#'>
                <div className='icon'>
                  <img src={iconXBOX} className='icon' alt="iconXBOX" />
                </div>
                <span className='text'>Xbox</span>
                <span id="uparrow"></span>
              </a>
            </div>

            <div className='nintendo-item'>
              <a className='link' href='#'>
                <div className='icon'>
                  <img src={iconNIN} className='icon' alt="iconNIN" />
                </div>
                <span className='text'>Nintendo</span>
                <span id="uparrow"></span>
              </a>
            </div>
          </div>

          <form className='menu-search'>
            <input className='search-input'></input>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;