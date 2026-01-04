export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    role: 'user' | 'admin';
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalPrice: number;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface PasswordResetRequest {
    email: string;
}