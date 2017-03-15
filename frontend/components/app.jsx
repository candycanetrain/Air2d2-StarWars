import React from 'react';
import Header from './header/header';

const App = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

export default App;