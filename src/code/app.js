const counter = {
  number: 0,
  increase() {
  setInterval(() => console.log(++this.number), 1000);
  }
};

const counter2 = {
  number: 0,
  increase() {
  setInterval(function(){ console.log(++this.number)}, 500);
  } 
};

const counter3 = {
  number: 0,
  increase() {
  setInterval(function(){ console.log(++this.number)}.bind(this), 500);
  } 
};
