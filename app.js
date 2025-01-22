// ボタンのクリックイベントを設定
document.getElementById("readMyNumberCard").addEventListener("click", () => {
    const redirectUrl = "https://myhome/MAINAtest"; // リダイレクトURL
    const portalAppUrl = `mypage-app://authenticate?redirect_uri=${encodeURIComponent(redirectUrl)}`;
    
    // マイナポータルアプリを起動
    window.location.href = portalAppUrl;
});

// リダイレクトされた場合の処理
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const status = urlParams.get("status");

    if (status === "success") {
        document.getElementById("result").innerText = `認証成功: トークン=${token}`;
    } else if (status === "error") {
        document.getElementById("result").innerText = "認証に失敗しました。";
    }
});
