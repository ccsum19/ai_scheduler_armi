document.addEventListener('DOMContentLoaded', function() {
    const userLoginBtn = document.getElementById('userLogin');
    const guardianLoginBtn = document.getElementById('guardianLogin');

    userLoginBtn.addEventListener('click', function() {
        window.location.href = 'user_login.html';
    });

    guardianLoginBtn.addEventListener('click', function() {
        window.location.href = 'guardian_login.html';
    });
});
