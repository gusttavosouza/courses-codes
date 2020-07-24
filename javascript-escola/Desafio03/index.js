let input = 3124;
let output = '';
let variable = 0;
let caracterPrev = '';

variable = input / 1000;
if(Math.trunc(variable) > 0){
  for( let i = 0; i < Math.trunc(variable); i++){
    output += 'M';
  }
  input = input - (Math.trunc(variable)*1000);
}
caracterPrev = 'M';

variable = input / 500;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'DM'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'D';
    }
  }
  input = input - (Math.trunc(variable)*500);
}
caracterPrev = 'D';

variable = input / 100;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'CD'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'C';
    }
  }
  input = input - (Math.trunc(variable)*100);
}
caracterPrev = 'C';

variable = input / 50;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'LC'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'L';
    }
  }
  input = input - (Math.trunc(variable)*50);
}
caracterPrev = 'L';

variable = input / 10;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'XL'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'X';
    }
  }
  input = input - (Math.trunc(variable)*10);
}
caracterPrev = 'X';

variable = input / 5;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'VX'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'V';
    }
  }
  input = input - (Math.trunc(variable)*5);
}
caracterPrev = 'V';

variable = input / 1;
if(Math.trunc(variable) > 0){
  if(Math.trunc(variable) > 3){
    output += 'IV'
  }else{
    for( let i = 0; i < Math.trunc(variable); i++){
      output += 'I';
    }
  }
  input = input - (Math.trunc(variable)*1);
}
console.log(output)
console.log(input)