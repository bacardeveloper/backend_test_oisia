const supabase = require("../config/database");
const logger = require("../utils/logger");

class UserCtrl {

<<<<<<< HEAD
    static async getUser(req, res) {
        logger.warn(req.body);
        
        try {
            if (!email || email.trim() === '')
                return res.status(401).json({ message: 'Email est requis' });
            const email = req.body.email;
            const { data, error } = supabase.from("user_oisia").select("email").eq("email", email);

            if (email) {
                return res.status(500).json({ message: "Erreur serveur" })
            }
            if (!data) {
                return res.status(404).json({ message: "l'utilisateur n'existe pas" })
            }
        } catch (err) {
            logger.error("Erreur critique : ");
            return res.status(500).json({ message: "Erreur backend" })  
        }
    }

=======
>>>>>>> dev
    static async saveUser(req, res) {
        try {
            const { status, message } = await findUserByEmail(req.body.email);
            if (status) {
                return res.status(401).json({ message: message });
            }

            const { statusPass, messagePass } = verifyPassword(req.body.password);
            if (statusPass) {
                return res.status(400).json({ message: messagePass });
            }

            

            res.status(201).json({ message: "Utilisateur sauvegardé avec succès." });

        } catch (err) {
            logger.error('Erreur lors de la sauvegarde de l\'utilisateur', err);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    }

    static async deleteUser(req, res) { }
}

async function findUserByEmail(email) {
    try {
        if (!email || email.trim() === '') {
            return { status: true, message: 'L\'email est requis' };
        }

        const { data, error } = await supabase
            .from("user_oisia")
            .select("email")
            .eq("email", email);

        if (error) {
            return { status: true, message: "Erreur serveur lors de la récupération des données" };
        }

        if (!data || data.length === 0) {
            return { status: true, message: "L'utilisateur n'existe pas" };
        }

        // L'utilisateur a été trouvé, renvoie un message de succès
        return { status: false, message: "Utilisateur trouvé" };
    } catch (err) {
        logger.error('Erreur lors de la recherche de l\'utilisateur', err);
        return { status: true, message: "Erreur backend lors de la recherche" };
    }
}

function verifyPassword(passwordTest){
    if (!passwordTest || passwordTest.trim() === '') {
        return { statusPass: true, messagePass: "Le mot de passe est requis" };
    }

    if (passwordTest.length < 6) {
        return { statusPass: true, messagePass: "Le mot de passe doit comporter au moins 6 caractères" };
    }

    return { statusPass: false, messagePass: "Mot de passe validé" };
}

module.exports = UserCtrl;