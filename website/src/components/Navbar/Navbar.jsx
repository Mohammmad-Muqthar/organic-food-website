import "./Navbar.css";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Chaster",
    path: "/chaster",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ORGANIC
      </div>

      <div className="navbar-links">
        {navLinks.map((link) => (
          <a key={link.id} href={link.path}>
            {link.name}
          </a>
        ))}
      </div>

      <div className="navbar-cart">
        🛒
      </div>
    </nav>
  );
}

export default Navbar;