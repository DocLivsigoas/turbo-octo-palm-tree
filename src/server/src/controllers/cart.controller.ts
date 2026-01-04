import { Request, Response } from 'express';
import Cart from '../models/cart.model';

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { userId, productId, quantity } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $addToSet: { items: { productId, quantity } } },
            { new: true, upsert: true }
        );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};

export const removeFromCart = async (req: Request, res: Response) => {
    try {
        const { userId, productId } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { items: { productId } } },
            { new: true }
        );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error removing from cart', error });
    }
};

export const getCart = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
};