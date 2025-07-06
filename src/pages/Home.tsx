import React from 'react';
import { LOGO_FULL } from '../assets/brand';
import './Home.css';
import { FiSearch, FiImage } from 'react-icons/fi';
import SearchWithImageModal from '../components/SearchWithImageModal';
import { useState } from 'react';

const categories = [
  {
    title: 'Architectural',
    items: [
      'Ceiling', 'Decking', 'Facade', 'Moulding & Trim', 'Paving & Landscape', 'Stair & Elevator', 'Wall Systems',
    ],
  },
  {
    title: 'Materials',
    items: [
      'Film', 'Flooring', 'Glass', 'Leather', 'Masonry & Stone', 'Metal', 'Paints', 'Paneling', 'Resin', 'Surfaces', 'Textiles', 'Tile', 'Wallcovering',
    ],
  },
  {
    title: 'Furniture Fixtures And Equipment',
    items: [
      'Acoustical', 'Appliances', 'Bathroom', 'Decor & Accessories', 'Furniture', 'Gym & Recreation', 'Hardware', 'Kitchen', 'Lighting', 'Outdoor', 'Window Treatments',
    ],
  },
];

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home-bg">
      <SearchWithImageModal open={showModal} onClose={() => setShowModal(false)} />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover, Search, and Specify Materials</h1>
          <p className="hero-desc">Explore thousands of products, materials, and inspiration for your next project. Powered by Fitout Trade.</p>
          <div className="search-bar">
            <FiSearch color="#EFCF00" size={22} />
            <input className="search-input" placeholder="Search materials, products, brands and more..." />
            <button className="image-upload-btn" title="Search with image" onClick={() => setShowModal(true)}>
              <FiImage size={22} />
            </button>
          </div>
        </div>
        <img src={LOGO_FULL} alt="Fitout Trade Logo" className="hero-logo-bg" />
      </section>
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((cat) => (
            <div className="category-block" key={cat.title}>
              <h2 className="category-title">{cat.title}</h2>
              <ul className="category-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 