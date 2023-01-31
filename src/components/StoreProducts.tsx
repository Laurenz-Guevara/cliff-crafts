import { NavLink } from 'react-router-dom';
import { urlFor } from '../../client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import '../styles/components/storeProducts.scss';
import { useState } from 'react';

export function StoreProducts(props: { data: Product[] }) {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="product-preview-container">
      {props.data &&
        props.data.map((item) => (
          <div key={item.productName} className="product-preview-wrapper">
            <NavLink to={'/products/' + item.slug.current}>
              <LazyLoadImage
                effect="opacity"
                onMouseEnter={() => {
                  setSelected(item.productName);
                  console.log(selected);
                }}
                src={urlFor(
                  item.image &&
                    item.image[
                      selected === item.productName && item.image.length > 1
                        ? 1
                        : 0
                    ]
                ).url()}
                onMouseLeave={() => setSelected('')}
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
