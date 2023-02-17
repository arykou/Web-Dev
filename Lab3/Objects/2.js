//1------------
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); // John

//2----------------
let calc = {
    read() {
        this.a = +(prompt('num1?',0));
        this.b = +(prompt('num2?',0));
    },

    sum(){
        return this.a+this.b;
    },

    mul(){
        return this.a*this.b;
    }
}

calc.read();
alert(calc.sum());
alert(calc.mul());

//3---------------------

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
};
  
ladder.up().up().down().showStep().down().showStep();