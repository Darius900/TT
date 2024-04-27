import React from 'react';
import './CategoryGrid.css';
import { Link } from 'react-router-dom';

import paleta from './paleta.svg';
import rubber from './rubber.svg';
import lemn from './lemn.svg';
import masa from './masa.svg';
import all from './all.svg';

const Categories = () => {
  const categories = [
    { name: 'Lemne', img: paleta  },
    { name: 'Fete', img: rubber },
    { name: 'Palete', img: lemn },
    { name: 'Mese si accesorii', img: masa },
    { name: 'Toate categoriile', img: all },
  ];

  return (
    <div className="Categories">
      {categories.map((category, index) => (
        <div key={index} className="Category">
          <img src={category.img} alt={category.name} className="Category-img" />
          <div className="Category-text">
          <Link to={`/category/${encodeURIComponent(category.name)}`} className="Category-link">
              <h3>{category.name}</h3>
              </Link>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
