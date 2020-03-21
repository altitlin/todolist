import React from 'react';

import './Footer.less';

const Footer = () => {
  return (
    <footer className='footer'>
      <input type='text' placeholder='What to do ' className='footer__input-text' />
      <button className='btn footer__btn'>Add a task</button>
    </footer>
  );
};

export default Footer;
