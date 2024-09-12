const correctUsername = "test";
const correctPassword = "1234";

function renderLoginPage() {
    const root = document.getElementById('root');
    // Clear root content
    root.innerHTML = '';

// Styled the main here but prefer to style in css
let main = document.createElement("main");
main.style.width = "600px";
main.style.minHeight = "400px";
main.style.backgroundColor = "darkblue";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.margin = "0 auto";
main.style.marginTop ="150px";
main.style.borderRadius ="25px";
main.style.padding ="20px";

let container = document.createElement("div");
container.classList.add("login-form");

const header = document.createElement("h2");
header.textContent = "Välkommen!";

const usernameInput = document.createElement('input');
usernameInput.type = "text";
usernameInput.placeholder = "Användarnamn"

const passwordInput = document.createElement('input');
passwordInput.type = "password";
passwordInput.placeholder = "Lösenord";

const loginBtn = document.createElement('button');
loginBtn.textContent = 'Logga in!';
loginBtn.addEventListener('click', function() {
    login(usernameInput.value, passwordInput.value);
});

// Add elements to container
container.appendChild(header);
container.appendChild(usernameInput);
container.appendChild(passwordInput);
container.appendChild(loginBtn);

// Add container to main
main.appendChild(container);
// Add main to the root
root.appendChild(main);

}


function renderWelcomePage() {
    const root = document.getElementById('root');
    // Clear root content
    root.innerHTML = '';

// Styled the main on the welcome page aswell here since i used almost
// the same code and for practice
let main = document.createElement("main");
main.style.width = "600px";
main.style.minHeight = "400px";
main.style.backgroundColor = "darkred";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.margin = "0 auto";
main.style.marginTop ="150px";
main.style.borderRadius ="25px";
main.style.padding ="20px";

let container = document.createElement("div");
container.classList.add("welcome-form");

const welcomeHeader = document.createElement("h2");
welcomeHeader.textContent = "inloggad!"

 const logoutBtn = document.createElement('button');
logoutBtn.textContent = "Logga ut!";
 logoutBtn.addEventListener('click', function() {
    logout();
});

container.appendChild(welcomeHeader);
container.appendChild(logoutBtn);

// Add container to main
main.appendChild(container);
// Add main to the root
 root.appendChild(main);

}


function login(username, password) {
    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        renderWelcomePage();
    } else {
        alert("Fel användarnamn eller lösenord!");
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    renderLoginPage();
}

// Check if the user is already sign in
window.onload = function () {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        renderWelcomePage();
    } else {
        renderLoginPage();
    }
};


renderLoginPage();






