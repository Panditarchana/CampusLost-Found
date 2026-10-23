const SUPABASE_URL = "https://nkowpybfcsrhhtirapsv.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6Qb5OXrlxjwfLLdZxc8Qmg_wIZHu1Ce";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);