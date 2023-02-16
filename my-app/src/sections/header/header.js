import './header.scss';
import { ReactComponent as IconPC } from './graphics/svg/pc-icon.svg';

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
                  <IconPC />
                </div>
                <span className='text'>PC</span>
                <div className='arrow-down'></div>
              </a>
            </div>

            <div className='playstation-item'>
              <a className='link' href='#'>
                <div className='icon'></div>
                <span className='text'>Playstation</span>
                <div className='arrow-down'></div>
              </a>
            </div>

            <div className='xbox-item'>
              <a className='link' href='#'>
                <div className='icon'></div>
                <span className='text'>Xbox</span>
                <div className='arrow-down'></div>
              </a>
            </div>

            <div className='nintendo-item'>
              <a className='link' href='#'>
                <div className='icon'></div>
                <span className='text'>Nintendo</span>
                <div className='arrow-down'></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;