"use strict";
// alert("Hello");
//var name = Array("admin","user1","user2");
//var message = Array("good", "bad", "so_so");
//var email = Array("list", "mail", "bk");
//var ktel = Array("53","58","56");
//var user1 =[]
//name[0]
//message[0]
//email[0]
//ktel[0]
//var user2 =[]
(function() {
  var d = document,
    inp = d.getElementsByClassName('form-control'),
    mas = [];

  function save() {
    for (var i = 0; i < inp.length; i++) {
      mas[i] = inp[i].value;
    }
    console.log(mas);
  }
  save();
})();


function valid(){
var name = document.getElementById("name");
var article = document.getElementById("article");
var mail = document.getElementById("mail");
var tel = document.getElementById("tel");

var errorName = document.getElementById("errorName");
var errorArticle = document.getElementById("errorArticle");
var errorMail = document.getElementById("errorMail");
var errorTel = document.getElementById("errorTel");
var onvalid = true;
	if(name.value ==""){
		onvalid = false;
		name.className += " invalid";
		errorName.className = "error-on";
	} else{
		name.className = "form-control";
		errorName.className = "error-off"
	}
	if(article.value ==""){
		article.className += " invalid";
		errorArticle.className = "error-on"
	} else{
		article.className = "form-control";
		errorArticle.className = "error-off"
	}
	if(mail.value ==""){
		mail.className += " invalid";
		errorMail.className = "error-on"
	} else{
		mail.className = "form-control";
		errorMail = "error-off"
	}
	if(tel.value ==""){
		tel.className += " invalid";
		errorTel.className = "error-on"
	} else{
		tel.className = "form-control";
		errorTel = "error-off"
	}
	alert("Добавить")
	return onvalid;
}
var d = new Date();
var date  = document.getElementById("date_now");//автомотически выводится дата сегодняшняя
	date.value = d.getDate()+"."+d.getMonth()+1+"."+d.getFullYear();
