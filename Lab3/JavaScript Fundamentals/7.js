//1---------------------------------
if ("0") {
    alert( 'Привет' );
  } //true because "" not empty
  

//2----------------------------------
let compamy = prompt('Какое "официальное" название JavaScript?','') ;

if(company == 'ECMAScript' ){
    alert('Верно!');
} else {
    alert('Не знаете? “ECMAScript”!');
}

//3------------------------------------

let number=prompt('Enter the number','');

if(number > 0){
    alert(1);
} else if( number < 0){
    alert(-1);
} else {
    alert(0);
}

//4---------------------------------------
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4) ? 'small' : 'many' ;

//5-------------------------------------------
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}


let message1 = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина': 
    '';
