function onExtensionInstalled(listener){
	chromeRuntimeOnInstalledAddListener(listener);
}

function getActive(){
	return chromeStorageLocalGet('active');
}

function setActive(activeValue){
	return chromeStorageLocalSet({active: activeValue});
}

function getMatricula(){
	return chromeStorageLocalGet('matricula');
}

function setMatricula(matriculaValue){
	return chromeStorageLocalSet({ matricula: matriculaValue});
}

//chrome functions

function chromeRuntimeOnInstalledAddListener(listener){
	chrome.runtime.onInstalled.addListener(listener);
}

/**
 * 
 * @param {string} key
 */
function chromeStorageLocalGet(key){
	return new Promise((resolve) =>
	chrome.storage.local.get([key], (result) => {
		resolve(result[key]);
		})
	);
}

/**
 * 
 * @param {object} {key: value} object
 */
function chromeStorageLocalSet(object){
	return new Promise ((resolve) => chrome.storage.local.set(object, resolve));
}


