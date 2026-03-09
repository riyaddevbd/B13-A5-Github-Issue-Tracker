document.getElementById('sign-in-btn').addEventListener('click', () => {
    const defaultUserName = 'admin';
    const defaultPass = 'admin123';
    const userNameInput = document.getElementById('user-name');
    const userName = userNameInput.value;
    const passInput = document.getElementById('password');
    const userPass = passInput.value;
    

    if(userName !== defaultUserName){
        alert('Wrong user name. Please enter valid user name');
        return;
    }

    if(userPass !== defaultPass){
        alert("Wrong password. Please enter valid password");
        return;
    }

    alert("Login Successful");
    return window.location.href = "../main.html";
});