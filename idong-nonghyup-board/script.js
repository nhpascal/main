// Data Definitions
const encyclopediaData = [
    {
        id: "membership-criteria",
        category: "조합·조합원 기본",
        title: "조합원, 누가 될 수 있나요?",
        situation: "조합원이 되려면 어떤 조건이 있어요? 라고 물어볼 때",
        summaryOneLine: "우리 지역에 주소를 두고, 실제로 농업에 종사하는 분이 기본 대상입니다.",
        description: [
            "조합원은 법에 정해진 사업구역(예: 이동읍 등)에 주소를 두고, 일정 범위의 농업에 종사하는 사람, 또는 관련 단체 등이 대상입니다.",
            "세부 기준(경작면적, 농업 종사 기간 등)은 정관으로 정해져 있습니다.",
            "가입 시에는 주민등록, 농업경영체 등록 등 농업·거주를 증명할 서류가 필요할 수 있습니다."
        ],
        checklist: [
            "우리 조합의 사업구역 안에 주소를 두고 있는가?",
            "일정 면적 이상의 농지를 경작하거나, 축산 등 농업에 종사하고 있는가?",
            "농업경영체 등록, 농지원부 등 증빙서류가 준비 가능한가?",
            "정관에서 정한 조합원 결격사유에 해당하지 않는가?"
        ],
        tip: "가입 전, 농업경영체 등록과 주민등록 등본 등을 미리 준비해 오면 상담이 훨씬 빠릅니다."
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
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
