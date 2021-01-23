const taskBar = document.querySelector("#espaco_1")

startShortcuts()

function startShortcuts(){
	inputMatricula()
	btnFichaAcademica()
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
		
		if(btnFichaAcademica.click){
			alert('marrapazzzz')
		}

		//btnFichaAcademica.addEventListener("click",()=>{
		//	alert('click')
			//window.open("/registro_controle_academico/fichaAcademica.php", "_self")
		//}}
	}
	
	//HISTÓRICO
	const btnHistorico = document.createElement("button")
	btnHistorico.innerHTML = "Histórico"
	btnHistorico.classList.add("btnInput")
	taskBar.appendChild(btnHistorico)
	
	btnHistorico.addEventListener("click",()=>{
		window.open("/registro_controle_academico/consultaHistoricoOficial.php", "_self")
	})
	
	//Botão para FICHA FINANCEIRA
	const btnFichaFinanceira = document.createElement("button")
	btnFichaFinanceira.innerHTML = "Ficha Financeira"
	btnFichaFinanceira.classList.add("btnInput")
	taskBar.appendChild(btnFichaFinanceira)
	
	btnFichaFinanceira.addEventListener("click",()=>{
		window.open("/financeiro/fichaFinanceira.php", "_self")
	})
	
	//Botão para REMATRÍCULA
	const btnRematricula = document.createElement("button")
	btnRematricula.innerHTML = "Rematrícula"
	btnRematricula.classList.add("btnInput")
	taskBar.appendChild(btnRematricula)
	
	btnRematricula.addEventListener("click",()=>{
		window.open("/registro_controle_academico/rematricula.php", "_self")
	})
	
	//NOVO REQUERIMENTO
	const btnNovoRequerimento = document.createElement("button")
	btnNovoRequerimento.innerHTML = "Novo Requerimento"
	btnNovoRequerimento.classList.add("btnInput")
	taskBar.appendChild(btnNovoRequerimento)
	
	btnNovoRequerimento.addEventListener("click",()=>{
		window.open("/registro_controle_academico/registroRequerimento.php", "_self")
	})
	
	//VER REQUERIMENTO
	const btnVerRequerimento = document.createElement("button")
	btnVerRequerimento.innerHTML = "Ver Requerimento"
	btnVerRequerimento.classList.add("btnInput")
	taskBar.appendChild(btnVerRequerimento)
	
	btnVerRequerimento.addEventListener("click",()=>{
		window.open("/registro_controle_academico/acompanhamentoRequerimento.php", "_self")
	})





















	function btnFill(){
		const btnFill = document.createElement("button")
		btnFill.innerHTML = "Preencher"
		btnFill.classList.add("btnInput")
		taskBar.appendChild(btnFill)
		btnFill.addEventListener("click",()=>{
			fillArea()
		})

		function fillArea(){
			const area_matricula = document.querySelector("#alun_matricula")
			const insert_matricula = document.querySelector("#txtMatricula")
			const fill_matricula = document.querySelector("#btn_filtrar")
	
			area_matricula.value = insert_matricula.value
			fill_matricula.click()
		}
		
	}




}

