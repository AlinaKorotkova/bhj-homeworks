const btnLogin = document.querySelector('.btn');
const btnLogout = document.getElementById('logout_btn');
const formInput = Array.from(document.querySelectorAll('input'));


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    if(localStorage.getItem('id')){
        console.log(localStorage.getItem('id'))
        document.getElementById('welcome').className = 'welcome welcome_active';
        document.getElementById('user_id').innerText = localStorage.getItem('id');
        document.getElementById('signin').className = 'signin';
        btnLogout.className = 'btn_logout_active';

    }
})

btnLogout.addEventListener('click', (e) => {
    document.getElementById('signin').className = 'signin signin_active';
    document.getElementById('welcome').className = 'welcome';
    btnLogout.className = 'btn_logout';
    localStorage.clear();
})

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    let userData = new FormData();
    formInput.forEach((element) => {
        userData.append(element.name, element.value);
    })

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(userData);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === xhr.DONE) {
            let xhrResp = JSON.parse(xhr.response);
            if(xhrResp.success) {
                localStorage.setItem('id', xhrResp.user_id)
                document.getElementById('welcome').className = 'welcome welcome_active';
                document.getElementById('user_id').innerText = xhrResp.user_id;
                document.getElementById('signin').className = 'signin';
                btnLogout.className = 'btn_logout_active';
                console.log(localStorage.getItem('id'))
                return;
            }
            alert('Не верные логин или пароль');
            document.getElementById('signin__form').reset();
        }
    }
})