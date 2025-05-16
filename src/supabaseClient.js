import { createClient } from "@supabase/supabase-js";

// Cargar variables de entorno
const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY;

// cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
