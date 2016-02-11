"use strict"

function valid(){//используя функцию подключаем валидацию(проверяем все ли поля заполнены)
	//alert('Helo');
	var title = document.getElementById('_title');
	var article = document.getElementById('article');
	var autor = document.getElementById('autor');
	var date = document.getElementById('date_now');

	var errorTitle = document.getElementById("errorTitle");
	var errorArticle = document.getElementById("errorArticle");
	var errorAutor = document.getElementById("errorAutor");
	var onvalid = true;
	if(title.value ==""){
		onvalid = false;
		title.className += " invalid";
		errorTitle.className = "error-on";
	} else{
		title.className = "form-control";
		errorTitle.className = "error-off"
	}
	if(article.value ==""){
		article.className += " invalid";
		errorArticle.className = "error-on"
	} else{
		article.className = "form-control";
		errorArticle.className = "error-off"
	}
	if(autor.value ==""){
		autor.className += " invalid";
		errorAutor.className = "error-on"
	} else{
		autor.className = "form-control";
		errorAutor = "error-off"
	}
	alert("Добавить")
	return onvalid;
}
var d = new Date();
var date  = document.getElementById("date_now");//автомотически выводится дата сегодняшняя
	date.value = d.getDate()+"."+d.getMonth()+1+"."+d.getFullYear();

var gender=new Array("мужчина","женщина","другой");//массив значений
var pol=document.getElementById("gender");
for(var i=0; i<=gender.length; i++){
	if(0==i)pol.options[i]=new Option("","",true,false);
	pol.options[i]=new Option(gender[i-1],i-1,false,false);
}
var divs = document.getElementsByTagName("div");//присваиваем и обращаемся к тегам див
document.getElementById("poisk").innerHTML="В документе "+divs.length+" тегов \"div\"";//записываем их в html документ
var n=0;
	for (var i = 0; i < divs.length; i++){
		if (divs[i].hasAttribute("class")) n++;//считаем сколько тегов див и сколько классов в документе
}
document.getElementById("poisk2").innerHTML="Из них имеют класс "+n;//записываем результат в html на странице

	
 