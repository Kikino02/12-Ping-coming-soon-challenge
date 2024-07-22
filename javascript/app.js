const emailInput = document.querySelector('.email__input');
const errorMsg = document.querySelector('.error__msg')
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
        errorMsg.textContent = `You didn't write anything! Please enter an email!`;
        errorMsg.classList.remove('success');
        errorMsg.classList.add('error-text');
        emailInput.classList.add('error');
    } else if (!isValidEmail) {
        errorMsg.textContent = 'Please enter a valid email!';
        errorMsg.classList.remove('success');
        errorMsg.classList.add('error-text');
        emailInput.classList.add('error');
    } else {
        errorMsg.textContent = 'Email sent! Thank you :)!';
        errorMsg.classList.remove('error');
        errorMsg.classList.add('success');
        emailInput.classList.remove('error');
        emailInput.value = '';
    }
})