let targetDate = new Date('June 30, 2025 23:59:59').getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    
    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = '<div style="font-size: 2rem;">EVENT STARTED!</div>';
    }
}, 1000);

document.getElementById('set-btn').addEventListener('click', function() {
    const dateInput = document.getElementById('date-input').value;
    if (dateInput) {
        targetDate = new Date(dateInput).getTime();
        document.getElementById('target-date').textContent = new Date(dateInput).toLocaleString();
    }
});