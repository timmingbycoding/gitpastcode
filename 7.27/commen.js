function my$(id){
	return document.getElementById(id);
}
// function firstElementChild(){
// 	if(firstElementChild){
// 		return this.firstElementChild;
// 	}else{
// 		this.firstChild;
// 	}
// }
function addEventListener(element,type,funName){
	if(element.addEventListener){
		element.addEventListener(type,funName,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,funName);
	}else{
		element["on"+type]=funName;
	}
}
function removeEventListener(element,type,funName){
	if(element.removeEventListener){
		element.removeEventListener(type,funName,false);
	}else if(element.detachEvent){
		element.detachEvent("on"+type,funName);
	}else{
		element["on"+type]=null;
	}
}
function setInnerText(element, text) {
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}