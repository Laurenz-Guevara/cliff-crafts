import '../styles/components/banner.scss';

export function Banner(props: { text: string }) {
  return (
    <>
      <div className="features-container">
        <div className="features-card">
          <div className="features-card-text">
            <h1>{props.text}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
