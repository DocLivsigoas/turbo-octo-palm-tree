import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/Cart';

const CartPage: React.FC = () => {
    const { cartItems, totalAmount } = useCart();

    const handleCheckout = () => {
        // Логика оформления заказа
    };

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Итого: {totalAmount} ₽</h2>
                        <button onClick={handleCheckout}>Оформить заказ</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;