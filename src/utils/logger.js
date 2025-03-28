const pino = require('pino');

// Configuration de Pino
const logger = pino({
    level: "info", // Niveau de log : debug, info, warn, error
    transport: {
        target: "pino-pretty", // Permet un affichage formaté en dev
        options: {
            colorize: true, destination: './logs/app.log',
            mkdir: true
        },
    },
});

module.exports = logger;