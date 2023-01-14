import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { useParams } from 'react-router-dom';
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
          price,
          slug,
    }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!data) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="product-container">
          <div className="product-preview-wrapper">
            <h2>{data.brand}</h2>
            <h1>{data.productName}</h1>
            <p>£{data.price}</p>
            <img src={urlFor(data.image && data.image[0]).url()}></img>
          </div>
        </div>
      </div>
    </>
  );
}
