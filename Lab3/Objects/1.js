//1----------
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;

//2----------------
function isEmpty(obj) {
    for (let key in obj) {
      // smt
      return false;
    }
    
    return true;
}
//3----------------------
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
  
alert(sum);

//4---------------------------

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu) ;{
    for (let key in menu) {
        if( typeof meny[key] == 'number'){
            menu[key] *= 2;
        }
    }
};

multiplyNumeric(menu);
  
// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};