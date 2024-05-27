document.addEventListener('DOMContentLoaded', () => {
    const backIcon = document.getElementById('backIcon');
    const currentDateElement = document.getElementById('currentDate');

    // Set today's date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ko-KR', options);
    currentDateElement.textContent = formattedDate;

    backIcon.addEventListener('click', () => {
        window.location.href = 'monitor.html';
    });
});
