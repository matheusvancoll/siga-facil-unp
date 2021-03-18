validateLogin()

function validateLogin(){

}

const campoSistema = document.querySelector("#nomeDoSistema")

const btnRF = document.createElement("button")
const btnSF = document.createElement("button")
const btnNC = document.createElement("button")
const btnJM = document.createElement("button")
const btnMOS = document.createElement("button")

startShortcuts()

function startShortcuts(){

    insertBtnLogin(btnRF, "RF")
    //insertBtnLogin(btnSF, "SF")
    //insertBtnLogin(btnNC, "NC")
    //insertBtnLogin(btnJM, "JM")
    //insertBtnLogin(btnRF, "MOS")
    
    function insertBtnLogin(btnName, viewName){ // insere os botoes
        btnName.innerHTML = viewName
        btnName.classList.add("btnInput")
        campoSistema.appendChild(btnName)
        btnName.addEventListener("click",()=>{
            const user = getUser(viewName)
            const password = getPassword(viewName)
            loginUnid(user, password)
        })
    }

    function loginUnid(user, password){
        const cpf = document.querySelector("#id")
        const senha = document.querySelector("#pw")
        const enterLogin = document.querySelector("#botoes")
        cpf.value = user.value
        senha.value = password.value
    }
}
	

