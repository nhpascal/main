// Data Definitions
const encyclopediaData = [
    {
        id: "membership-criteria",
        category: "조합·조합원 기본",
        title: "🌾 이동농협 조합원 가입·탈퇴·승계 안내",
        situation: "조합원 가입 자격, 서류, 절차 등이 궁금할 때",
        summaryOneLine: "2025년 신년호 소식지 기준 최신 가입·탈퇴·승계 정보를 확인하세요.",
        customHtml: `
            <div class="desktop-view">
                <div class="tab-container">
                    <button class="tab-btn active" onclick="app.switchTab('tab-join', this)">가입자격</button>
                    <button class="tab-btn" onclick="app.switchTab('tab-docs', this)">구비서류</button>
                    <button class="tab-btn" onclick="app.switchTab('tab-succession', this)">승계/상속</button>
                    <button class="tab-btn" onclick="app.switchTab('tab-transfer', this)">양수도</button>
                    <button class="tab-btn" onclick="app.switchTab('tab-withdraw', this)">탈퇴</button>
                    <button class="tab-btn" onclick="app.switchTab('tab-faq', this)">FAQ/실태조사</button>
                </div>
                
                <div id="tab-join" class="tab-content active">
                    <h4>1. 조합원 가입 자격</h4>
                    <p>다음 조건 중 하나 이상을 충족해야 합니다. (2025 신년호 소식지 기준)</p>
                    <div class="info-box">
                        <h5>✔ 기본 자격</h5>
                        <ul>
                            <li>이동읍 관내에 주소를 두고 거주하는 자</li>
                            <li>「농업·농촌기본법」 제16조 및 농업경영체 등록 등에 따라 농업에 종사하는 자 또는 농촌에서 직접 농업경영을 하는 자</li>
                            <li>아래의 농업인 재배·사육 기준 또는 축산법상 가축·곤충 사육 기준을 충족하는 자</li>
                        </ul>
                        <h5>✔ 타 지역 조합 중복 가입 금지</h5>
                        <ul>
                            <li>동일인이 2개 이상의 다른 지역농협 조합원으로 중복 가입하는 것은 금지</li>
                        </ul>
                    </div>

                    <h4>2. 농업인 재배·사육 기준 (소식지 27p)</h4>
                    <div class="responsive-table">
                        <table class="data-table">
                            <thead>
                                <tr><th>구분</th><th>가축의 종류</th><th>가입 기준</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>대가축</td><td>소, 말, 노새, 당나귀</td><td>2두 이상</td></tr>
                                <tr><td>중가축</td><td>돼지(젖 먹는 새끼 돼지는 제외), 염소, 면양, 사슴, 개</td><td>5두 이상 (개는 20두 이상)</td></tr>
                                <tr><td>소가축</td><td>토끼</td><td>50마리 이상</td></tr>
                                <tr><td>가금</td><td>닭, 오리, 칠면조, 거위</td><td>100마리 이상</td></tr>
                                <tr><td>기타</td><td>꿀벌</td><td>10군 이상</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>🌱 작물 재배 기준</strong></p>
                    <ul>
                        <li>330㎡(약 100평) 이상 농지에서 농작물 재배</li>
                        <li>또는 660㎡(약 200평) 이상의 농지에서 채소·과수·화훼 등을 재배하는 경우</li>
                    </ul>

                    <h4>3. 축산법상 가축 · 곤충 사육 기준 (소식지 27p)</h4>
                    <p>「축산법」 제2조제1호에 규정된 가축으로서 농림축산식품부장관이 정하여 고시한 기준 이상을 사육하는 경우에도 조합원 자격이 인정됩니다.</p>
                    <div class="responsive-table">
                        <table class="data-table">
                            <thead>
                                <tr><th>구분</th><th>종류</th><th>사육 기준 (마리 이상)</th></tr>
                            </thead>
                            <tbody>
                                <tr><td rowspan="4">가축<br>(포유류·조류)</td><td>오소리</td><td>3마리 이상</td></tr>
                                <tr><td>타조</td><td>3마리 이상</td></tr>
                                <tr><td>메추리</td><td>300마리 이상</td></tr>
                                <tr><td>꿩</td><td>30마리 이상</td></tr>
                                <tr><td rowspan="5">곤충</td><td>흰점박이꽃무지</td><td>1,000마리 이상</td></tr>
                                <tr><td>장수풍뎅이</td><td>500마리 이상</td></tr>
                                <tr><td>갈색거저리</td><td>60,000마리 이상</td></tr>
                                <tr><td>넓적사슴벌레</td><td>500마리 이상</td></tr>
                                <tr><td>톱사슴벌레</td><td>500마리 이상</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="tab-docs" class="tab-content">
                    <h4>4. 조합원 신규 가입 구비서류</h4>
                    <ul class="check-list">
                        <li>조합원 가입신청서</li>
                        <li>영농·축산 증빙자료 (농업경영체 등록증, 직불금 지급명세 등)</li>
                        <li>농지 관련 서류(등기부등본, 임대차계약서 등)</li>
                        <li>축산·곤충 사육 확인이 가능한 자료</li>
                        <li>주민등록등본·초본</li>
                        <li>그 밖에 조합에서 추가로 요구하는 서류</li>
                    </ul>
                </div>

                <div id="tab-succession" class="tab-content">
                    <h4>5. 조합원 상속(승계) 가입</h4>
                    <div class="info-box">
                        <h5>승계 대상</h5>
                        <p>피상속인(사망 조합원)의 배우자·직계존비속이 승계 가능하며, 조합의 자격 심사를 거쳐 승계 승인됩니다.</p>
                    </div>
                    <h5>필요 서류(예시)</h5>
                    <ul>
                        <li>상속인 관계 증빙(가족관계증명서 등)</li>
                        <li>사망진단서 또는 제적등본</li>
                        <li>기존 조합원 출자 및 이용 내역 확인 서류</li>
                    </ul>
                </div>

                <div id="tab-transfer" class="tab-content">
                    <h4>6. 조합원 자격의 양수도</h4>
                    <div class="info-box">
                        <h5>✔ 가능 기준</h5>
                        <ul>
                            <li>실제로 영농 또는 축산을 계속할 실질 경영자에게 양수도 가능</li>
                            <li>양수도 후에도 제2·3장의 재배·사육 기준을 충족해야 함</li>
                        </ul>
                    </div>
                    <h5>필요 서류(예시)</h5>
                    <ul>
                        <li>조합원 자격 양수도 신청서</li>
                        <li>양도인·양수인 신분증 사본</li>
                        <li>영농·축산 증빙자료</li>
                        <li>기타 조합이 요구하는 서류</li>
                    </ul>
                </div>

                <div id="tab-withdraw" class="tab-content">
                    <h4>7. 조합원 탈퇴 및 지분 환불</h4>
                    <h5>7-1. 탈퇴 사유(예시)</h5>
                    <ul>
                        <li>1년 이상 조합 사업 이용 실적이 없는 경우</li>
                        <li>2년 이상 예금·대출 등 금융거래 실적이 없는 경우</li>
                        <li>관내에서 타 지역으로 이주하거나 영농·축산을 완전히 중단한 경우</li>
                        <li>가입 당시 제출 서류가 허위로 판명된 경우 등</li>
                    </ul>
                    <h5>7-2. 탈퇴조합원 지분출자금 환불</h5>
                    <p>탈퇴 승인 후, 정기총회 의결을 거쳐 출자금·이용고배당금·사업준비금을 환불합니다.</p>
                    <p class="note">* 채무·연체가 있을 경우 정산 후 남은 금액을 환불</p>
                </div>

                <div id="tab-faq" class="tab-content">
                    <h4>8. 조합원 실태조사</h4>
                    <p>정기적인 조합원 실태조사를 통해 거주 여부, 영농·축산 여부, 이용실적 등을 확인합니다.</p>
                    <p>조사 결과에 따라 조합원 자격 유지 여부를 검토할 수 있습니다.</p>
                </div>
            </div>

            <div class="mobile-view mobile-accordion">
                <details open>
                    <summary>1. 조합원 가입 자격 & 기준</summary>
                    <div class="accordion-content">
                        <p><strong>기본 자격</strong><br>이동읍 관내 거주 및 농업 종사자</p>
                        <p><strong>가축 사육 기준</strong></p>
                        <div class="responsive-table">
                            <table class="data-table">
                                <tr><th>구분</th><th>기준</th></tr>
                                <tr><td>대가축</td><td>2두 이상</td></tr>
                                <tr><td>중가축</td><td>5두 이상</td></tr>
                                <tr><td>가금</td><td>100수 이상</td></tr>
                                <tr><td>기타</td><td>10군 이상</td></tr>
                            </table>
                        </div>
                        <p><strong>곤충 사육 기준</strong></p>
                        <div class="responsive-table">
                            <table class="data-table">
                                <tr><th>종류</th><th>기준</th></tr>
                                <tr><td>흰점박이꽃무지</td><td>1,000마리</td></tr>
                                <tr><td>장수풍뎅이</td><td>500마리</td></tr>
                                <tr><td>갈색거저리</td><td>60,000마리</td></tr>
                            </table>
                        </div>
                    </div>
                </details>
                <details>
                    <summary>2. 구비서류</summary>
                    <div class="accordion-content">
                        <ul>
                            <li>가입신청서, 영농·축산 증빙자료</li>
                            <li>농지 서류, 주민등록등본·초본 등</li>
                        </ul>
                    </div>
                </details>
                <details>
                    <summary>3. 승계 및 양수도</summary>
                    <div class="accordion-content">
                        <p><strong>승계</strong>: 사망 조합원의 배우자/직계존비속 승계 가능.</p>
                        <p><strong>양수도</strong>: 실질 경영자에게 양수도 가능 (기준 충족 필수).</p>
                    </div>
                </details>
                <details>
                    <summary>4. 탈퇴 및 환불</summary>
                    <div class="accordion-content">
                        <p><strong>탈퇴</strong>: 1년 미이용, 2년 미거래, 이주/중단 시.</p>
                        <p><strong>환불</strong>: 총회 의결 후 출자금 등 환불.</p>
                    </div>
                </details>
                <details>
                    <summary>5. 실태조사</summary>
                    <div class="accordion-content">
                        <p>정기 실태조사를 통해 자격 유지 여부를 확인합니다.</p>
                    </div>
                </details>
            </div>
        `
    },
    {
        id: "membership-benefits",
        category: "조합·조합원 기본",
        title: "조합원이 되면 뭐가 좋은가요?",
        situation: "조합원 가입을 고민하는 분에게 전체 그림을 보여줄 때",
        summaryOneLine: "금융 혜택, 이용고·배당, 복지·교육, 지역공동체 참여를 묶어서 이해하면 쉽습니다.",
        description: [
            "조합원은 예금·대출 등 금융 거래에서 우대 혜택을 받을 수 있는 경우가 있습니다.",
            "사업 이용실적에 따라 이용고·출자배당 등 배당을 받을 수 있습니다(법과 정관에 따름).",
            "조합원 건강검진, 영농자재 공동구매, 교육·견학 등 복지·지원 프로그램에 참여할 수 있습니다.",
            "총회·대의원 활동 등을 통해 우리 조합의 의사결정 과정에 직접 참여할 수 있습니다."
        ],
        checklist: [
            "우리 조합에서 조합원 전용으로 운영하는 혜택이 무엇인지 정리되어 있는가?",
            "조합원과 일반 고객의 차이를 한눈에 보여주는 표가 있는가?",
            "매년 변동되는 혜택(예: 건강검진, 배당 등)을 어떻게 업데이트할지 계획이 있는가?"
        ],
        tip: "혜택을 금융, 배당, 복지, 공동체 참여의 네 가지 묶음으로 설명하면 조합원이 이해하기 쉽습니다."
    },
    // Dummy Data
    {
        id: "gap-certification",
        category: "농업·재배 기초",
        title: "GAP 인증, 어떻게 준비하나요?",
        situation: "안전한 농산물 생산 인증에 관심 있는 분",
        summaryOneLine: "농산물 우수관리(GAP) 인증은 생산부터 판매까지 안전성을 관리하는 제도입니다.",
        description: [
            "토양, 수질 등 농업 환경과 농약, 중금속 등 위해요소를 관리해야 합니다.",
            "기본 교육 이수가 필수이며, 인증기관에 신청서를 제출해야 합니다."
        ],
        checklist: [
            "기본 교육을 이수하였는가?",
            "영농일지를 꼼꼼히 작성하고 있는가?",
            "위해요소 관리 계획이 수립되었는가?"
        ],
        tip: "농업기술센터에서 진행하는 GAP 기본 교육 일정을 미리 확인하세요."
    },
    {
        id: "farm-machinery-subsidy",
        category: "보조금·지원제도",
        title: "농기계 보조금 지원 개요",
        situation: "고가의 농기계 구입 부담을 줄이고 싶은 분",
        summaryOneLine: "지자체와 농협에서 지원하는 다양한 농기계 보조 사업을 확인하세요.",
        description: [
            "매년 초 지자체별로 농기계 지원 사업 공고가 나옵니다.",
            "기종에 따라 보조 비율이 다르며, 선착순 또는 심사로 선정됩니다."
        ],
        checklist: [
            "올해 지원 대상 기종인지 확인했는가?",
            "신청 기간을 놓치지 않았는가?",
            "자부담 능력이 충분한가?"
        ],
        tip: "인기 있는 기종은 조기에 마감될 수 있으니 공고가 나면 즉시 신청하세요."
    },
    {
        id: "land-ledger",
        category: "생활·행정 정보",
        title: "농지대장 vs 토지대장 차이점",
        situation: "행정 서류가 헷갈리는 분",
        summaryOneLine: "농지대장은 '경작 현황', 토지대장은 '땅의 물리적 현황'이 중심입니다.",
        description: [
            "농지대장(구 농지원부)은 실제 농사를 짓고 있는지 기록하는 장부입니다.",
            "토지대장은 땅의 면적, 지목, 소유자 등 기본 정보를 담고 있습니다."
        ],
        checklist: [
            "임대차 계약이 변경되면 농지대장을 변경 신고했는가?",
            "실제 경작 현황과 공부상 기록이 일치하는가?"
        ],
        tip: "농업경영체 등록과 농지대장은 별개이므로 각각 관리해야 합니다."
    }
];

const recipeData = [
    {
        id: "rice-butter-rice",
        item: "백옥쌀",
        title: "백옥쌀 달걀간장 버터밥",
        summaryOneLine: "백옥쌀의 윤기와 식감을 가장 쉽게 느끼는 방법",
        difficulty: "초보 가능 / 10분",
        ingredients: [
            "백옥쌀 밥 1공기",
            "달걀 1개",
            "간장 1큰술",
            "버터 1조각 또는 참기름 1큰술",
            "김가루·파 조금(선택)"
        ],
        steps: [
            "뜨거운 백옥쌀 밥을 그릇에 담는다.",
            "가운데 홈을 파고 달걀을 깨 넣는다.",
            "간장 1큰술과 버터를 올린다(또는 참기름).",
            "골고루 비벼 윤기가 돌 때까지 섞는다.",
            "김가루와 파를 올려 마무리한다."
        ],
        tip: "백옥쌀은 찰기와 윤기가 좋아 간장·버터만으로도 충분히 고소한 맛이 납니다.",
        localStory: "이동저수지 물로 키운 백옥쌀은 차가운 날에도 밥알이 탱글합니다."
    },
    {
        id: "sweet-potato-airfryer",
        item: "고구마",
        title: "묵리 고구마 에어프라이어 꿀고구마",
        summaryOneLine: "묵리고구마의 단맛을 살리는 가장 쉬운 방법",
        difficulty: "초보 가능 / 30~40분",
        ingredients: [
            "중간 크기 고구마 2~3개",
            "식용유 약간"
        ],
        steps: [
            "고구마를 깨끗이 씻고 물기를 닦는다.",
            "껍질에 포크로 구멍을 몇 군데 낸다.",
            "에어프라이어에서 180℃, 20분 굽는다.",
            "뒤집어서 10~15분 더 굽는다.",
            "반으로 갈라 속이 촉촉해지면 먹는다."
        ],
        tip: "너무 높은 온도보다는 중간 온도에서 조금 더 길게 구우면 속이 덜 마릅니다.",
        localStory: "묵리에서 자란 고구마는 껍질째 구워 먹어도 달고 부드럽습니다."
    },
    {
        id: "cabbage-geotjeori",
        item: "배추",
        title: "배추 겉절이 10분 버전",
        summaryOneLine: "배추 반 통으로 식탁 한 끼가 달라지는 기본 반찬",
        difficulty: "초보 가능 / 10~15분",
        ingredients: [
            "배추 1/2통",
            "고춧가루 2큰술, 다진 마늘 1큰술, 설탕 1큰술, 식초 1큰술, 액젓 또는 국간장 1큰술",
            "소금 약간, 참기름·깨 조금"
        ],
        steps: [
            "배추를 먹기 좋은 크기로 썰고 소금을 약간 뿌려 5분 정도 둔다.",
            "물기를 가볍게 털어낸다.",
            "양념 재료를 섞어 양념장을 만든다.",
            "배추를 넣고 살살 버무린다.",
            "참기름과 깨를 뿌려 마무리한다."
        ],
        tip: "절이는 시간을 너무 길게 두지 말고 5~10분 내로 조절하면 아삭함을 유지할 수 있습니다.",
        localStory: "이동읍 배추로 만든 겉절이는 밥도둑 기본 반찬입니다."
    }
];



// --- LocalStorage Database Helper ---
const db = {
    getUsers: () => JSON.parse(localStorage.getItem('users') || '[]'),
    setUsers: (users) => localStorage.setItem('users', JSON.stringify(users)),

    getPosts: () => JSON.parse(localStorage.getItem('posts') || '[]'),
    setPosts: (posts) => localStorage.setItem('posts', JSON.stringify(posts)),

    getCurrentUser: () => JSON.parse(localStorage.getItem('currentUser') || 'null'),
    setCurrentUser: (user) => localStorage.setItem('currentUser', JSON.stringify(user)),

    // Initialize with some dummy posts if empty
    init: function () {
        if (this.getPosts().length === 0) {
            const dummyPosts = [
                { id: 1, title: "이동농협 지식창고 오픈을 축하합니다!", author: "관리자", date: "2025-12-01", content: "많은 이용 부탁드립니다." },
                { id: 2, title: "백옥쌀 레시피 정말 맛있네요", author: "김농부", date: "2025-12-02", content: "버터밥 해먹었는데 꿀맛입니다." }
            ];
            this.setPosts(dummyPosts);
        }
    }
};

// Application Logic
const app = {
    init: function () {
        db.init(); // Init DB
        this.checkAuth(); // Check login state
        this.renderEncyclopedia('all');
        this.renderRecipes('all');
        this.renderBoard(); // Render board
        this.setupNavigation();

        // Bind drag handlers
        this.boundDragMove = this.handleDragMove.bind(this);
        this.boundDragEnd = this.handleDragEnd.bind(this);
    },

    // --- Auth Logic ---
    checkAuth: function () {
        const user = db.getCurrentUser();
        const authUI = document.getElementById('auth-ui');
        const writeBtn = document.getElementById('btn-write-post');

        if (user) {
            // Logged in
            authUI.innerHTML = `
                <span><strong>${user.nickname}</strong>님</span>
                <button class="btn-small btn-outline" onclick="app.logout()">로그아웃</button>
            `;
            if (writeBtn) writeBtn.style.display = 'block';
        } else {
            // Not logged in
            authUI.innerHTML = `
                <button class="btn-small" onclick="app.switchSection('login')">로그인</button>
                <button class="btn-small btn-outline" onclick="app.switchSection('signup')">회원가입</button>
            `;
            if (writeBtn) writeBtn.style.display = 'none';
        }
    },

    signup: function () {
        const id = document.getElementById('signup-id').value.trim();
        const pw = document.getElementById('signup-pw').value.trim();
        const nickname = document.getElementById('signup-nickname').value.trim();

        if (!id || !pw || !nickname) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        const users = db.getUsers();
        if (users.find(u => u.id === id)) {
            alert('이미 존재하는 아이디입니다.');
            return;
        }

        users.push({ id, pw, nickname });
        db.setUsers(users);
        alert('회원가입이 완료되었습니다. 로그인해주세요.');
        this.switchSection('login');

        // Clear form
        document.getElementById('signup-id').value = '';
        document.getElementById('signup-pw').value = '';
        document.getElementById('signup-nickname').value = '';
    },

    login: function () {
        const id = document.getElementById('login-id').value.trim();
        const pw = document.getElementById('login-pw').value.trim();

        if (!id || !pw) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        const users = db.getUsers();
        const user = users.find(u => u.id === id && u.pw === pw);

        if (user) {
            db.setCurrentUser(user);
            alert(`${user.nickname}님 환영합니다!`);
            this.checkAuth();
            this.switchSection('home');

            // Clear form
            document.getElementById('login-id').value = '';
            document.getElementById('login-pw').value = '';
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    },

    logout: function () {
        db.setCurrentUser(null);
        alert('로그아웃 되었습니다.');
        this.checkAuth();
        this.switchSection('home');
    },

    // --- Board Logic ---
    renderBoard: function () {
        const posts = db.getPosts().sort((a, b) => b.id - a.id); // Newest first
        const tbody = document.getElementById('board-list-body');
        tbody.innerHTML = '';

        if (posts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">게시글이 없습니다.</td></tr>';
            return;
        }

        posts.forEach(post => {
            const tr = document.createElement('tr');
            tr.onclick = () => this.viewPost(post.id);
            tr.innerHTML = `
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.date}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    goToWritePost: function () {
        const user = db.getCurrentUser();
        if (!user) {
            alert('로그인이 필요한 서비스입니다.');
            this.switchSection('login');
            return;
        }
        this.switchSection('board-write');
    },

    submitPost: function () {
        const title = document.getElementById('post-title').value.trim();
        const content = document.getElementById('post-content').value.trim();
        const user = db.getCurrentUser();

        if (!user) {
            alert('로그인이 필요합니다.');
            return;
        }
        if (!title || !content) {
            alert('제목과 내용을 입력해주세요.');
            return;
        }

        const posts = db.getPosts();
        const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
        const today = new Date().toISOString().split('T')[0];

        const newPost = {
            id: newId,
            title: title,
            content: content,
            author: user.nickname,
            date: today
        };

        posts.push(newPost);
        db.setPosts(posts);

        alert('게시글이 등록되었습니다.');

        // Clear form
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';

        this.renderBoard();
        this.switchSection('board');
    },

    viewPost: function (id) {
        const posts = db.getPosts();
        const post = posts.find(p => p.id === id);

        if (!post) {
            alert('삭제되었거나 존재하지 않는 게시글입니다.');
            return;
        }

        document.getElementById('view-post-title').innerText = post.title;
        document.getElementById('view-post-author').innerText = post.author;
        document.getElementById('view-post-date').innerText = post.date;
        document.getElementById('view-post-content').innerText = post.content;

        this.switchSection('board-view');
    },

    setupNavigation: function () {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                this.switchSection(target);
            });
        });
    },

    switchSection: function (sectionId) {
        // Update Nav
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.getAttribute('data-target') === sectionId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Section
        document.querySelectorAll('section').forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    },

    renderEncyclopedia: function (filterCategory) {
        const container = document.getElementById('encyclopedia-list');
        container.innerHTML = '';

        const filteredData = filterCategory === 'all'
            ? encyclopediaData
            : encyclopediaData.filter(item => item.category === filterCategory);

        if (filteredData.length === 0) {
            container.innerHTML = '<p style="text-align:center; padding: 20px;">해당하는 정보가 없습니다.</p>';
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'info-card';
            card.id = item.id;

            if (item.customHtml) {
                // Render Custom HTML (for Membership Criteria)
                card.innerHTML = `
                    <span class="category-label">${item.category}</span>
                    <h3>${item.title}</h3>
                    <p class="situation">"${item.situation}"</p>
                    <div class="summary">${item.summaryOneLine}</div>
                    <div class="custom-content">
                        ${item.customHtml}
                    </div>
                `;
            } else {
                // Render Standard Card
                let descHtml = item.description.map(p => `<p>• ${p}</p>`).join('');
                let checklistHtml = item.checklist.map(li => `<li>${li}</li>`).join('');

                card.innerHTML = `
                    <span class="category-label">${item.category}</span>
                    <h3>${item.title}</h3>
                    <p class="situation">"${item.situation}"</p>
                    <div class="summary">${item.summaryOneLine}</div>
                    <div class="description">${descHtml}</div>
                    <div class="checklist">
                        <strong>✅ 체크리스트</strong>
                        <ul>${checklistHtml}</ul>
                    </div>
                    <div class="tip"><strong>💡 조합 TIP:</strong> ${item.tip}</div>
                `;
            }
            container.appendChild(card);
        });
    },

    filterEncyclopedia: function (category) {
        this.renderEncyclopedia(category);
    },

    renderRecipes: function (filterItem) {
        const container = document.getElementById('recipe-list');
        container.innerHTML = '';

        const filteredData = filterItem === 'all'
            ? recipeData
            : recipeData.filter(item => item.item === filterItem);

        // Update active filter tag
        document.querySelectorAll('#recipe-filters .tag').forEach(tag => {
            if (tag.innerText === (filterItem === 'all' ? '전체' : filterItem)) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });

        if (filteredData.length === 0) {
            container.innerHTML = '<p style="text-align:center; padding: 20px;">해당하는 레시피가 없습니다.</p>';
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'info-card recipe-card';
            card.id = item.id;

            let ingredientsHtml = item.ingredients.map(i => `<li>${i}</li>`).join('');
            let stepsHtml = item.steps.map(s => `<li>${s}</li>`).join('');

            card.innerHTML = `
                <span class="category-label">${item.item}</span>
                <h3>${item.title}</h3>
                <div class="recipe-meta">
                    <span>⏱ ${item.difficulty}</span>
                </div>
                <div class="summary">${item.summaryOneLine}</div>
                
                <div class="ingredients">
                    <h4>재료</h4>
                    <ul>${ingredientsHtml}</ul>
                </div>

                <div class="steps">
                    <h4>만드는 법</h4>
                    <ol>${stepsHtml}</ol>
                </div>

                <div class="tip"><strong>💡 TIP:</strong> ${item.tip}</div>
                <div class="local-story">🌾 ${item.localStory}</div>
            `;
            container.appendChild(card);
        });
    },

    filterRecipes: function (item) {
        this.renderRecipes(item);
    },

    // Navigation Helpers
    goToEncyclopedia: function (category) {
        this.switchSection('encyclopedia');
        // Set dropdown value
        const select = document.getElementById('encyclopedia-filter');
        select.value = category;
        this.filterEncyclopedia(category);
    },

    goToCard: function (cardId) {
        // Determine section based on card ID (simple logic for now)
        // In a real app, we might map IDs to sections
        // Here we know membership stuff is in encyclopedia
        this.switchSection('encyclopedia');
        document.getElementById('encyclopedia-filter').value = 'all'; // Reset filter to find it
        this.filterEncyclopedia('all');

        setTimeout(() => {
            const element = document.getElementById(cardId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.style.border = '2px solid var(--primary-color)';
                setTimeout(() => element.style.border = 'none', 2000); // Flash effect
            }
        }, 100);
    },

    goToRecipe: function (filterItem) {
        this.switchSection('recipes');
        if (filterItem === 'rice') filterItem = '백옥쌀'; // Mapping for the button
        this.filterRecipes(filterItem);
    },

    openProtectedLink: function () {
        const password = prompt("비밀번호를 입력하세요:");
        if (password === "235040") {
            // window.open might be blocked by pop-up blockers, so use location.href
            window.location.href = "https://docs.google.com/spreadsheets/d/1r-49IOwUA-3sv3ZBZpwrFKtNUGbo086IjMTHqMRAHmM/edit?usp=drive_link";
        } else if (password !== null) { // User didn't cancel
            alert("비밀번호가 틀렸습니다.");
        }
    },

    switchTab: function (tabId, btnElement) {
        // Find the parent container of the clicked button
        const container = btnElement.closest('.custom-content');

        // Hide all tab contents in this container
        container.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

        // Deactivate all buttons in this container
        container.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

        // Activate target content and button
        container.querySelector('#' + tabId).classList.add('active');
        btnElement.classList.add('active');
    },

    // --- Meeting Manager Logic ---
    currentMeeting: null,
    currentActor: 'Admin',
    dragItem: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    enterMeeting: function () {
        const name = document.getElementById('meeting-name-input').value.trim();
        const pw = document.getElementById('meeting-pw-input').value.trim();
        if (!name || !pw) return alert('모임 이름과 비밀번호를 입력하세요.');

        let meetings = JSON.parse(localStorage.getItem('meetings') || '{}');

        if (!meetings[name]) {
            // Create new meeting
            meetings[name] = {
                password: pw,
                members: [],
                logs: [],
                date: '',
                place: ''
            };
            alert(`새 모임 '${name}'이(가) 생성되었습니다.`);
        } else {
            // Login
            if (meetings[name].password !== pw) {
                return alert('비밀번호가 틀렸습니다.');
            }
        }

        localStorage.setItem('meetings', JSON.stringify(meetings));
        this.currentMeeting = name;
        this.loadMeetingDashboard();
    },

    loadMeetingDashboard: function () {
        document.getElementById('meeting-auth').style.display = 'none';
        document.getElementById('meeting-dashboard').style.display = 'block';
        document.getElementById('current-meeting-name').innerText = this.currentMeeting;

        const meetings = JSON.parse(localStorage.getItem('meetings'));
        const data = meetings[this.currentMeeting];

        document.getElementById('meeting-date').value = data.date || '';
        document.getElementById('meeting-place').value = data.place || '';

        this.updateActorSelector(data.members);
        this.renderBubbles(data.members);
        this.renderStatusList(data.members);
        this.renderLogs(data.logs);
    },

    logoutMeeting: function () {
        this.currentMeeting = null;
        document.getElementById('meeting-auth').style.display = 'block';
        document.getElementById('meeting-dashboard').style.display = 'none';
        document.getElementById('meeting-name-input').value = '';
        document.getElementById('meeting-pw-input').value = '';
    },

    addMeetingMember: function () {
        const nameInput = document.getElementById('new-member-name');
        const name = nameInput.value.trim();
        if (!name) return;

        let meetings = JSON.parse(localStorage.getItem('meetings'));
        const members = meetings[this.currentMeeting].members;

        if (members.find(m => m.name === name)) {
            return alert('이미 존재하는 이름입니다.');
        }

        members.push({ name: name, status: 'undecided', x: 50, y: 50 }); // x,y in percent
        meetings[this.currentMeeting].members = members;
        localStorage.setItem('meetings', JSON.stringify(meetings));

        nameInput.value = '';
        this.loadMeetingDashboard(); // Reload all
    },

    updateActorSelector: function (members) {
        const selector = document.getElementById('actor-selector');
        selector.innerHTML = '<option value="Admin">관리자 (Admin)</option>';
        members.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.name;
            opt.innerText = m.name;
            selector.appendChild(opt);
        });
        selector.value = this.currentActor;
    },

    changeActor: function () {
        this.currentActor = document.getElementById('actor-selector').value;
    },

    renderBubbles: function (members) {
        const container = document.getElementById('zone-undecided'); // Actually we put all bubbles in container relative
        // But for drag logic, let's put them in the drag-board-container and position absolutely
        const board = document.querySelector('.drag-board-container');
        // Clear existing bubbles (except zones)
        board.querySelectorAll('.bubble').forEach(el => el.remove());

        members.forEach((m, index) => {
            const bubble = document.createElement('div');
            bubble.className = `bubble ${m.status === 'attending' ? 'attending' : m.status === 'absent' ? 'absent' : ''}`;
            bubble.innerText = m.name;
            bubble.dataset.name = m.name;

            // Initial Position (Randomized slightly in center if undecided, or fixed in zones)
            // For simplicity, we'll just center them initially or let drag logic handle it.
            // Let's use the saved x, y or default.
            // If status is undecided, put in center. Attending -> Right. Absent -> Left.

            let left = '50%';
            if (m.status === 'attending') left = '80%';
            if (m.status === 'absent') left = '20%';

            // Add some randomness so they don't overlap perfectly
            const randomOffset = (index % 5) * 5;
            bubble.style.left = `calc(${left} + ${randomOffset}px)`;
            bubble.style.top = `calc(50% + ${randomOffset}px)`;

            // Label for feedback
            const label = document.createElement('div');
            label.className = 'bubble-label';
            bubble.appendChild(label);

            // Drag Events
            bubble.addEventListener('mousedown', (e) => this.handleDragStart(e, bubble));
            bubble.addEventListener('touchstart', (e) => this.handleDragStart(e, bubble), { passive: false });

            board.appendChild(bubble);
        });
    },

    handleDragStart: function (e, bubble) {
        if (!this.currentMeeting) return;
        e.preventDefault();
        this.dragItem = bubble;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const rect = bubble.getBoundingClientRect();
        this.dragOffsetX = clientX - rect.left;
        this.dragOffsetY = clientY - rect.top;

        document.addEventListener('mousemove', this.boundDragMove);
        document.addEventListener('mouseup', this.boundDragEnd);
        document.addEventListener('touchmove', this.boundDragMove, { passive: false });
        document.addEventListener('touchend', this.boundDragEnd);
    },

    handleDragMove: function (e) {
        if (!this.dragItem) return;
        e.preventDefault();

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const board = document.querySelector('.drag-board-container');
        const boardRect = board.getBoundingClientRect();

        let newX = clientX - boardRect.left - this.dragOffsetX;
        let newY = clientY - boardRect.top - this.dragOffsetY;

        // Boundary checks
        newX = Math.max(0, Math.min(newX, boardRect.width - 60)); // 60 is bubble width
        newY = Math.max(0, Math.min(newY, boardRect.height - 60));

        this.dragItem.style.left = newX + 'px';
        this.dragItem.style.top = newY + 'px';

        // Visual Feedback based on zone
        const center = newX + 30;
        const width = boardRect.width;
        const label = this.dragItem.querySelector('.bubble-label');

        if (center < width * 0.33) {
            this.dragItem.classList.add('absent');
            this.dragItem.classList.remove('attending');
            label.innerText = "불참";
            this.dragItem.classList.add('show-label');
        } else if (center > width * 0.66) {
            this.dragItem.classList.add('attending');
            this.dragItem.classList.remove('absent');
            label.innerText = "참석";
            this.dragItem.classList.add('show-label');
        } else {
            this.dragItem.classList.remove('attending', 'absent');
            this.dragItem.classList.remove('show-label');
        }
    },

    handleDragEnd: function (e) {
        if (!this.dragItem) return;

        document.removeEventListener('mousemove', this.boundDragMove);
        document.removeEventListener('mouseup', this.boundDragEnd);
        document.removeEventListener('touchmove', this.boundDragMove);
        document.removeEventListener('touchend', this.boundDragEnd);

        const board = document.querySelector('.drag-board-container');
        const boardRect = board.getBoundingClientRect();
        const rect = this.dragItem.getBoundingClientRect();
        const center = (rect.left - boardRect.left) + 30;
        const width = boardRect.width;

        const name = this.dragItem.dataset.name;
        let newStatus = 'undecided';

        if (center < width * 0.33) {
            newStatus = 'absent';
        } else if (center > width * 0.66) {
            newStatus = 'attending';
        }

        this.updateMemberStatus(name, newStatus);
        this.dragItem = null;
    },

    updateMemberStatus: function (targetName, newStatus) {
        let meetings = JSON.parse(localStorage.getItem('meetings'));
        let meeting = meetings[this.currentMeeting];
        let member = meeting.members.find(m => m.name === targetName);

        if (member.status !== newStatus) {
            // Log logic
            let action = newStatus === 'attending' ? '참석(→)' : newStatus === 'absent' ? '불참(←)' : '미정';
            let logMsg = `${this.currentActor}님이 ${targetName}님을 ${action}으로 설정했습니다.`;

            meeting.logs.unshift(new Date().toLocaleTimeString() + ' ' + logMsg);
            member.status = newStatus;

            localStorage.setItem('meetings', JSON.stringify(meetings));

            this.renderStatusList(meeting.members);
            this.renderLogs(meeting.logs);
        }
    },

    renderStatusList: function (members) {
        const list = document.getElementById('member-status-list');
        list.innerHTML = '';
        members.forEach(m => {
            const li = document.createElement('li');
            let statusText = m.status === 'attending' ? '🟢 참석' : m.status === 'absent' ? '🔴 불참' : '⚪ 미정';
            li.innerText = `${m.name}: ${statusText}`;
            list.appendChild(li);
        });
    },

    renderLogs: function (logs) {
        const list = document.getElementById('meeting-log-list');
        list.innerHTML = '';
        logs.forEach(log => {
            const li = document.createElement('li');
            li.innerText = log;
            list.appendChild(li);
        });
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = app; // Ensure app is globally accessible for inline onclick handlers
    app.init();
});
