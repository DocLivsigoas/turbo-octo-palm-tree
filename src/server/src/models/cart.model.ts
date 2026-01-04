export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalPrice: number;
}

export class CartModel {
    private cart: Cart;

    constructor() {
        this.cart = { items: [], totalPrice: 0 };
    }

    addItem(productId: string, quantity: number): void {
        const existingItem = this.cart.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.items.push({ productId, quantity });
        }
        this.updateTotalPrice();
    }

    removeItem(productId: string): void {
        this.cart.items = this.cart.items.filter(item => item.productId !== productId);
        this.updateTotalPrice();
    }

    updateTotalPrice(): void {
        // Assuming a function getProductPrice exists to fetch product price
        this.cart.totalPrice = this.cart.items.reduce((total, item) => {
            const productPrice = this.getProductPrice(item.productId);
            return total + (productPrice * item.quantity);
        }, 0);
    }

    getProductPrice(productId: string): number {
        // Placeholder for actual product price retrieval logic
        return 100; // Example price
    }

    getCart(): Cart {
        return this.cart;
    }

    clearCart(): void {
        this.cart = { items: [], totalPrice: 0 };
    }
}