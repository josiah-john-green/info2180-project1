document.addEventListener('DOMContentLoaded', function () 
{

    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function (event) 
    {
    
        event.preventDefault(); // Prevent the default form submission behavior

        const enteredEmail = emailInput.value.trim();

        if (enteredEmail === '') 
        {
        
            messageDiv.textContent = 'Please enter a valid email address.';
        
        } 
        else 
        {
        
            messageDiv.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
        
        }

        // Optionally, you can clear the input field after submission
        emailInput.value = '';
    
    });

});