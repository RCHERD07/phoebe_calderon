// Connect to Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your project URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle Form Submission
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const { data, error } = await supabase
            .from('signups') // Table name
            .insert([{ name, email }]); // Insert form data

        if (error) {
            console.error('Error inserting data:', error);
            alert('There was an error. Please try again.');
        } else {
            alert('Signup successful!');
            document.getElementById('signupForm').reset(); // Clear the form
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('Unexpected error occurred. Please try again later.');
    }
});
