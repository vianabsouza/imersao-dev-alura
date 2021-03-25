var primeiroValor = parseInt(prompt("Digite o primeio valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite: 1 para divisão, 2 para multiplicação, 3 para soma ou 4 para subtração")

if (operacao == 1) {
  var resultado = primeiroValor / segundoValor
  document.write(" <h2> " + primeiroValor + " / " + segundoValor + " = " + resultado + " </h2> ")
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write(" <h2> " + primeiroValor + " x " + segundoValor + " = " + resultado + " </h2> ")
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write(" <h2> " + primeiroValor + " + " + segundoValor + " = " + resultado + " </h2> ")
} else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write(" <h2> " + primeiroValor + " - " + segundoValor + " = " + resultado + " </h2> ")
} else {
  document.write("<h2> Opção inválida </h2>")
}