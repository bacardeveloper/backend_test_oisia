const express = require('express');
const router = express.Router();
const { checkAuthorization } = require('../middlewares/authMiddleware');

// Route publique (sans authentification)
router.get('/public', (req, res) => {
    res.json({ message: 'Route publique accessible à tous' });
});

// Route protégée (avec authentification)
router.get('/protected', checkAuthorization, (req, res) => {
    // req.token est disponible ici
    res.json({ 
        message: 'Route protégée',
        token: req.token 
    });
});

module.exports = router; 