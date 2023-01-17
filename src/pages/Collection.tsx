import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function Collection() {
  const { slug } = useParams();
  const [data, setData] = useState<Product[]>();
  console.log(slug);
  useEffect(() => {
    client
      .fetch(
        `*[navCategory == "${slug}" || subCategory == "${slug}" ]{
          brand,
          productName,
          image,
          price,
          slug,
          }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, [slug]);

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Collection</h1>

        <div className="wrapper">
          <div className="product-preview">
            <div className="product-preview-container">
              {data &&
                data.map((item: any) => (
                  <div
                    key={item.productName}
                    className="product-preview-wrapper"
                  >
                    <NavLink to={'/products/' + item.slug.current}>
                      <LazyLoadImage
                        src={urlFor(item.image && item.image[0]).url()}
                      ></LazyLoadImage>
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
          </div>
        </div>
      </div>
    </>
  );
}
