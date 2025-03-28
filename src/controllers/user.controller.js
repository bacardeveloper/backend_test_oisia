const supabase = require("../config/database");
const logger = require("../utils/logger");

class UserCtrl {

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
            logger.error("Erreur critique !");
            return res.status(500).json({ message: "Erreur backend" })  
        }
    }

    static async saveUser(req, res) {
        try {

        } catch (err) {

        }
    }

    static async deleteUser(req, res) { }
}

module.exports = UserCtrl;