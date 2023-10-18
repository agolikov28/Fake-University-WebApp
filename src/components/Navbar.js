import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faScaleBalanced, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          HAVENDALE<i class="logo"><FontAwesomeIcon icon={faScaleBalanced}/></i>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon= {click ? faTimes : faBars}/>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/academics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                What We Offer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Current Events
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Student/Staff Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Student/Staff Sign In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
