import React from 'react';

interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    price: number;
    onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(id)} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;