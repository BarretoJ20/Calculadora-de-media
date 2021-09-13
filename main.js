var primeiraNota = parseFloat(document.getElementById('n1').value)
var segundaNota = parseFloat(document.getElementById('n2').value)

function notaFinal() {
  var notaFinal
  var n1 = parseFloat(document.getElementById('n1').value)
  var n2 = parseFloat(document.getElementById('n2').value)

  notaFinal = (n1 + n2) / 2
  console.log(n1 + n2) / 2

  if (notaFinal >= 7)
    alert('Parabéns, você foi aprovado com média ' + notaFinal)
  if (notaFinal < 7)
    alert(
      'Infelizmente você não atingiu a média mínima 7. Sua média foi: ' +
        notaFinal
    )
}
