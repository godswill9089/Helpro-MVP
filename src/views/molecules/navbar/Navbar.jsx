import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../context/Context';
import { FaChevronDown } from 'react-icons/fa';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './Navbar.css';
import { getImages } from '../../../hooks/getImages';
const Navbar = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  const { logo } = getImages();

  return (
    <nav>
      <div className='wrapper'>
        <div className='logo'>
          <img src={logo} alt='' className='' />
        </div>
        <div className='pages-btns-wrapper'>
          <div className='nav-links'>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'navlink-active' : 'text-color';
              }}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'navlink-active' : 'text-color';
              }}
              to='/products'
            >
              Products
              <FaChevronDown />
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'navlink-active' : 'text-color';
              }}
              to='/faq'
            >
              FAQ
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'navlink-active' : 'text-color';
              }}
              to='/contact-us'
            >
              Contact us
            </NavLink>
          </div>
          <div className='btns'>
            {/* <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button> */}
            <button className='log-in'>
              Login <FaChevronDown className='icon' />
            </button>
            <button className='sign-up'>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
