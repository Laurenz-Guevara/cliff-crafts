import { useState } from 'react';

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="faq">
        <div className="faq-title">
          <h1>FAQ</h1>
        </div>
        <div className="faq-questions-wrapper">
          <div className="accordion">
            <div className="accordion-header">
              <h2>What happens if an item doesn't fit?</h2>
              <button
                className="accordion-button"
                onClick={() => {
                  open !== 1 ? setOpen(1) : setOpen(0);
                }}
              >
                <i
                  className={open === 1 ? 'fa fa-minus' : 'fa fa-plus'}
                  aria-hidden="false"
                ></i>
              </button>
            </div>
            <div className="accordion-answer">
              {open === 1 && (
                <p>
                  Shoe’s not the right size? Bought lace instead of Velcro?
                  Don’t panic! Just as long as you haven’t already used the item
                  there isn’t a problem. Follow our return policy procedure and
                  we will refund you in 5 working days on arrival.
                </p>
              )}
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-header">
              <h2>How do I contact you?</h2>
              <button
                className="accordion-button"
                onClick={() => {
                  open !== 2 ? setOpen(2) : setOpen(0);
                }}
              >
                <i
                  className={open === 2 ? 'fa fa-minus' : 'fa fa-plus'}
                  aria-hidden="false"
                ></i>
              </button>
            </div>
            <div className="accordion-answer">
              {open === 2 && (
                <p>
                  If you need to get in contact with Cliffcrafts please email us
                  at contact@cliffcrafts.com or alternatively call our number at
                  +44 7700 900461
                </p>
              )}
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-header">
              <h2>The product is no longer in stock?</h2>
              <button
                className="accordion-button"
                onClick={() => {
                  open !== 3 ? setOpen(3) : setOpen(0);
                }}
              >
                <i
                  className={open === 3 ? 'fa fa-minus' : 'fa fa-plus'}
                  aria-hidden="false"
                ></i>
              </button>
            </div>
            <div className="accordion-answer">
              {open === 3 && (
                <p>
                  If you are unable to buy a certain product or a specific size
                  please check back on the 1st of every month. We re-stock our
                  products each month so keep an eye out for a a new drop.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
