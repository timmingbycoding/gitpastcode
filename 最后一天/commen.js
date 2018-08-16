function my$(id){
	return document.getElementById(id);
}

function  addEventListener(element,type,funName){
	if(element.addEventListener){
		element.addEventListener(type,funName,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,funName);
	}else{
		element["on"+type]=funName;
	}
}
function  removeEventListener(element,type,funName){
	if(element.removeEventListener){
		element.removeEventListener(type,funName,false);
	}else if(element.detachEvent){
		element.detachEvent("on"+type,funName);
	}else{
		element["on"+type]=null;
	}
}
function setInnerText(element,str){
	if(typeof(element.textContent)=="undefined"){
		element.innerText=str;
	}else {
        element.textContent = str;
    }
}



function standardMove(element,target){
	var step=2;
	var locationX=element.offsetLeft;
	step=locationX<target?step:-step;
	element.timeMove=setInterval(function(){
		locationX+=step;
		if(Math.abs(locationX-target)>Math.abs(step)){
			element.style.left=locationX+"px";	
		}else{
			clearInterval(element.timeMove);
			element.style.left=target+"px";
		}
	},10)
}