import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { StoreProducts } from '../components/StoreProducts';
import { Footer } from '../components/Footer';

export function Collection() {
  const { slug }: any = useParams();
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
        <h1>Our Collection</h1>
        <div className="product-preview">
          {data && <StoreProducts data={data} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
