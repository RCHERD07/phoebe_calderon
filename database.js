// Connect to Supabase
const supabaseUrl = 'https://aazoxfwgfhbzdlzoezvq.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhem94ZndnZmhiemRsem9lenZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4NTI2ODQsImV4cCI6MjA1MTQyODY4NH0.nvvL7gIBDkdpZQDCB1k7D1z6uJaJ1ClJmM5Si5IscNA'; 
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
