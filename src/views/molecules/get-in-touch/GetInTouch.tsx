import React from 'react';
import Button from '../button/Button';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <div className='container'>
        <h1 className='title'>Get in touch with Helproo</h1>
        <p className='info'>
          Have questions about our platform or want to collaborate with us? We’d
          love to hear from you. Use the form below or reach out through the
          provided contact details, and we’ll get back to you as soon as
          possible.
        </p>
        <div className='form'>
          <div className='details'>
            <div className='input-group'>
              <label>Full name</label>
              <input type='text' placeholder='Enter text' />
            </div>
            <div className='input-group'>
              <label>Email address</label>
              <input type='text' placeholder='Enter text' />
            </div>
          </div>
          <div className='input-group'>
            <label>Message</label>
            <textarea placeholder='Enter text' />
          </div>
        </div>
        <div className='btn'>
          <Button text='Subscribe' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
