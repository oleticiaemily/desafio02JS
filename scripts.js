let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual o valor da primeira prova?")
let n2 = prompt("Qual o valor da segunda prova?")

let average = (Number(n1) + Number(n2)) / 2

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average + ". Você foi aprovado(a) na disciplina!")
} else {
  alert(student + " , estude para sua prova de recuperação! Sua média foi de: " + average)
}


