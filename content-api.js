const matricula_padrao = 2020;

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
