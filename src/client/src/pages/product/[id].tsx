import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductById } from '../../services/api';
import ProductCard from '../../components/ProductCard';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const data = await getProductById(id);
                    setProduct(data);
                } catch (err) {
                    setError('Ошибка при загрузке товара');
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {product ? (
                <ProductCard product={product} />
            ) : (
                <div>Товар не найден</div>
            )}
        </div>
    );
};

export default ProductPage;