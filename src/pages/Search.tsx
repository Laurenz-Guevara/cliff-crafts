import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { StoreProducts } from '../components/StoreProducts';
import { Footer } from '../components/Footer';

export function Search() {
  const { slug } = useParams();
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    client
      .fetch(
        `*[navCategory match "${slug}*" || subCategory match "${slug}*" || productName match "${slug}*"|| brand match "${slug}*"] {
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
        {data?.length !== 0 && slug !== undefined ? (
          <>
            <h1>Search results for "{slug}".</h1>
            <div className="product-preview">
              <StoreProducts data={data!} />
            </div>
          </>
        ) : slug !== undefined ? (
          <h1>Sorry we couldn't find anything that matches "{slug}".</h1>
        ) : (
          <h1>Please enter at least one keyword.</h1>
        )}
      </div>
      <Footer />
    </>
  );
}
