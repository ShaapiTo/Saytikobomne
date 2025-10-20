// Функция для проверки заполненности формы
function validateForm(form) {
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        
        // Пропускаем кнопки и скрытые поля
        if (element.type === 'submit' || element.type === 'reset' || element.type === 'button' || element.type === 'hidden') {
            continue;
        }
        
        // Проверяем обязательные поля
        if (element.hasAttribute('required') && !element.value.trim()) {
            alert('Пожалуйста, заполните все обязательные поля!');
            element.focus();
            return false;
        }
    }
    return true;
}

// Функция для проверки ФИО (3 слова, разделенные одним пробелом)
function validateFIO(fio) {
    const words = fio.trim().split(/\s+/);
    return words.length === 3 && words.every(word => word.length > 0);
}

// Функция для проверки телефона
function validatePhone(phone) {
    const phoneRegex = /^(\+7|\+3)\d{9,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Функция для подсчета слов в строке
function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Функция для проверки целого числа
function isInteger(value) {
    return /^-?\d+$/.test(value);
}

// Функция для проверки вещественного числа
function isFloat(value) {
    if (!value || typeof value !== 'string') return false;
    
    // Убираем пробелы и заменяем запятую на точку для корректного парсинга
    const cleanValue = value.trim().replace(',', '.');
    
    // Проверяем формат вещественного числа
    const floatRegex = /^-?\d*\.?\d+$/;
    if (!floatRegex.test(cleanValue)) {
        return false;
    }
    
    // Пробуем преобразовать в число
    const num = parseFloat(cleanValue);
    return !isNaN(num) && isFinite(num);
}

// Функция для проверки символьного значения (без цифр)
function isAlpha(value) {
    return /^[a-zA-Zа-яА-Я\s]+$/.test(value);
}

// Функция создания списка с переменным числом аргументов
function createList(type, ...items) {
    let html = `<${type}L>`;
    for (let i = 0; i < items.length; i++) {
        html += `<li>${items[i]}</li>`;
    }
    html += `</${type}L>`;
    return html;
}

// Функция для отображения фотоальбома из массивов
function displayPhotoAlbum() {
    const fotos = [
        'photos/photo1.jpg', 'photos/photo2.jpg', 'photos/photo3.jpg',
        'photos/photo4.jpg', 'photos/photo5.jpg', 'photos/photo6.jpg',
        'photos/photo7.jpg', 'photos/photo8.jpg', 'photos/photo9.jpg',
        'photos/photo10.jpg', 'photos/photo11.jpg', 'photos/photo12.jpg',
        'photos/photo13.jpg', 'photos/photo14.jpg', 'photos/photo15.jpg',
        'photos/photo16.jpg'
    ];
    
    const titles = [
        'Астарион', 'Гейл', 'Лаэзель', 'Уилл', 'Шедоухарт', 'Минтара',
        'Карлах', 'Хальсин', 'Мизора', 'Касадор', 'Джахейра', 'Рафаил',
        'Император', 'Иссохший', 'Орин', 'Изобель'
    ];
    
    let html = '<div class="photos-grid">';
    for (let i = 0; i < fotos.length; i++) {
        html += `
            <div class="photo-item">
                <img src="${fotos[i]}" alt="${titles[i]}" title="${titles[i]}">
                <p class="photo-title">${titles[i]}</p>
            </div>
        `;
    }
    html += '</div>';
    return html;
}