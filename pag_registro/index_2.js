let correctCaptchaAnswer;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById("captchaQuestion").innerText = `${num1} + ${num2} = ?`;
    correctCaptchaAnswer = num1 + num2;
}

function validateForm() {
    const deviceId = document.getElementById("deviceId").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const dns = document.getElementById("dns").value.trim();
    const captcha = document.getElementById("captcha").value.trim();

    if (!deviceId || !username || !password || !dns) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    if (parseInt(captcha) !== correctCaptchaAnswer) {
        alert("O CAPTCHA está incorreto. Tente novamente.");
        generateCaptcha();
        return;
    }

    alert("Registro bem-sucedido!");
}

window.onload = generateCaptcha;

//ASS: Café☕