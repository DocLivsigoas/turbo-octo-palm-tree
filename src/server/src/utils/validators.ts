export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Минимальная длина пароля
};

export const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Должен содержать от 3 до 20 символов
    return usernameRegex.test(username);
};

export const validateProductData = (data: { name: string; price: number; description: string }): boolean => {
    return (
        data.name.length > 0 &&
        data.price > 0 &&
        data.description.length > 0
    );
};