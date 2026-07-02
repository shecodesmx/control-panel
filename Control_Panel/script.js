const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const counter = document.getElementById('counter');

function updateCounter() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    counter.textContent = checked;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCounter);
});

function resetAll() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateCounter();
}

for(let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    document.body.appendChild(particle);
}
