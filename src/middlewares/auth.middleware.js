

class AuthMiddleware {
    static async isAuthenticated(req, res, next) {
        const token = req.headers.authorization || null;
        if (!token) {
            return res.status(401).json({ message: 'token manquant' });
        }
        next();
    }
}

function verifyToken(token) {
    
}

module.exports = AuthMiddleware;
