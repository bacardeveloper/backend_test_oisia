const logger = require('../utils/logger');

// Custom API Error class for standardized error handling
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

/* Usage example:
const error = new ApiError(404, "Resource not found");
console.log(error.statusCode);
*/

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
    logger.error(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'dev') {
        // Development mode: send detailed error information
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            console.error('ERROR 💥', err);
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred'
            });
        }
    }
};

module.exports = {
    ApiError,
    errorHandler
}; 