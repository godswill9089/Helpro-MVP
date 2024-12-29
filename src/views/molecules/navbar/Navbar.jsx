import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../context/Context';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';
import { getImages } from '../../../hooks/getImages';
import ModalLayout from '../../layouts/modal-layout/ModalLayout';
import ModalNavbar from '../../modals/modal-add-transaction/ModalNavbar';
import Button from '../button/Button';
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
                <Button
                  variant='outline'
                  text='Login'
                  icon={<FaChevronDown />}
                  onClick={() => {}}
                  width='10.7rem'
                />
                <Button text='Sign Up' onClick={() => {}} width='10.7rem' />
              </div>
              <div className='btns-mobile'>
                <Button
                  variant='outline'
                  text='Get Started'
                  onClick={() => {}}
                  width='10.7rem'
                  height='4.7rem'
                />
                <Button
                  variant='outline'
                  onClick={() => setShowAddNewTransactionModal(true)}
                  width='4.4rem'
                  height='4.7rem'
                  icon={<FaBars />}
                />
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
