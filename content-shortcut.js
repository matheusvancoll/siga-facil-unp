validatePlugin()


function validatePlugin(){
	const taskBar = document.querySelector("#espaco_1")
	if( taskBar != null ){
		const txtMatricula = document.createElement("input")
		const btnFichaAcademica = document.createElement("button")
		const btnSenha = document.createElement("button")
		const btnHistorico = document.createElement("button")
		const btnFichaFinanceira = document.createElement("button")
		const btnRematricula = document.createElement("button")
		const btnAjusteMatricula = document.createElement("button")
		const btnNovoRequerimento = document.createElement("button")
		const btnVerRequerimento = document.createElement("button")
		const btnTrocaTurma = document.createElement("button")
		const btnDadosCadastrais = document.createElement("button")
		
		startShortcuts()
		
		function startShortcuts(){
			insertInput(txtMatricula)
			insertBtn(btnFichaAcademica, "Ficha Acadêmica", "/registro_controle_academico/fichaAcademica.php")
			insertBtn(btnDadosCadastrais, "Cadastro", "/registro_controle_academico/cadastroAluno.php")
			insertBtn(btnSenha, "Senha", "/registro_controle_academico/cadastroSenhaAd.php")
			insertBtn(btnHistorico, "Histórico", "/registro_controle_academico/consultaHistoricoOficial.php")
			insertBtn(btnRematricula, "Rematricula", "/registro_controle_academico/rematricula.php")
			insertBtn(btnAjusteMatricula, "Ajuste de matrícula", "/registro_controle_academico/ajuste.php")
			insertBtn(btnTrocaTurma, "Troca Turma", "/registro_controle_academico/trocaTurmas.php")
			insertBtn(btnFichaFinanceira, "Ficha Financeira", "/financeiro/fichaFinanceira.php")
			insertBtn(btnNovoRequerimento, "Novo Requerimento", "/registro_controle_academico/registroRequerimento.php")
			insertBtn(btnVerRequerimento, "Ver Requerimento", "/registro_controle_academico/acompanhamentoRequerimento.php")
			fillArea()
			
			function insertInput(inputName){
				inputName.classList.add("txtInput")
				inputName.id = "txtMatricula"
				taskBar.appendChild(inputName)	
			}
		
			function insertBtn(btnName, viewName, link, type){
				btnName.innerHTML = viewName
				btnName.classList.add("btnInput", type)
				taskBar.appendChild(btnName)
				btnName.addEventListener("click",()=>{
					window.open(link, "_self")
					saveMatricula()
				})
			}
		
			function fillArea(){
				const result = document.querySelector(".tabela_relatorio")
				if(result == null){
					const delay = 500
					setTimeout(function(){
						const area_matricula = document.querySelector("#alun_matricula")
						const area_cpf = document.querySelector("#pess_cpf")
						const area_matricula_data = document.querySelector("#txt_numero_matricula")
						const area_cpf_data = document.querySelector("#txt_cpf")
						const area_matricula_requerimento = document.querySelector("#alun_matricula_filtro")
						const area_cpf_requerimento = document.querySelector("#cpf_aluno_filtro")
						
						const insert_matricula = document.querySelector("#txtMatricula")
						const insert_size = insert_matricula.value.length
						
						const fill_matricula = document.querySelector("#btn_filtrar")
						const fill_matricula_data = document.querySelector("#botao_busca_pessoa")
						
						if ( area_matricula_requerimento != null ) {
							if(insert_size > 10){
								area_cpf_requerimento.value = insert_matricula.value
							}else{
								area_matricula_requerimento.value = insert_matricula.value
							}

							fill_matricula.click()
						}
		
						if ( area_matricula_data != null ) {
							if(insert_size > 10){
								area_cpf_data.value = insert_matricula.value
							}else{
								area_matricula_data.value = insert_matricula.value
							}
							fill_matricula_data.click()
						}
		
						if ( area_matricula != null ) {
							if(insert_size > 10){
								area_cpf.value = insert_matricula.value
							}else{
								area_matricula.value = insert_matricula.value
							}
							fill_matricula.click()
						}
						
					},delay);
				}
				
			}
			
		}
	}
}


