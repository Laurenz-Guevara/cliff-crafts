import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export function Product() {
  const [data, setData] = useState<Product>();
  const { slug } = useParams();

  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

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
        <div className="product-container">
          {data && (
            <div className="product-preview-wrapper">
              <h2>{data.brand}</h2>
              <h1>{data.productName}</h1>
              <img src={urlFor(data.image && data.image[0]).url()}></img>
              <p id="price">£{data.price.toFixed(2)}</p>
              <button
                className="cta-button"
                aria-label="Buy Item"
                onClick={() =>
                  dispatch(
                    addItem({
                      brand: data.brand,
                      image: data.image,
                      price: data.price,
                      productName: data.productName,
                      slug: data.slug,
                      quantity: 1,
                    })
                  )
                }
              >
                Add To Cart
              </button>

              <p>{data.description}</p>
              <p>{data.specification}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
