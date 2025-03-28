const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

// Initialisation du client Supabase
const supabaseUrl = process.env.URL_SUPABASE;
const supabaseKey = process.env.ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Les variables d\'environnement SUPABASE_URL et SUPABASE_ANON_KEY sont requises')
}

// Création du client Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase