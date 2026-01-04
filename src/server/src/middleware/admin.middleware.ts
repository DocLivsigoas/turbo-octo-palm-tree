import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Not an admin.' });
        }

        req.user = decoded;
        next();
    });
};

export default adminMiddleware;