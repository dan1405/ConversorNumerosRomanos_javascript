const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const inputNumber = document.getElementById("number"); 

function printResult(){

//let num = inputNumber.value;

convertToRoman(inputNumber.value);

if (inputNumber.value > 0)  {
  output.innerText = convertToRoman(inputNumber.value);
  }  
if (inputNumber.value == 0){
  output.innerText = "Please enter a valid number"
}
if (inputNumber.value < 0){
  output.innerText = "Please enter a number greater than or equal to 1";  
  } 
if (inputNumber.value >= 4000){
  output.innerText = "Please enter a number less than or equal to 3999";
}
}

const convertToRoman = (num)=>{

let romanNumeral = '';

let romanNumbers = [
  [1000, 'M'], 
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

for (let i = 0; i < romanNumbers.length; i++){
  while (num >= romanNumbers[i][0]){
    romanNumeral += romanNumbers[i][1];
    num -= romanNumbers[i][0]
   }
  }

  return romanNumeral;
}

//console.log(convertToRoman(48));
convertBtn.addEventListener("click", printResult);

