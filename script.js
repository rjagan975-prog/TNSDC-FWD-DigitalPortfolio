// Add event listener to the submit button
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    // Validate form data
    if (name && email && query) {
        alert(`Thank you, ${name}! Your query has been submitted.`);
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('query').value = '';
    } else {
        alert('Please fill out all fields.');
    }
});