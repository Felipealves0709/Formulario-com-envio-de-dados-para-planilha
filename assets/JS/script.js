const mode = document.querySelector('#mode-icon');
const login = document.querySelector('#loginButton');

const addLoading = () =>{
    login.innerHTML =  '<img src="Loading-PNG.png" alt="" class="loading">'
}

const removeLoading = () =>{
    login.innerHTML = 'Login'
}



mode.addEventListener('click', () => {

    const form = document.querySelector('#login-form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
})
 
const handleSubmit = (event) => {
    event.preventDefault();

    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const senha = document.querySelector('input[name=senha]').value;


    fetch('https://api.sheetmonkey.io/form/2esNc82YWrTToxAQcaPUZg',{

        method: 'post',
        headers: {
            'Accept': 'Application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, senha}),
    }).then(()=> removeLoading())
}

login.addEventListener('click', (event) => {
    let user = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#senha').value;

})

document.querySelector('form').addEventListener('submit', handleSubmit);