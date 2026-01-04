import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
    const { items, total, removeItem } = useCart();

    return (
        <div className="cart">
            <h1>Корзина</h1>
            {items.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <p>Цена: {item.price} ₽</p>
                                <button onClick={() => removeItem(item.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Итого: {total} ₽</h2>
                    <button>Оформить заказ</button>
                </>
            )}
        </div>
    );
};

export default Cart;