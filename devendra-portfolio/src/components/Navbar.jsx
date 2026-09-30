import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          Devendra<span>.</span>
        </a>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
