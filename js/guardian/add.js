document.addEventListener('DOMContentLoaded', () => {
    const chatArea = document.getElementById('chatArea');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const footer = document.querySelector('footer');

    const messages = [
        { sender: 'bot', text: '안녕하세요! 저는 아르미에요. 새로운 사용자분의 성함을 입력해주세요.' },
    ];

    function renderMessages() {
        chatArea.innerHTML = '';
        messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', msg.sender);
            messageElement.innerHTML = `<div class="text">${msg.text}</div>`;
            chatArea.appendChild(messageElement);
        });
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            messages.push({ sender: 'user', text: userMessage });
            userInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                switch (messages.length) {
                    case 2:
                        messages.push({ sender: 'bot', text: `${userMessage}님과의 관계가 어떻게 되세요?` });
                        break;
                    case 4:
                        messages.push({ sender: 'bot', text: `${userMessage}의 생년월일을 말씀해주세요.` });
                        break;
                    case 6:
                        messages.push({ sender: 'bot', text: '건강 상태에 대해서 간단하게 말씀해주실 수 있을까요?' });
                        break;
                    case 8:
                        messages.push({ sender: 'bot', text: '그렇군요. 알려주신 정보를 토대로 아르미가 열심히 도와드릴게요!' });
                        messages.push({ sender: 'bot', text: '정상적으로 새로운 시니어의 정보가 등록 되었습니다 :)' });
                        showReturnButton();
                        break;
                }
                renderMessages();
            }, 1000);
        }
    }

    function showReturnButton() {
        const returnButton = document.createElement('button');
        returnButton.textContent = '부모님 리스트로 돌아가기';
        returnButton.classList.add('return-button');
        returnButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        footer.innerHTML = '';
        footer.appendChild(returnButton);
    }

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    renderMessages();
});
