//Jason Fleischer
window.onload = function(){
	var hashLoc = window.location.hash;
	if(hashLoc.length>0){ 
	   	if(hashLoc=="#home"){
			homePage(); 	
		}else if(hashLoc=="#resume"){
			resumePage();	
		}
	}
}
function homePage(){
	document.getElementById("aboutM").className = "";
	document.getElementById("resumeM").className = "";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = 'block';

	document.getElementById('bioHeader').innerHTML = 'Click here to learn more about myself';
	document.getElementById('bioContent').style.display = 'none';
	document.getElementById("bs-example-navbar-collapse-1").className = "navbar-collapse collapse";		
}
function aboutPage(){
	document.getElementById("aboutM").className = "active";	
	document.getElementById("resumeM").className = "";	
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = 'none';

	document.getElementById('bioHeader').innerHTML = 'About myself:';
	document.getElementById('bioContent').style.display = 'block';	
	document.getElementById("bs-example-navbar-collapse-1").className = "navbar-collapse collapse";
}
function resumePage(){
	document.getElementById("aboutM").className = "";	
	document.getElementById("resumeM").className = "active";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'none';
	document.getElementById('resume').style.display = 'block';
	document.getElementById("bs-example-navbar-collapse-1").className = "navbar-collapse collapse";
}
function email(){
	document.getElementById("aboutM").className = "";
	document.getElementById("resumeM").className = "";
	document.getElementById("emailM").className = "active";
	document.getElementById("fbM").className = "";
	document.getElementById("bs-example-navbar-collapse-1").className = "navbar-collapse collapse";
}
function openFaceBook(){
	document.getElementById("aboutM").className = "";
	document.getElementById("resumeM").className = "";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "active";
	document.getElementById("bs-example-navbar-collapse-1").className = "navbar-collapse collapse";
}
function googleSearch(){
	if(document.getElementById('q').value.length>0)
		window.open("http://www.google.com/search?q="+document.getElementById('q').value);
}
function toggleBio(){
	if(document.getElementById('bioContent').style.display != 'none'){
		document.getElementById('bioHeader').innerHTML = 'Click here to learn more about myself';		
		document.getElementById('bioContent').style.display = 'none';
	}else{
		document.getElementById('bioHeader').innerHTML = 'About myself:';		
		document.getElementById('bioContent').style.display = 'block';			
	}
}
