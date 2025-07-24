import { createClient } from '@supabase/supabase-js'

const URL = 'https://yslsahitwxdoufueyytv.supabase.co';
const API_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(URL, API_KEY)