import React from 'react';
import Header from './header/header';
import Background from './background';

const App = ({children}) => (
  <div>
    <Header />
    <Background />
    <section className="SearchIndexContainer">
      SearchContainer Here
    </section>

    {children}
  </div>
);

export default App;