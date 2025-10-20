function validateContactForm() {
    const form = document.getElementById('contactForm');
    
    // Проверка ФИО
    const fioInput = document.getElementById('fullname');
    if (!validateFIO(fioInput.value)) {
        alert('ФИО должно состоять из трех слов, разделенных пробелами!');
        fioInput.focus();
        return false;
    }
    
    // Проверка телефона
    const phoneInput = document.getElementById('phone');
    if (!validatePhone(phoneInput.value)) {
        alert('Телефон должен начинаться с +7 или +3 и содержать от 9 до 11 цифр!');
        phoneInput.focus();
        return false;
    }
    
    // Проверка email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Пожалуйста, введите корректный email адрес!');
        emailInput.focus();
        return false;
    }
    
    // Проверка пола
    const genderInputs = document.getElementsByName('gender');
    let genderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert('Пожалуйста, выберите пол!');
        return false;
    }
    
    // Проверка возраста
    const ageInput = document.getElementById('age');
    if (!ageInput.value) {
        alert('Пожалуйста, выберите возраст!');
        ageInput.focus();
        return false;
    }
    
    // Проверка сообщения
    const messageInput = document.getElementById('message');
    if (!messageInput.value.trim()) {
        alert('Пожалуйста, введите сообщение!');
        messageInput.focus();
        return false;
    }
    
    return true;
}

// Добавляем обработчик события на форму
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function() {
            return validateContactForm();
        };
    }
});