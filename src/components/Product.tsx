import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import '../styles/components/product.scss';

export function Product() {
  const [data, setData] = useState<Product>();
  const [selected, selectedSize] = useState<string>();
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sliderData, setSliderData] = useState(0);
  const handleClick = (index: number) => {
    setSliderData(index);
  };

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          brand,
          productName,
          image,
          description,
          specification,
          size,
          price,
          slug,
    }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <>
      {data && (
        <>
          <div className="product-container">
            <div className="product-images">
              <LazyLoadImage
                effect="opacity"
                src={urlFor(data.image && data.image[sliderData]).url()}
              ></LazyLoadImage>
              <div className="thumbnail-images">
                {data.image.map((item: Image, i: number) => {
                  return (
                    <LazyLoadImage
                      className={sliderData === i ? 'active-product-image' : ''}
                      key={item._key}
                      effect="opacity"
                      src={urlFor(item).url()}
                      onClick={() => handleClick(i)}
                    ></LazyLoadImage>
                  );
                })}
              </div>
            </div>
            <div className="product-info">
              <h2>{data.brand}</h2>
              <div className="product-text">
                <h1>{data.productName}</h1>
                <h1 id="price">£{data.price.toFixed(2)}</h1>
              </div>
              <div className="product-description">
                <h1>Product Description</h1>
                <p>{data.description}</p>
                <h1>Features</h1>
                <p>{data.specification}</p>
              </div>
              <div className="product-size">
                <h2>Select the size (EU)</h2>
                <ul className="product-size-item">
                  {data.size.map((number: string) => {
                    if (selected === undefined) {
                      selectedSize(data.size[0]);
                    }
                    return (
                      <li key={number}>
                        <button
                          onClick={() => selectedSize(number)}
                          className={
                            selected === number
                              ? 'active-product-size-item'
                              : ''
                          }
                        >
                          <span>{number}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="cart-btn-container">
                <button
                  className="cart-btn"
                  aria-label="Add to Basket"
                  onClick={() => {
                    dispatch(
                      addItem({
                        brand: data.brand,
                        image: data.image,
                        price: data.price,
                        productName: data.productName,
                        slug: data.slug,
                        quantity: 1,
                        size: selected!,
                      })
                    );
                  }}
                >
                  Add To Cart
                </button>
                <button
                  className="cart-btn"
                  aria-label="Buy Item"
                  onClick={() => {
                    dispatch(
                      addItem({
                        brand: data.brand,
                        image: data.image,
                        price: data.price,
                        productName: data.productName,
                        slug: data.slug,
                        quantity: 1,
                        size: selected!,
                      })
                    ),
                      navigate('/checkout');
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="product-description-mobile">
            <h1>Product Description</h1>
            <p>{data.description}</p>
            <h1>Features</h1>
            <p>{data.specification}</p>
          </div>
        </>
      )}
    </>
  );
}
