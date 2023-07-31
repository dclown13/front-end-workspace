function userIdCheck() {
    const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    return regExp.test(userId.value);
}

function userPwd1Check() {
    const regExp = /^[!-~]{8,15}$/;
    const regExp2 = /[!-/:-@[-`{-~]/;
    return regExp.test(userPwd1.value) && regExp2.test(userPwd1.value);
}

function userPwd2Check() {
    return userPwd1.value === userPwd2.value;
}

function userNameCheck() {
    const regExp = /^[가-힣]{2,}$/;
    return regExp.test(userName.value);
}

function emailCheck() {
    const regExp = /^[\w\.]+@[a-z]+\.[a-z]+$/;
    return regExp.test(email.value);
}

function validate() {
    if(!userIdCheck()) {
        userId.focus();
        return false;
    } else if(!userPwd1Check()) {
        userPwd1.focus();
        return false;
    } else if(!userPwd2Check()) {
        userPwd2.focus();
        return false;
    } else if(!userNameCheck()) {
        userName.focus();
        return false;
    } else if(!emailCheck()) {
        email.focus();
        return false;
    } else {
        return true;
    }
}

function inputHandler(event, check, message) {
    if(!check) {
        event.target.nextElementSibling.style.color = 'red';
        event.target.nextElementSibling.innerHTML = message;
    } else {
        event.target.nextElementSibling.style.color = 'green';
        event.target.nextElementSibling.innerHTML = 'OK!';
    }
}