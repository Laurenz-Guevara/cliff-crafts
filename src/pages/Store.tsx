import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavBar } from '../components/NavBar';
import '../styles/pages/store.scss';

export function Store() {
  const [data, setData] = useState<any[]>();

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    client
      .fetch(
        `*[_type == "product"]{
          productName,
          description,
          specification,
          price,
          image
          }`
      )
      .then(
        (data) => (
          setData(data), setLoading(false), console.log('Called useEffect')
        )
      )
      .catch(console.error);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="product-container">
          {data &&
            data.map((item) => (
              <div key={item.productName} className="card-wrapper">
                <h1>{item.productName}</h1>
                <img src={urlFor(item.image && item.image[0]).url()}></img>
                <p>{item.description}</p>
                <p>{item.specification}</p>
                <p>£{item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
