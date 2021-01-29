import * as React from 'react';
import './app.scss';
import Layout from '../containers/layout/layout';
import Home from '../containers/home/home';

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
