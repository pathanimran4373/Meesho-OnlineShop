import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobaleContext } from './GlobalContext/Context/ProductContext';
import  SearchGlobaleContext  from './GlobalContext/Context/FilterProducts';
import CartContext from './GlobalContext/Context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GlobaleContext>
  <SearchGlobaleContext>
  <CartContext>
  <App />
  
  </CartContext>
  </SearchGlobaleContext>
  
  </GlobaleContext>
);

