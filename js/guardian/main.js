document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const addUserBtn = document.getElementById('addUserBtn');

    // Sample data for demonstration
    const users = [
        { id: 1, name: '홍길동', role: '아버지', status: '2시간 전 접속', img: '../../asset/papa.png' },
        { id: 2, name: '유정순', role: '어머니', status: '접속중', img: '../../asset/mama.png' },
        { id: 3, name: '홍길수', role: '큰아버지', status: '접속중', img: '../../asset/papa.png' }
    ];

    // Function to render users
    function renderUsers() {
        userList.innerHTML = '';
        users.forEach((user) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>
                    <img src="${user.img}" alt="${user.name}">
                    <div>
                        <div class="name">${user.name}</div>
                        <div class="role">${user.role}</div>
                    </div>
                </span>
                <div class="status">${user.status}</div>
            `;
            li.addEventListener('click', () => {
                window.location.href = `monitor.html`;
                //window.location.href = `monitor-${user.id}.html`; 추후 id 생성되면 변경
            });
            userList.appendChild(li);
        });
    }

    // Initial render
    renderUsers();
});