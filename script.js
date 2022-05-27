const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');

console.log(btnLimpar);
function checaValores(...args){
    return args? true : false;
}
function classificaImc(imc){
    let detalhe = '';

if (imc<18.5){
    detalhe = 'Abaixo do peso';
}else if(imc >= 18.5 & imc < 25){
    detalhe = 'Peso normal'; 
}else if(imc >= 25 & imc < 30){
    detalhe = 'Sobrepeso';
}else if (imc >= 30 & imc < 40){
    detalhe = 'Obesidade'
}else{
    detalhe = 'Obesidade grave';
}
return detalhe;
}
function calcularImc(){
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#altura').value);
    console.log(peso,altura);
    if(checaValores(peso,altura)){
        let sqrtAltura = altura * altura;
        let imc = (peso/sqrtAltura).toPrecision(4);
        let resultado = document.querySelector('#resultado')
        resultado.textContent = 'Seu IMC atual é: '+ imc + '-' + classificaImc(imc);
    }else{
        resultado.textContent = 'Calcule seu IMC.'
    };
}
function limparCampos(){
    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');
    peso.textContent = '';
    altura.textContent = '';
}
btnCalcular.addEventListener('click', calcularImc);
btnLimpar.addEventListener('click', limparCampos);