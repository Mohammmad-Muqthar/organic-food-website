import "./Footer.css";

import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const quickLinks = [
  {
    id: 1,
    name: "Home",
    path: "#",
  },
  {
    id: 2,
    name: "Shop",
    path: "#",
  },
  {
    id: 3,
    name: "About",
    path: "#",
  },
  {
    id: 4,
    name: "Chaster",
    path: "#",
  },
];

function Footer() {
  return (
    <footer className="footer">

      {/* About */}

      <div className="footer-column footer-about">
        <h3>About Us</h3>

        <p>
          We bring fresh, organic and natural
          products to your everyday life.
          Healthy food for a healthier future.
        </p>
      </div>


      {/* Quick Links */}

      <div className="footer-column">
        <h3>Quick Links</h3>

        <ul>
          {quickLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>


      {/* Social Media */}

      <div className="footer-column">
        <h3>Follow Us</h3>

        <div className="footer-socials">

          <a
            href="#"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

        </div>
      </div>

    </footer>
  );
}

export default Footer;