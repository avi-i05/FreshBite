import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h1 className="logo">FreshBite</h1>
          <span className="logo-tagline">Taste the difference</span>
        </div>

        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search food, restaurants..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#categories" className="nav-link">
            <i className="fas fa-list"></i>
            <span className="nav-text">Categories</span>
          </a>
          <a href="#products" className="nav-link">
            <i className="fas fa-utensils"></i>
            <span className="nav-text">Products</span>
          </a>
          <a href="#restaurants" className="nav-link">
            <i className="fas fa-store"></i>
            <span className="nav-text">Restaurants</span>
          </a>
          <button
            className="cta-button"
            onClick={() => navigate('/auth')}
            aria-label="Sign In"
          >
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;