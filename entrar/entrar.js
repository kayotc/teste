

const btn = document.querySelector('button');

function verificar(){
    const inputU = document.querySelector('#user')
    const user = inputU.value

    const inputP = document.querySelector('#pass')
    const pass = inputP.value


    if (user === ''  || pass === ''){
        let msg = document.querySelector('#msg')
        msg.textContent = "Preencha todos os campos";  
        msg.style.color = "red";
        return;
    } else {
        let users = JSON.parse(localStorage.getItem('usuarios'));

        const userExisted = users.find(u => u.usuario === user && u.senha === pass);

        if(userExisted){
            let msg = document.querySelector("#msg")
            msg.textContent = "Este usuário existe"
            msg.style.color = "green";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com"
            }, 1500)
            
        } else {
            let msg = document.querySelector("#msg")
            msg.textContent = "Este usuário não existe"
            msg.style.color = "red";
        }
    }

}

btn.addEventListener('click', ()=>{
    verificar()
})

const inputP = document.querySelector('#pass')

const logoPass = document.querySelector('.logoPass');
logoPass.addEventListener('click', ()=>{
    if (inputP.type === 'text'){
        inputP.type = 'password';
        logoPass.src = '../svg/cadeado.svg'
    } else {
        inputP.type = 'text'
        logoPass.src = '../svg/cadeado-aberto.svg'
    }
})


