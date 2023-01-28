import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './styles/index.scss';

export const stripePromise = loadStripe(
  'pk_test_51MUW67GzQtIIMK9gioTYxl6TMykBrjfI5ZU59PZsxZ4kipueEhmfCW3nRbN91u21a1BvB4qo48Tcj0HIiNd799r300PjX2UQuG'
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
