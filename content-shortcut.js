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
		const btnSimulaParcela = document.createElement("button")
		const btnVaga = document.createElement("button")
		const btnLiberaSerie = document.createElement("button")
		const btnLiberaDisciplina = document.createElement("button")
		const btnDisciplinaObrigatoria = document.createElement("button")
		
		startShortcuts()
		
		function startShortcuts(){ // inicializando os elementos
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
			insertBtn(btnSimulaParcela, "Simular Parcela", "/financeiro/simulaGeracaoParcela.php")
			insertBtn(btnVaga, "Vaga", "/registro_controle_academico/cadastroTurma.php")
			insertBtn(btnLiberaSerie, "Libera Série", "/registro_controle_academico/autorizacaoSerie.php")
			insertBtn(btnLiberaDisciplina, "Libera Disciplina", "/registro_controle_academico/autorizacaoTurmaComponente.php")
			insertBtn(btnDisciplinaObrigatoria, "Disciplina Obrigatoria", "/registro_controle_academico/liberaDisciplinaObrigatoria.php")
			fillArea()
			
			function insertInput(inputName){ // insere o campo de inserção
				inputName.classList.add("txtInput")
				inputName.id = "txtMatricula"
				taskBar.appendChild(inputName)	
			}
		
			function insertBtn(btnName, viewName, link, type){ // insere cada botão
				btnName.innerHTML = viewName
				btnName.classList.add("btnInput", type)
				taskBar.appendChild(btnName)
				btnName.addEventListener("click",()=>{
					window.open(link, "_self")
					saveMatricula()
				})
			}
			
			function fillArea(){ // filtra os alunos de forma dinâmica
				const result = document.querySelector(".tabela_relatorio")
				if(result == null){
					const delay = 500
					setTimeout(function(){
						validateEnter()
					},delay);
				}
			}

			function validateEnter(){ // Valida o input do usuário
				const insert_input = document.querySelector("#txtMatricula")
				const insert_size = insert_input.value.length
				
				const area_fill_matricula = document.querySelector("#alun_matricula") // Retorna area de lista de alunos
				const area_fill_cpf = document.querySelector("#pess_cpf") // Input de filtro via CPF
							
				const area_matricula_data = document.querySelector("#txt_numero_matricula") // Input "dados cadastrais"
				const area_cpf_data = document.querySelector("#txt_cpf") // Input "dados cadastrais"
				const area_matricula_requerimento = document.querySelector("#alun_matricula_filtro") // Input "requerimentos"
				const area_cpf_requerimento = document.querySelector("#cpf_aluno_filtro") // Input "requerimentos"
							
				const fill_alun = document.querySelector("#btn_filtrar")
				const fill_alun_data = document.querySelector("#botao_busca_pessoa")
				
				function infoSize(size){ // retorna o tipo de dado
					if(size == 11){ return "CPF" }
					if(size == 9){ return "RA" }
				}

				function selectEnter(alun, cpf, btn, size){ // filtra o input de acordo com o tipo de elemento
					if(size == "RA"){
						alun.value = insert_input.value
						btn.click()
					}
					if(size == "CPF"){
						cpf.value = insert_input.value
						btn.click()
					}
				}

				if ( area_fill_matricula != null ) {
					selectEnter(area_fill_matricula, area_fill_cpf, fill_alun, infoSize(insert_size))
				}

				if ( area_matricula_requerimento != null ) {
					selectEnter(area_matricula_requerimento, area_cpf_requerimento, fill_alun, infoSize(insert_size))
				}
				
				if ( area_matricula_data != null ) {
					selectEnter(area_matricula_data, area_cpf_data, fill_alun_data, infoSize(insert_size))
				}
				
				if(infoSize(insert_size) == null){
					alert("Ops.. Houve um erro com o valor digitado!")
				}
			}

			
		}
	}
}


