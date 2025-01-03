import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Save form data to Supabase
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const { data, error } = await supabase
        .from('signups')
        .insert([{ name, email }]);

    if (error) {
        console.error('Error saving to Supabase:', error);
    } else {
        alert('Signup successful!');
    }
});
