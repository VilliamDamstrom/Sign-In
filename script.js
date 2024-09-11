const correctUsername = "test";
const correctPassword = "1234";

function renderLoginPage() {
    const root = document.getElementById('root');

// Styled it here but prefer to style in css, makes the script file look cleaner imo
let main = document.createElement("main");
main.style.width = "600px";
main.style.minHeight = "400px";
main.style.backgroundColor = "darkblue";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.margin = "0 auto";
main.style.marginTop ="20%";
main.style.borderRadius ="25px";
main.style.padding ="20px";

let container = document.createElement("div");
container.loginForm.add("login-form");

const header = document.createElement("h2");
header.textContent = "Logga in";

const usernameInput = document.createElement('input');
usernameInput.type = "text";
usernameInput.placeholder = "Användarnamn"

const passwordInput = document.createElement('input');
passwordInput.type = "password";
passwordInput.placeholder = "Lösenord";

const loginBtn = document.createElement('button');
loginBtn.textContent = 'Login';
loginBtn.addEventListener('click', login);

// Add elements to container
container.appendChild(header);
continuer.appendChild(usernameInput);
container.appendChild(passwordInput);
container.appendChild(loginBtn);

// App container to main
main.appendChild(container);

// Append main to the root
root.appendChild(main);

}









