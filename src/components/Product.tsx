import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

import '../styles/components/product.scss';

export function Product() {
  const sizes: any = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  const [data, setData] = useState<Product>();
  const [size, selectedSize] = useState<number>(sizes[0]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sliderData, setSliderData] = useState(0);
  const handleClick = (index: number) => {
    console.log(index);
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
          price,
          slug,
    }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <>
      <div className="wrapper">
        {data && (
          <div className="product-container">
            <img src={urlFor(data.image && data.image[sliderData]).url()}></img>
            <div className="thumbnail-images">
              {data.image.map((item: any, i: number) => {
                return (
                  <LazyLoadImage
                    key={item._key}
                    effect="blur"
                    src={urlFor(item).url()}
                    onClick={() => handleClick(i)}
                  ></LazyLoadImage>
                );
              })}
            </div>
            <h2>{data.brand}</h2>
            <div className="product-text">
              <h1>{data.productName}</h1>
              <h1 id="price">£{data.price.toFixed(2)}</h1>
            </div>
            <div className="product-size">
              <h2>Select the size (EU)</h2>
              <ul className="product-size-item">
                {sizes.map((number: number) => {
                  return (
                    <li key={number}>
                      <button
                        onClick={() => selectedSize(number)}
                        className={
                          size == number ? 'active-product-size-item' : ''
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
                      size: size,
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
                      size: size,
                    })
                  ),
                    navigate('/checkout');
                }}
              >
                Buy Now
              </button>
            </div>
            <div className="product-description">
              <p>{data.description}</p>
              <p>{data.specification}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
