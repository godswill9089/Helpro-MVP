import React from 'react';
import './Footer.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';
import AppStore from '../app-store/AppStore';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';

const Footer = () => {
  const { envelope, logo } = getImages();
  const { isMobile } = useWindowSize();
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='details'>
          <div className='logo-wrapper'>
            <div className='logo-con'>
              <img src={logo} alt='' />
            </div>
            <div className='btns'>
              <AppStore
                variant='ios'
                onClick={() => {}}
                size={isMobile ? '' : 'md'}
              />
              <AppStore
                variant='android'
                onClick={() => {}}
                size={isMobile ? '' : 'md'}
              />
            </div>
          </div>
          <div className='footer-links-wrapper'>
            <div className='footer-links-con'>
              <div className='footer-links'>
                <p className='title'>Products</p>
                <div className='links'>
                  <p className='link'>Users</p>
                  <p className='link'>Service Providers</p>
                </div>
              </div>
              <div className='footer-links'>
                <p className='title'>Support</p>
                <div className='links'>
                  <Link to='/faq'>
                    <p className='link'>FAQ</p>
                  </Link>
                  <Link to='/contact-us'>
                    <p className='link'>Contact</p>
                  </Link>
                  <Link to={'/terms-and-conditions'}>
                    <p className='link'>Terms & conditions</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='follow'>
              <p className='title'>Follow Us</p>
              <div className='social-links'>
                <div className='social-link'>
                  <FaFacebook className='icon' />
                </div>
                <div className='social-link'>
                  <FaTwitter className='icon' />
                </div>
                <div className='social-link'>
                  <FaInstagram className='icon' />
                </div>
                <div className='social-link'>
                  <FaLinkedin className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border'></div>
        <div className='subscribe'>
          <h1 className='title'>Subscribe to our news letter</h1>
          <p className='info'>
            Never miss a product update. Get a weekly dose of product you could
            buy or invest in.
          </p>
          <div className='email-wrapper'>
            <div className='email-con'>
              <label htmlFor='email' className='icon-wrapper'>
                <img src={envelope} alt='envelope' />
              </label>
              <input id='email' type='text' placeholder='Email address' />
            </div>
            <Button text='Subscribe' onClick={() => {}} width='14rem' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
