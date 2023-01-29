import '../styles/components/footer.scss';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="wrapper">
          <div className="footer-content-container">
            <div className="footer-content">
              <h1>Cliffcrafts</h1>
              <p>
                Cliffcrafts provides you with fantastic products from a wide
                range of companies at an affordable price.
              </p>
            </div>
            <div className="footer-content">
              <h1>Products</h1>
              <p>Climbing Shoes</p>
              <p>Quickdraws & Carabiners</p>
              <p>Essentials</p>
              <p>Harnesses</p>
              <p>Camping Gear</p>
            </div>
            <div className="footer-content">
              <h1>Social Media</h1>
              <a
                href="https://www.linkedin.com/in/laurenzguevara/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faTwitter} className="icons" /> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/laurenzguevara/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faInstagram} className="icons" />{' '}
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/laurenzguevara/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faTiktok} className="icons" /> TikTok
              </a>
            </div>
            <div className="footer-content">
              <h1>Contact Us</h1>
              <p>contact@cliffcrafts.com</p>
              <p>+44 7700 900461</p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-footer">
        <div className="secondary-footer-container wrapper">
          <h1>Built by Laurenz Guevara</h1>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/laurenzguevara/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>
            <a
              href="https://github.com/Laurenz-Guevara?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
