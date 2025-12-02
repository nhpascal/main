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
               ... 
            </div>
         `
    },
    {
        id: "membership-benefits",
        category: "조합·조합원 기본",
        title: "조합원이 되면 뭐가 좋은가요?",
        ...
    },
    // Change iDong idong1.html to https://docs.google.com/spreadsheets/d/1r-49IOwUA-3sv3ZBZpwrFKtNUGbo086IjMTHqMRAHmM/edit?usp=drivesdk
    openProtectedLink: function () {
            const password = prompt("비밀번호를 입력하세요:");
            if (password === "235040") {
                // window.open might be blocked by pop-up blockers, so use location.href
                window.location.href = "https://docs.google.com/spreadsheets/d/1r-49IOwUA-3sv3ZBZpwrFKtNUGbo086IjMTHqMRAHmM/edit?usp=drivesdk";
            } else if (password !== null) { // User didn't cancel
                alert("비밀번호가 틀렸습니다.");
            }
        }
   ,

...Other unchanged App settings flow snippets..  
  
await commit completions ..

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function ()  
 app.initialize[
