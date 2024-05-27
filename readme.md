### 자주 까먹는 어르신들을 위한 음성 AI 일정관리 서비스
# 내 손주 아르미
프론트엔드만 구현된 상황입니다.

### 프론트엔드
## 파일 구조
htm, css, js의 파일 명은 동일

```plaintext
project-root/
├── index.html                # 로그인 선택 페이지 - git pages 이용을 위해 root로 빼둠
├── public 
│   ├──  guardian_login.html  # 보호자 로그인 페이지
│   ├──  user_login.html      # 시니어 로그인 페이지
├── guardian/                 # 보호자 페이지
│   ├── index.html            # 보호자 모드 메인 페이지 - 등록한 시니어 리스트 확인
│   ├── add.html              # 시니어 추가하기 페이지 (추후 모델 적용 필요)
│   ├── monitor.html          # index에서 선택된 시니어 정보 확인 메인 페이지
│   ├── schedule.html         # 선택된 시니어 일정 확인 페이지
│   ├── health.html           # 선택된 시니어 건강 레포트 확인 페이지
│   ├── setting.html          # 선택된 시니어 아르미 설정
│   ├── history.html          # 선택된 시니어 아르미 기록 확인 페이지
│   ├── history/
│   │   ├── add.html          # 선택된 시니어/아르미 기록/선택된 시니어 스케줄 추가하기 페이지
│   │   ├── sending.html      # 선택된 시니어/아르미 기록/아르미 보내기
├── user/                     # 유저 페이지
│   ├── index.html            # 시니어 모드 메인 페이지 (추후 모델 적용 필요)
│   ├── schedule.html         # 시니어 모드 일정 확인 페이지
├── css/
│   ├── styles.css            # 전역 스타일
│   ├── guardian_login.css    # 로그인 스타일
│   ├── guardian/             # 보호자 모드 html 파일과 동일, 스타일 적용 css
│   │   ├── style.css          
│   │   ├── add.css     
│   │   ├── add_schedule.css          
│   │   ├── monitor.css      
│   │   ├── schedule.css      
│   │   ├── health.css      
│   │   ├── history.css          
│   │   ├── sending.css          
│   │   └── settings.css      
│   └── user/                 # 시니어 모드 스타일
│       ├── style.css        
│       └── schedule.css      
├── js/
│   ├── main.js               # 첫 페이지 모드 선택 스크립트
│   ├── keeper_login.js       # 보호자 로그인 스크립트
│   ├── user_login.js         # 시니어 로그인 스크립트
│   ├── guardian/             # 보호자 스크립트 
│   │   ├── main.js           
│   │   ├── monitor.js        
│   │   ├── add.js      
│   │   ├── health.js          
│   │   ├── schedule.js         
│   │   ├── setting.js       
│   │   ├── history.js       
│   │   ├── add_schedule.js      
│   │   └── sending.js    
│   └── user/                 # 시니어 모드 스크립트 
│       ├── main.js          
│       └── schedule.js       
├── assets/ #필요한 아이콘, 이미지 
└── README.md                 
