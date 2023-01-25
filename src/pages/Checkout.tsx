import React from 'react';
import { NavBar } from '../components/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '../../client';
import { incrementItem, decrementItem } from '../redux/cartSlice';

export function Checkout() {
  const checkoutItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  console.log(checkoutItems);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Checkout</h1>
        {checkoutItems.cartTotalCost % 1 === 0 ? (
          <h3 id="price">£{checkoutItems.cartTotalCost}.00</h3>
        ) : (
          <h3 id="price">£{checkoutItems.cartTotalCost}</h3>
        )}
        <div className="checkout">
          {checkoutItems.cart &&
            checkoutItems.cart.map((item: any) => (
              <div key={item.id} className="product-preview-wrapper">
                <NavLink to={'/products/' + item.slug.current}>
                  <LazyLoadImage
                    src={urlFor(item.image && item.image[0]).url()}
                  ></LazyLoadImage>
                </NavLink>

                <button
                  onClick={() =>
                    dispatch(
                      incrementItem({
                        productName: item.productName,
                        price: item.price,
                      })
                    )
                  }
                >
                  Add 1
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      decrementItem({
                        productName: item.productName,
                        price: item.price,
                      })
                    )
                  }
                >
                  Remove 1
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
