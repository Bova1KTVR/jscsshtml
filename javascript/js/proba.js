function valid(){
//alert('Helo');
	var title = document.forms["Myform"]["title"].value;
	if (title == null||title == "")
		console.log("Пустой заголовок")
	var title = title.getAttribute("required")
	var title = title.setAttribute("max",10)	

}