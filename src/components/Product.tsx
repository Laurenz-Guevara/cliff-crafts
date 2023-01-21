import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';

export function Product() {
  const [data, setData] = useState<Product>();
  const { slug } = useParams();

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
              {data.price % 1 === 0 ? (
                <p id="price">£{data.price}.00</p>
              ) : (
                <p id="price">£{data.price}</p>
              )}
              <NavLink to="/store" className="cta-button" aria-label="Buy Item">
                Buy Now
              </NavLink>
              <p>{data.description}</p>
              <p>{data.specification}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
