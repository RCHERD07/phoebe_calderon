// Ensure Supabase SDK is loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  // if (typeof supabase === "undefined" || !supabase.createClient){
  //     console.error("Supabase SDK not loaded. Make sure the script is included in index.html.");
  //     return;
  // }

  // Connect to Supabase
  const supabaseUrl = 'https://aazoxfwgfhbzdlzoezvq.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhem94ZndnZmhiemRsem9lenZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4NTI2ODQsImV4cCI6MjA1MTQyODY4NH0.nvvL7gIBDkdpZQDCB1k7D1z6uJaJ1ClJmM5Si5IscNA';

  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client initialized:', supabaseClient);

  // Handle Form Submission0
  document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const plusones = document.getElementById('plusones').value;

    try {
      const { data, error } = await supabaseClient.from('calderon_rsvps').insert([{ name, email, address, plusones }]);

      if (error) {
        console.error('Error inserting data:', error);
        alert('There was an error. Please try again.');
      } else {
        alert('Signup successful!');
        document.getElementById('signupForm').reset();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Unexpected error occurred. Please try again later.');
    }
  });
});
