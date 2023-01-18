import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import { NavLink, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StoreProducts } from '../components/StoreProducts';

export function Collection() {
  const { slug }: any = useParams();
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    client
      .fetch(
        `*[navCategory == "${slug}" || subCategory == "${slug}" || brand == "${
          slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
        }"]{
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
            {data && <StoreProducts data={data} />}
          </div>
        </div>
      </div>
    </>
  );
}
