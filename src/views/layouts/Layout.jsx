/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { AppContext } from '../../context/Context';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Navbar from '../molecules/navbar/Navbar';

const Layout = () => {
  return (
    <div className='root-layout'>
      {/* <ScrollRestoration /> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
