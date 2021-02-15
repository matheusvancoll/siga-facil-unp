const taskBar = document.querySelector("#espaco_1")

startShortcuts()

function startShortcuts(){

	inputMatricula()
	btnFichaAcademica()
	btnSenha()
	btnHitorico()
	btnFichaFinanceira()
	btnRematricula()
	btnNovoRequerimento()
	btnVerRequerimento()
	fillArea()
	
	function inputMatricula(){
		const txtMatricula = document.createElement("input")
		txtMatricula.classList.add("txtInput")
		txtMatricula.id = "txtMatricula"
		taskBar.appendChild(txtMatricula)	
	}

	function btnFichaAcademica(){
		const btnFichaAcademica = document.createElement("button")
		btnFichaAcademica.innerHTML = "Ficha acadêmica"
		btnFichaAcademica.classList.add("btnInput")
		taskBar.appendChild(btnFichaAcademica)
		btnFichaAcademica.addEventListener("click",()=>{
			window.open("/registro_controle_academico/fichaAcademica.php", "_self")
			saveMatricula()
		})
	}
	
	function btnHitorico(){
		const btnHistorico = document.createElement("button")
		btnHistorico.innerHTML = "Histórico"
		btnHistorico.classList.add("btnInput")
		taskBar.appendChild(btnHistorico)
		btnHistorico.addEventListener("click",()=>{
			window.open("/registro_controle_academico/consultaHistoricoOficial.php", "_self")
			saveMatricula()
		})
	}
	
	function btnFichaFinanceira(){
		const btnFichaFinanceira = document.createElement("button")
		btnFichaFinanceira.innerHTML = "Ficha Financeira"
		btnFichaFinanceira.classList.add("btnInput")
		taskBar.appendChild(btnFichaFinanceira)
		btnFichaFinanceira.addEventListener("click",()=>{
			window.open("/financeiro/fichaFinanceira.php", "_self")
			saveMatricula()
		})
	}
	
	function btnRematricula(){
		const btnRematricula = document.createElement("button")
		btnRematricula.innerHTML = "Rematrícula"
		btnRematricula.classList.add("btnInput")
		taskBar.appendChild(btnRematricula)
		btnRematricula.addEventListener("click", ()=>{
			window.open("/registro_controle_academico/rematricula.php", "_self")
			saveMatricula()
		})
	}
	
	function btnNovoRequerimento(){
		const btnNovoRequerimento = document.createElement("button")
		btnNovoRequerimento.innerHTML = "Novo Requerimento"
		btnNovoRequerimento.classList.add("btnInput")
		taskBar.appendChild(btnNovoRequerimento)
		btnNovoRequerimento.addEventListener("click",()=>{
			window.open("/registro_controle_academico/registroRequerimento.php", "_self")
			saveMatricula()
		})
	}

	function btnVerRequerimento(){
		const btnVerRequerimento = document.createElement("button")
		btnVerRequerimento.innerHTML = "Ver Requerimento"
		btnVerRequerimento.classList.add("btnInput")
		taskBar.appendChild(btnVerRequerimento)
		btnVerRequerimento.addEventListener("click",()=>{
			window.open("/registro_controle_academico/acompanhamentoRequerimento.php", "_self")
			saveMatricula()
		})
	}

	function btnSenha(){
		const btnPassword = document.createElement("button")
		btnPassword.innerHTML = "Senha"
		btnPassword.classList.add("btnInput")
		taskBar.appendChild(btnPassword)
		btnPassword.addEventListener("click",()=>{
			window.open("/registro_controle_academico/cadastroSenhaAd.php", "_self")
			saveMatricula()
		})
	}

	function fillArea(){
		const result = document.querySelector(".tabela_relatorio")
		if(result == null){
			const delay = 500
			setTimeout(function(){
				const area_matricula = document.querySelector("#alun_matricula")
				const area_matricula_opc = document.querySelector("#txt_numero_matricula")
				const insert_matricula = document.querySelector("#txtMatricula")
				const fill_matricula = document.querySelector("#btn_filtrar")
				const fill_matricula_opc = document.querySelector("#botao_busca_pessoa")
				if(area_matricula_opc == null){
					area_matricula.value = insert_matricula.value
					fill_matricula.click()
				}else{
					area_matricula_opc.value = insert_matricula.value
					fill_matricula_opc.click()
				}
			},delay);
		}
	}
	
}

