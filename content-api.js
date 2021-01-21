const matricula_padrao = 0;

const state = {
    active: null,
    matricula: null
};

async function activate(){
    state.active = await getActive();
    if(!state.active) return;

    state.matricula = await getMatricula();
}
