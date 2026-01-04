import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Админ-панель</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/products">Управление товарами</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Управление пользователями</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Управление заказами</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;