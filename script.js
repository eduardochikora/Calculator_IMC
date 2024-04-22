let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let res = document.getElementById('res')
let resultado = document.getElementById('result')
let descricao = document.getElementById('descricao')

function calcularIMC() {

    res.style.display = 'flex'
    let imc = (peso.value / (altura.value * altura.value)).toFixed(1)
    resultado.innerText = imc

    if (peso.value == '' || altura.value == '') {
        alert('[ERRO] Informe seu peso e altura')
        res.style.display = 'none'
    }
    if (isNaN(imc)) {
        resultado.innerText = '0'
        descricao.innerText = 'Valor inválido'
    }
    if (imc <= 16.9) {
        descricao.innerText = 'Muito abaixo do peso'
        descricao.style.color = 'yellow'
    }
    if (imc >= 17 && imc <= 18.4) {
        descricao.innerText = 'Abaixo do peso'
        descricao.style.color = 'yellow'
    }
    if (imc >= 18.5 && imc <= 24.9) {
        descricao.innerText = 'Peso normal'
        descricao.style.color = 'green'
    }
    if (imc >= 25 && imc <= 29.9) {
        descricao.innerText = 'Acima do peso'
        descricao.style.color = 'orange'
    }
    if (imc >= 30 && imc <= 34.9) {
        descricao.innerText = 'Obesidade grau I'
        descricao.style.color = 'red'
    }
    if (imc >= 35 && imc <= 40) {
        descricao.innerText = 'Obesidade grau II'
        descricao.style.color = 'red'
    }
    if (imc > 40) {
        descricao.innerText = 'Obesidade grau III'
        descricao.style.color = 'red'
    }
}
