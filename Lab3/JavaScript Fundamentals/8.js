//1--------------------------------------------
alert( null || 2 || undefined ); // 2 -> true
alert( alert(1) || 2 || alert(3) ); // 1 then 2 
alert( 1 && null && 2 ); // null -> false
alert( alert(1) && alert(2) ); // 1 then undefined
alert( null || 2 && 3 || 4 ); // 3($$-first, ||-second)

//2-----------------------------------------------

if(age >=14 && age <= 90);

//3------------------------------------------------

if( age < 14 || age > 90);
if(!(age >=14 && age <= 90));

//4----------------------------------------------

if (-1 || 0) alert( 'first' ); // yes -1 -> true
if (-1 && 0) alert( 'second' ); // no , 0 - false
if (null || -1 && 1) alert( 'third' );// yes -1 && 1 = 1 

//5--------------------------------------------------

let question = prompt('Кто там?','')

if(question === '' || question === null){
    alert('Отменено');
    
} else if(question === 'Админ'){

    let login = prompt('Пароль?','');

    if (login === 'Я Главный'){
        alert('Здравствуйте!');
    } else if (login === '' || login === null){
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else {
    prompt('Я вас не знаю');
}