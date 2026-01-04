import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts'; // Предполагается, что есть хук для получения продуктов

const HomePage: React.FC = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div>
            <Header />
            <h1>Welcome to Our Store</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;