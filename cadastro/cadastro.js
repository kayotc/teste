

const btn = document.querySelector('button');

function verificar(){
    const inputN = document.querySelector('#name')
    const nome = inputN.value

    const inputU = document.querySelector('#user')
    const user = inputU.value

    const inputP = document.querySelector('#pass')
    const pass = inputP.value

    const inputPC = document.querySelector('#pass-confirme')
    const passconfirme = inputPC.value

    if (nome === '' || user === ''  || pass === '' || passconfirme === ''){
        let msg = document.querySelector('#msg')
        msg.textContent = "Preencha todos os campos";  
        msg.style.color = "red";

        return;
    } 
    if (pass !== passconfirme){
        alert('senhas diferentes')
    } else {
        let users = JSON.parse(localStorage.getItem('usuarios')) || [];

        const userExisted = users.find(u => u.usuario === user);

        if(userExisted){
            let msg = document.querySelector("#msg")
            msg.textContent = "Este email já está cadastrado"
            msg.style.color = "red";
        } else{
            msg.textContent = "Usuário criado com sucesso"
            msg.style.color = "green";
            const newUsers = {
                nome: nome,
                usuario: user,
                senha: pass
            }

            users.push(newUsers)

            localStorage.setItem('usuarios', JSON.stringify(users));

            //setTimeout(() =>{
              //  window.location.href = "../entrar/entrar.html"
            //}, 2000)
        }
    }
}

btn.addEventListener('click', ()=>{
    verificar()
})

const inputP = document.querySelector('#pass')
const inputPC = document.querySelector('#pass-confirme')

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

const logoPC = document.querySelector('.logoPC');
logoPC.addEventListener('click', ()=>{
    if (inputPC.type === 'text'){
        inputPC.type = 'password';
        logoPC.src = '../svg/cadeado.svg'
    } else {
        inputPC.type = 'text'
        logoPC.src = '../svg/cadeado-aberto.svg'
    }

})





