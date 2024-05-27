document.addEventListener('DOMContentLoaded', () => {
    const cancelButton = document.getElementById('cancelButton');

    cancelButton.addEventListener('click', () => {
        window.location.href = '../monitor.html';
    });

    const scheduleForm = document.getElementById('scheduleForm');
    scheduleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your form submission logic here
        alert('일정이 추가되었습니다!');
        window.location.href = '../monitor.html';
    });
});
