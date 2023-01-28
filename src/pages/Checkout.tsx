import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '../../client';
import { incrementItem, decrementItem } from '../redux/cartSlice';

import '../styles/components/checkout.scss';

import { useStripe } from '@stripe/react-stripe-js';
import { fetchFromAPI } from './helpers';

export function Checkout() {
  const checkoutItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stripe = useStripe();

  const handleClick = async (event: any) => {
    const data = checkoutItems.cart.map((item: any) => {
      return {
        name: item.productName,
        images: [urlFor(item.image[0]).url()],
        amount: item.price * 100,
        currency: 'gbp',
        quantity: item.quantity,
        description: 'Size: ' + item.size.toString(),
      };
    });

    const body = { line_items: [...data] };

    const { id: sessionId } = await fetchFromAPI('checkouts', {
      body,
    });

    const { error } = await stripe!.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <h1>{checkoutItems.cartTotalItems} Items</h1>
        </div>

        <div className="checkout">
          {checkoutItems.cart &&
            checkoutItems.cart.map((item: any) => (
              <div key={item.id + item.productName} className="checkout-item">
                <NavLink to={'/products/' + item.slug.current}>
                  <LazyLoadImage
                    src={urlFor(item.image && item.image[0]).url()}
                  ></LazyLoadImage>
                </NavLink>

                <div className="checkout-item-container">
                  <div className="checkout-item-title">
                    <h1>{item.productName}</h1>
                  </div>
                  <div className="checkout-item-details">
                    <h2> Size: {item.size}</h2>
                    <h3>£{item.price.toFixed(2)}</h3>
                  </div>
                  <div className="adjust-item-qty">
                    <button
                      className="adjust-item-element"
                      onClick={() =>
                        dispatch(
                          decrementItem({
                            productName: item.productName,
                            size: item.size,
                            price: item.price,
                            id: item.id,
                          })
                        )
                      }
                    >
                      <i className="fa fa-minus" aria-hidden="false"></i>
                    </button>
                    <p className="adjust-item-element">{item.quantity}</p>
                    <button
                      className="adjust-item-element"
                      onClick={() =>
                        dispatch(
                          incrementItem({
                            productName: item.productName,
                            size: item.size,
                            price: item.price,
                          })
                        )
                      }
                    >
                      <i className="fa fa-plus" aria-hidden="false"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="checkout-footer">
          <div className="cart-total">
            <h1>Total</h1>
            <h1>£{checkoutItems.cartTotalCost.toFixed(2)}</h1>
          </div>
          {checkoutItems.cartTotalItems !== 0 ? (
            <button className="btn btn-primary" onClick={handleClick}>
              Complete Purchase
            </button>
          ) : (
            <>
              <h1>Your Cliffcrafts cart is empty.</h1>
              <button onClick={() => navigate('/store/')}>Browse Store</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
