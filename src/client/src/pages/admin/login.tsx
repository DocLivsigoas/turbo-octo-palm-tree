import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/api';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await login(email, password);
            history.push('/admin/dashboard');
        } catch (err) {
            setError('Неверный логин или пароль');
        }
    };

    return (
        <div className="admin-login">
            <h2>Вход в админ-панель</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Электронная почта:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default AdminLogin;