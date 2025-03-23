

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
        let msg = document.querySelector('#msg').textContent = "Preencha todos os campos";  
        msg.style.color = "red";
    } else {
        alert('obg')
    }
}

btn.addEventListener('click', ()=>{
    verificar()
})





