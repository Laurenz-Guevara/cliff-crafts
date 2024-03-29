import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '../../client';
import { incrementItem, decrementItem } from '../redux/cartSlice';
import { Triangle } from 'react-loader-spinner';

import '../styles/components/checkout.scss';

import { useStripe } from '@stripe/react-stripe-js';
import { fetchFromAPI } from '../lib/helpers';
import { Footer } from '../components/Footer';

export function Checkout() {
  const checkoutItems = useSelector((state: CartState) => state.cart);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stripe = useStripe();
  const handleClick = async () => {
    window.scrollTo(0, 0);
    document.querySelector('body')!.classList.toggle('lock-scroll');
    setActive(true);
    const data = checkoutItems.cart.map((item: Cart) => {
      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.productName,
            images: [urlFor(item.image[0]).url()],
            description: 'Size: ' + item.size,
          },
          unit_amount: (item.price * 100).toFixed(0),
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="checkout-header">
          <h1>Shopping Cart</h1>
          <h1>{checkoutItems.cartTotalItems} Items</h1>
        </div>

        <div className="checkout">
          {active ? (
            <>
              <div className="background-shadow"></div>
              <div className="stripe-loading-card">
                <Triangle
                  height="80"
                  width="80"
                  color="#da291d"
                  ariaLabel="triangle-loading"
                  wrapperClass="spinner"
                  visible={true}
                />
                <h1>We are completing your purchase...</h1>
              </div>
            </>
          ) : (
            ''
          )}
          {checkoutItems.cart &&
            checkoutItems.cart.map((item: Cart) => (
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
          {checkoutItems.cartTotalItems !== 0 ? (
            <>
              <div className="cart-total">
                <h1>Total:</h1>
                <h1>£{checkoutItems.cartTotalCost.toFixed(2)}</h1>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleClick}
                disabled={active}
              >
                Complete Purchase
              </button>
            </>
          ) : (
            <>
              <div className="empty-cart">
                <h1>Your Cliffcrafts cart is empty.</h1>
                <button onClick={() => navigate('/store/')}>
                  Browse Store
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
