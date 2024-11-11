function countUp(element, target, increment, duration) {
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = target === 100 ? current + "%" : current.toFixed(1) + "M+";
    }, duration);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            countUp(document.getElementById("organic"), 100, 2, 25);
            countUp(document.getElementById("sales"), 2, 0.1, 50);
            countUp(document.getElementById("customers"), 1.9, 0.1, 50);
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.getElementById("stats"));
