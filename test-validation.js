// test-validation.js - валидация формы теста

function validateTestForm() {
    const form = document.getElementById('testForm');
    
    // Проверка данных студента
    const nameInput = document.getElementById('studentName');
    if (!validateFIO(nameInput.value)) {
        alert('ФИО должно состоять из трех слов, разделенных пробелами!');
        nameInput.focus();
        return false;
    }
    
    const groupInput = document.getElementById('studentGroup');
    if (!groupInput.value) {
        alert('Пожалуйста, выберите группу!');
        groupInput.focus();
        return false;
    }
    
    // Проверка вопроса 1 (количество слов не менее 30)
    const q1Input = document.getElementById('q1');
    const wordCount = countWords(q1Input.value);
    if (wordCount < 30) {
        alert(`Вопрос 1: количество слов должно быть не менее 30! Сейчас: ${wordCount}`);
        q1Input.focus();
        return false;
    }
    
    // Проверка вопроса 2 (вещественное число с точкой или запятой)
    const q2Input = document.getElementById('q2');
    const q2Value = q2Input.value.trim();
    
    if (!q2Value) {
        alert('Вопрос 2: пожалуйста, введите значение температуры!');
        q2Input.focus();
        return false;
    }
    
    // Проверка что содержит точку или запятую
    if (!q2Value.includes('.') && !q2Value.includes(',')) {
        alert('Вопрос 2: введите вещественное число с точкой или запятой! Например: 22.5 или 18,3');
        q2Input.focus();
        return false;
    }
    
    // Проверка что это число (только цифры, точка или запятая)
    const numberRegex = /^-?\d+[.,]\d+$/;
    if (!numberRegex.test(q2Value)) {
        alert('Вопрос 2: введите корректное число! Можно использовать только цифры, точку или запятую. Например: 22.5 или 18,3');
        q2Input.focus();
        return false;
    }
    
    // Проверка вопроса 3 (установлены не менее двух переключателей)
    const q3Checkboxes = document.getElementsByName('q3');
    let checkedCount = 0;
    for (let i = 0; i < q3Checkboxes.length; i++) {
        if (q3Checkboxes[i].checked) {
            checkedCount++;
        }
    }
    if (checkedCount < 2) {
        alert('Вопрос 3: необходимо выбрать не менее двух вариантов!');
        return false;
    }
    
    return true;
}

// Добавляем обработчик события на форму
document.addEventListener('DOMContentLoaded', function() {
    const testForm = document.getElementById('testForm');
    if (testForm) {
        testForm.onsubmit = function() {
            return validateTestForm();
        };
    }
});