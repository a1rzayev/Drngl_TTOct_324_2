// Мобильная навигация
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Переключение меню
    nav.classList.toggle('active');
    
    // Анимация пунктов меню
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Анимация кнопки-бургера
    burger.classList.toggle('toggle');
});

// Закрытие мобильного меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// Функционал страницы постов
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card');

// Поиск по постам при вводе текста
if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
}

// Обработка кликов по кнопкам фильтрации
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');
        filterPosts();
    });
});

// Функция фильтрации постов по поиску и категориям
function filterPosts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

    postCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        const category = card.dataset.category;
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());

        // Проверяем соответствие поисковому запросу
        const matchesSearch = searchTerm === '' || 
            title.includes(searchTerm) || 
            content.includes(searchTerm) ||
            tags.some(tag => tag.includes(searchTerm));

        // Проверяем соответствие выбранной категории
        const matchesCategory = activeCategory === 'all' || category === activeCategory;

        // Показываем или скрываем карточку поста
        card.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
    });
}

// Пагинация
const paginationButtons = document.querySelectorAll('.pagination-btn');
paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('next')) {
            // Обновляем активную страницу
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Плавная прокрутка вверх при смене страницы
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Обработка формы обратной связи
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Собираем данные формы
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Имитация отправки формы
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Блокируем кнопку и меняем текст
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
        
        // Имитация задержки отправки
        setTimeout(() => {
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1500);
    });
}

// Обработка формы подписки на новости
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.textContent;
        
        // Блокируем кнопку и меняем текст
        submitBtn.disabled = true;
        submitBtn.textContent = 'Подписка...';
        
        // Имитация задержки подписки
        setTimeout(() => {
            alert(`Спасибо за подписку с адреса ${email}! Вы будете получать наши новости.`);
            this.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1500);
    });
}

// Обработка кнопок "Читать далее"
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.getAttribute('href')) {
            e.preventDefault();
            const postCard = this.closest('.post-card');
            const postTitle = postCard.querySelector('h3').textContent;
            alert(`Вы нажали "Читать далее" для статьи: ${postTitle}\n\nЭто демо-версия блога, поэтому полный контент пока недоступен.`);
        }
    });
});

// Настройки для анимации появления элементов
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Создаем наблюдатель за появлением элементов
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Добавляем анимацию появления для всех элементов
document.querySelectorAll('.post-card, .team-member, .value-card, .info-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
});

// Добавляем анимацию загрузки для изображений
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease-out';
    });
});

// Обновляем год в футере
document.querySelector('footer p').textContent = 
    `© ${new Date().getFullYear()} LEGO Adventures Blog. Все права защищены.`;

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Закрываем мобильное меню при клике на ссылку
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    burger.classList.remove('toggle');
                }
            }
        }
    });
}); 