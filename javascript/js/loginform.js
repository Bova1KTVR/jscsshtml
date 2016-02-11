
function valid(){
	//alert('Helo');
	var login = document.getElementById('login');
	var pass = document.getElementById('pwd');
	if(login.value ==""){
		alert('Вы не ввели логин!')
		return false;
	}
	if(pass.value ==""){
		alert("Вы не ввели пароль!");
		return false;
	}
	alert("Ура вы можете быть авторизированны!")
	return true;
}