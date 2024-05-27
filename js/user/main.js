document.addEventListener('DOMContentLoaded', () => {
    const callIcon = document.getElementById('callIcon');
    const prompt = document.getElementById('prompt').querySelector('p');
    const counter = document.getElementById('counter');
    const characterImg = document.querySelector('.character img');

    
    let callStarted = false;
    let timer = 0;
    let interval;


    callIcon.addEventListener('click', () => {
        if (!callStarted) {
            callStarted = true;
            callIcon.src = '../../asset/call_end.png'; // 빨간색 아이콘으로 변경
            scheduleButton.style.display = 'none';
            interval = setInterval(() => {
                timer++;
                counter.textContent = `00:${timer}`;
                if (timer === 5) {
                    prompt.textContent = '오늘 기분은 어때요?';
                    characterImg.src = '../../asset/armi_mid.png'; // 소녀 아이콘 변경
                } else if (timer === 15) {
                    prompt.textContent = '통화가 완료되었습니다!';
                    characterImg.src = '../../asset/armi_end.png'; // 다시 초록색 아이콘으로 변경
                    callIcon.src = '../../asset/armi_call.png'; 
                    scheduleButton.style.display = 'block'; // 일정 확인하기 버튼 다시 표시
                    clearInterval(interval);
                }
            }, 1000);
        }
    });
});
