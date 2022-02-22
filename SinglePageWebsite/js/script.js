function addData(){
	var firstname=document.getElementById('firstname').value;
	var lastname=document.getElementById('lastname').value;
	var address=document.getElementById('address').value;
 
	if(firstname =="" || lastname =="" || address==""){
		alert("Please enter something first!");
	}else{
		var html="";
 
		html="<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+address+"</td></tr>";
 
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('firstname').value="";
		document.getElementById('lastname').value="";
		document.getElementById('address').value="";
	}
 
}