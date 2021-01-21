const matricula_padrao = 0;

onExtensionInstalled(setInitial);

function setInitial(){
	setInitialActive();
	setInitialMatricula();
}
async function setInitialActive(){
	const active = await getActive();
	if(active == null) await setActive(true);
}

async function setInitialMatricula(){
	const matricula = await getMatricula();
	if(matricula == null) await setMatricula(matricula_padrao);
}