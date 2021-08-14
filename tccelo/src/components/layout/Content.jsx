import React from 'react';
import './Content.css';

import Home from'../../views/contents/Home';
import About from'../../views/contents/About';
import NotFound from'../../views/contents/NotFound';

export default () => {
  return (
    <main className="Content">
      <Home/>
      <About/>
      <NotFound/>
    </main>
  );
}  