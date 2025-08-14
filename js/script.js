// Функція
const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(elem => { //Перебираємо фото
        if(elem.isIntersecting){
            // Налаштовуємо фото. Можна покращити змінювання стилів
            elem.target.src = elem.target.dataset.src;
            elem.target.style.transform = "rotate(0deg)"
            observer.unobserve(elem.target);
        }
    });
});
// Запускаємо функцію
document.querySelectorAll("img").forEach(img => imgObserver.observe(img)); 