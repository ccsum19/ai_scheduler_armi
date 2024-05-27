document.addEventListener('DOMContentLoaded', function() {
    const userLoginBtn = document.getElementById('userLogin');
    const guardianLoginBtn = document.getElementById('guardianLogin');

    userLoginBtn.addEventListener('click', function() {
        window.location.href = 'public/user_login.html';
    });

    guardianLoginBtn.addEventListener('click', function() {
        window.location.href = 'public/guardian_login.html';
    });
});
