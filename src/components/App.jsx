import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import FooterContainer from './Footer/FooterContainer';

import './App.less';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <FooterContainer />
    </div>
  );
};

export default App;
