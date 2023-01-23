import { NavLink } from 'react-router-dom';
import { urlFor } from '../../client';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function StoreProducts(props: { data: Product[] }) {
  return (
    <div className="product-preview-container">
      {props.data &&
        props.data.map((item) => (
          <div key={item.productName} className="product-preview-wrapper">
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
                  <p id="price">£{item.price.toFixed(2)}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
    </div>
  );
}
