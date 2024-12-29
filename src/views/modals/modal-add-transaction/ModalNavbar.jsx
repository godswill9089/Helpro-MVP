import React, { useEffect, useState } from 'react';
import './ModalNavbar.css';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../../molecules/button/Button';

const ModalNavbar = ({ closeModal }) => {
  return (
    <div className='modal-navbar'>
      <div className='nav-links'>
        <div className='nav-link' onClick={() => closeModal()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navlink-active' : 'text-color';
            }}
            to='/'
          >
            Home
          </NavLink>
        </div>
        <div className='nav-link' onClick={() => closeModal()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navlink-active' : 'text-color';
            }}
            to='/products'
          >
            Products
            <FaChevronDown />
          </NavLink>
        </div>
        <div className='nav-link' onClick={() => closeModal()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navlink-active' : 'text-color';
            }}
            to='/faq'
          >
            FAQ
          </NavLink>
        </div>
        <div className='nav-link' onClick={() => closeModal()}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'navlink-active' : 'text-color';
            }}
            to='/contact-us'
          >
            Contact us
          </NavLink>
        </div>
      </div>
      <div className='btns'>
        <Button
          variant='outline'
          text='Login'
          icon={<FaChevronDown />}
          onClick={() => {}}
          width='10.7rem'
        />
        <Button text='Sign Up' onClick={() => {}} width='10.7rem' />
      </div>
    </div>
  );
};

export default ModalNavbar;
