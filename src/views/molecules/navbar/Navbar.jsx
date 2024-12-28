import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../context/Context';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './Navbar.css';
import { getImages } from '../../../hooks/getImages';
import ModalLayout from '../../layouts/modal-layout/ModalLayout';
import ModalNavbar from '../../modals/modal-add-transaction/ModalNavbar';
const Navbar = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  const { logo } = getImages();
  const [showAddNewTransactionModal, setShowAddNewTransactionModal] =
    useState(false);
  return (
    <>
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
            <div className='btns-wrapper'>
              <div className='btns'>
                {/* <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button> */}
                <button className='outline'>
                  Login <FaChevronDown className='icon' />
                </button>
                <button
                  // onClick={() => setShowAddNewTransactionModal(true)}
                  className='primary'
                >
                  Sign Up
                </button>
              </div>
              <div className='btns-mobile'>
                <button className='outline'>Get started</button>
                <button
                  onClick={() => setShowAddNewTransactionModal(true)}
                  className='outline'
                >
                  <FaBars className='icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showAddNewTransactionModal && (
        <ModalLayout
          closeModal={() => {
            setShowAddNewTransactionModal(false);
          }}
        >
          <ModalNavbar
            closeModal={() => {
              setShowAddNewTransactionModal(false);
            }}
          />
        </ModalLayout>
      )}
    </>
  );
};

export default Navbar;
