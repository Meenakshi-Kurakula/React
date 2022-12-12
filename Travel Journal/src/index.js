import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Info from './Info';
import About from './About';
import Inte from './Inte';
import Footer from './Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Info />
    <About/>
    <Inte/>
    <Footer/>
  </StrictMode>
);
