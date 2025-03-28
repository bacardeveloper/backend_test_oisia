# Backend Test Oisia

## Description
API REST développée avec Node.js et Express.js pour le test technique Oisia. Cette API gère les utilisateurs avec une architecture moderne et sécurisée.

## Technologies Utilisées
- Node.js
- Express.js
- Supabase (Base de données)
- Helmet (Sécurité)
- CORS (Cross-Origin Resource Sharing)

## Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn
- Compte Supabase

## Installation

1. Cloner le repository
```bash
git clone https://github.com/bacardeveloper/backend_test_oisia.git
cd backend_test_oisia
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
Créer un fichier `.env` à la racine du projet avec les variables suivantes :
```env
URL_SUPABASE="https//test.supabase.com"
ANON_KEY="key"
SECRET_KEY="cle_chifrage_pasword"
NODE_ENV="dev"
```

4. Lancer le serveur
```bash
npm start
```

## Structure du Projet
```
backend_test_oisia/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Custom middlewares
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.js          # Express application
├── .env                # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies
└── README.md          # Project documentation
```


## Licence
Ce projet est la propriété du CARIF OREF Mayotte.
Toute utilisation, modification ou distribution est interdite sans autorisation expresse.


