document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
