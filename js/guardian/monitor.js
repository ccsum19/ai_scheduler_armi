document.addEventListener('DOMContentLoaded', () => {
    const homeIcon = document.getElementById('homeIcon');
    const settingsIcon = document.getElementById('settingsIcon');
    
    // Set today's date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = today.toLocaleDateString('ko-KR', options);

    document.getElementById('todayDate1').textContent = formattedDate;
    document.getElementById('todayDate2').textContent = formattedDate;

    homeIcon.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    settingsIcon.addEventListener('click', () => {
        window.location.href = 'setting.html';
    });
});
