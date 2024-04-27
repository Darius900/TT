import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart, FaUser, FaSearch, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);

  const categories = [
    'Oferte Speciale',
    'Lemne',
    'Fete',
    'Solutii de lipit si curatat',
    'Tricouri',
    'Tricouri copii',
    'Sorturi',
    'Sorturi copii',
    'Treninguri',
    'Treninguri copii',
    'Incaltaminte sport',
    'Sosete',
    'Mese si accesorii',
    'Mingi',
    'Geci si hanorace',
    'Genti si huse',
    'Palete preasamblate',
    'Roboti',
    'Suveniruri',
    'Prosoape',
    'Banda de cant',
    'Palete predefinite',
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log('Search query:', searchQuery);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleClickOutside = (event) => {
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setIsCategoriesOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="Header">
      <div className="TopBar">
        <div className="LeftPlaceholder">
          <Link to="/link1" className="Link">
            <FaPhone className="Icon" /> 0711111111 / 0711111111
          </Link>
          <Link to="/link2" className="Link">
            <FaEnvelope className="Icon" /> contact@contact.ro
          </Link>
        </div>
        <div className="MiddlePlaceholder">
          <p>Transport gratuit pentru comenzile de peste 499 lei!</p>
        </div>
        <div className="RightPlaceholder">
          <Link to="/link4" className="Link">
            <FaWhatsapp className="Icon" /> Click aici pentru a comanda prin WhatsApp!
          </Link>
        </div>
      </div>
      <div className="MainHeader">
        <div className="LeftPlaceholder">
          <Link to="/" className="Link">Acasa</Link>
          <div
            className={`CategoriesDropdown ${isCategoriesOpen ? 'open' : ''}`}
            ref={categoriesRef}
            onMouseEnter={toggleCategories}
            onMouseLeave={toggleCategories}
          >
            <Link to="/category/Catalog produse" className="Link">
              Categorii
            </Link>
            {isCategoriesOpen && (
              <div className="CategoriesMenu">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${encodeURIComponent(category)}`}
                    className="CategoryLink"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="Link">Despre noi</Link>
          <Link to="/contact" className="Link">Contact</Link>
        </div>
        <div className="SearchBar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Cauta produse..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="RightPlaceholder">
        <Link to="/register" className="Link"><FaUser /> Login</Link>
          <Link to="/link10" className="Link"><FaShoppingCart /> Cos</Link>
          <Link to="/payment" className="Link">Livrare si plata</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;