document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulating sending data to a server
    const data = { name, email };

    try {
        // Assuming you have a backend endpoint to handle the data
        const response = await fetch('https://your-backend-server.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('signupForm').reset();
        } else {
            alert('Failed to sign up. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
