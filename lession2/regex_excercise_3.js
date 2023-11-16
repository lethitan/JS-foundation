let number = 188880000;
console.log(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','));
