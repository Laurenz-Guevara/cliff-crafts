import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { StoreProducts } from '../components/StoreProducts';
import { Footer } from '../components/Footer';

export function Collection() {
  const { slug } = useParams();
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    client
      .fetch(
        `*[navCategory == "${slug}" || subCategory == "${slug}" || brand match "${slug}"]{
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
        <h1>
          {slug!.charAt(0).toUpperCase()! + slug!.split('-').join(' ').slice(1)}
        </h1>
        <div className="product-preview">
          {data?.length !== 0 ? (
            <StoreProducts data={data!} />
          ) : (
            <div className="product-unavaliable">
              <h1>No products have been added for this category.</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
