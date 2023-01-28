import { useState, useEffect } from 'react';
import { client } from '../../client';
import { NavBar } from '../components/NavBar';
import { Faq } from '../components/Faq';
import { StoreProducts } from '../components/StoreProducts';

import '../styles/pages/store.scss';

export function CheckoutSuccess() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1> Success</h1>
      </div>
      {/* <Footer /> */}
    </>
  );
}
