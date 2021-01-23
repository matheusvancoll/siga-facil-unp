const matricula_padrao = "";

const state = {
    active: null,
    matricula: null
};

(function(){
    activate()
})()

async function activate(){
    state.active = await getActive();
    if(!state.active) return;
    
    state.matricula = await getMatricula();
    alun_matricula = state.matricula;
    
    const campoAluno = document.querySelector("#txtMatricula")
    campoAluno.value = alun_matricula
}

function saveMatricula(){
    alterMatricula()
}

async function alterMatricula(){
    const newMatricula = document.querySelector("#txtMatricula")
    await setMatricula(newMatricula.value)
}
