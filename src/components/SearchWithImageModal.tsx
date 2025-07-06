import React, { useRef } from 'react';
import './SearchWithImageModal.css';
import { FiX, FiUpload } from 'react-icons/fi';

const materialTags = [
  'Wood', 'Metal', 'Brass', 'Vinyl', 'Polyester', 'Porcelain', 'Ceramic', 'Polyethylene', 'Paper', 'Felt', 'More',
];
const colorTags = [
  '#000', '#fff', '#bfa16c', '#e57373', '#81c784', '#64b5f6', '#ffd600', '#ff9800', '#ba68c8', '#f06292', '#90a4ae',
];
const productMatches = [
  {
    name: 'Expormim',
    desc: 'Senso Lounge Armchair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507066370.jpg',
    finishes: 73,
  },
  {
    name: 'laCividina',
    desc: 'Velour Lounge Armchair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507066085.jpg',
    finishes: 8,
  },
  {
    name: 'Poltrona Frau',
    desc: 'Nirvla Armchair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507069097.jpg',
    finishes: 73,
  },
  {
    name: 'Moroso',
    desc: 'Rich Armchair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507062951.jpg',
    finishes: 73,
  },
  {
    name: 'Arper',
    desc: 'Aston Lounge Chair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507066091.jpg',
    finishes: 73,
  },
  {
    name: 'Artifort',
    desc: 'Bras Highback Chair',
    img: '/images/Fitout-productsandmaterials-furniture-&-decorated-houses/pincase202507064293.jpg',
    finishes: 73,
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const SearchWithImageModal: React.FC<Props> = ({ open, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  if (!open) return null;
  return (
    <div className="swimodal-backdrop">
      <div className="swimodal">
        <button className="swimodal-close" onClick={onClose}><FiX size={24} /></button>
        <div className="swimodal-content">
          <div className="swimodal-left">
            <div className="swimodal-image-upload" onClick={() => fileInputRef.current?.click()}>
              <FiUpload size={32} />
              <span>Drag & drop or <b>browse</b> to upload an image</span>
              <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} />
            </div>
            <button className="swimodal-askai">Ask AI for more details</button>
          </div>
          <div className="swimodal-right">
            <div className="swimodal-tags">
              {materialTags.map(tag => <span className="swimodal-tag" key={tag}>{tag}</span>)}
            </div>
            <div className="swimodal-colors">
              {colorTags.map(color => <span className="swimodal-color" key={color} style={{ background: color }} />)}
            </div>
            <div className="swimodal-products-grid">
              {productMatches.map(prod => (
                <div className="swimodal-product-card" key={prod.name}>
                  <img src={prod.img} alt={prod.name} />
                  <div className="swimodal-product-info">
                    <div className="swimodal-product-title">{prod.name}</div>
                    <div className="swimodal-product-desc">{prod.desc}</div>
                    <div className="swimodal-product-finishes">{prod.finishes} FINISHES</div>
                    <button className="swimodal-product-btn">Sample Finishes</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWithImageModal; 