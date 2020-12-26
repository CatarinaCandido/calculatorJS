
var num1;
var result;
var operationReady;
var operation;
var power = false;

 function num (number) {

     if(operationReady !== true && power === true ){
         result = document.getElementById('screen').value += number
     } else if(operationReady ===true && power === true){
         num1=document.getElementById('screen').value += number
     }
}

function cleanScreen() {
    document.getElementById('screen').value = ''
}

function operationType(operator) {
    operationReady= true;
    cleanScreen();
    operation = operator
}

function equal(){

     switch (operation) {

         case '+':

             result = (parseInt(result)+parseInt(num1))
             document.getElementById('screen').value = result
             num1 = null;
             break;

         break;
         case '/':
             result = (parseInt(result)/parseInt(num1))
             document.getElementById('screen').value = result
             num1 = null;
             break;

         case '*':
             result = (parseInt(result)*parseInt(num1))
             document.getElementById('screen').value = result
             num1 = null;
             break;
         case '-':
             result = (parseInt(result)-parseInt(num1))
             document.getElementById('screen').value = result
             num1 = null;
             break;
     }

     if(document.getElementById('screen').value === 'NaN'){
         document.getElementById('screen').value = ' !Error!'
     }

}

function powerOff() {

     setTimeout(function () {
         document.getElementById('screen').value = ''
     },2000)

    if(power == false){
        document.getElementById('screen').value = ' Welcome!'
        power = true

    } else{
        document.getElementById('screen').value = 'Goodbye!'
        power = false

    }


}

function resetCalculator() {

     num1 = null;
     result = null;
     operationReady = null;
     cleanScreen()
}