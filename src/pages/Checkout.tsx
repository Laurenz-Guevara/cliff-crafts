import React from 'react';
import { NavBar } from '../components/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '../../client';

export function Checkout() {
  const checkoutItems = useSelector((state: any) => state.cart);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Checkout</h1>
        <div className="product-preview">
          <div className="product-preview-container">
            {checkoutItems.cart &&
              checkoutItems.cart.map((item: any) => (
                <div key={item.id} className="product-preview-wrapper">
                  <NavLink to={'/products/' + item.slug.current}>
                    <LazyLoadImage
                      src={urlFor(item.image && item.image[0]).url()}
                    ></LazyLoadImage>
                    <div className="product-preview-text">
                      <div className="product-preview-text-right">
                        <h2>{item.productName}</h2>
                      </div>
                      <div className="product-preview-text-left">
                        <h1>{item.brand}</h1>
                        {item.price % 1 === 0 ? (
                          <p id="price">£{item.price}.00</p>
                        ) : (
                          <p id="price">£{item.price}</p>
                        )}
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
