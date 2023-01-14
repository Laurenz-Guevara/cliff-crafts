import { NavLink } from 'react-router-dom';
import { urlFor } from '../../client';

export function StoreProducts(props: { data: Product[] }) {
  return (
    <div className="product-preview-container">
      {props.data &&
        props.data.map((item) => (
          <div key={item.productName} className="product-preview-wrapper">
            <NavLink to={'/products/' + item.slug.current}>
              <img src={urlFor(item.image && item.image[0]).url()}></img>
              <h2>{item.brand}</h2>
              <h1>{item.productName}</h1>
              {item.price % 1 === 0 ? (
                <p id="price">£{item.price}.00</p>
              ) : (
                <p id="price">£{item.price}</p>
              )}
            </NavLink>
          </div>
        ))}
    </div>
  );
}
