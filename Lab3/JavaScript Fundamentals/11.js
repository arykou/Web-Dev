//2--------------------------------

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}

function checkAge(age){
    return(age>18) ? true :confirm('Родители разрешили?');
}

function cheackAge(age){
    return(age > 18) || confirm('Родители разрешили?');
}

//3------------------------------------

function min(num1, num2){
    if(num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

//4---------------------------


function pow(n,b){
    let result = n;

    for( let i=1; i < b; i++){
        result*=n;
    }

    return result;
}

if(b < 1 ){
    alert(`${b} not right`);
} else {
    alert(pow(n,b));
}