const matricula_padrao = "";

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
	if(matricula == 0) await setMatricula(matricula_padrao);
}