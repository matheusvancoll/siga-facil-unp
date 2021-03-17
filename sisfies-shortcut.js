validateLogin()

function validateLogin(){

}

const campoSistema = document.querySelector("#nomeDoSistema")

const btnRF = document.createElement("button")

startShortcuts()

function startShortcuts(){
    insertBtnLogin(btnRF, "RF", "RF")
    
    function insertBtnLogin(btnName, viewName){
        btnName.innerHTML = viewName
        btnName.classList.add("btnInput")
        campoSistema.appendChild(btnName)
        btnName.addEventListener("click",()=>{
            const param = "RF"
            const teste = getUser(param)
            alert("O segredo é " +  teste)
            ///////////
        })
    }
}
	

