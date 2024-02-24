import readlineSync from 'readline-sync';

const calculator = {
    read() {
      const NumA = readlineSync.question('Num a =? ');
      calculator.a = Number(NumA);
      const NumB = readlineSync.question('Num b =? ');
      calculator.b = Number(NumB);
    },
    sum() {
      calculator.summ = (this.a + this.b);
    },
    mul() {
      calculator.mulll = (this.a * this.b);
    }
  }