const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET ; // Use a default secret key for local testing

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message : 'No token provided'});
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message : 'Invalid token'});
    }
}