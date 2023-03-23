const biscoito = document.getElementById("biscoitoaberto");
const biscoito2 = document.getElementById("biscoitofechado");
const biscoito1 = document.getElementById("biscoito1");
const botao = document.querySelector("button")

const frases = [
'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
'A vida trará coisas boas se tiver paciência.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda',
'A juventude não é uma época da vida, é um estado de espírito.',
'Siga os bons e aprenda com eles.',
'A adversidade é um espelho que reflete o verdadeiro eu.',
'Sem o fogo do entusiasmo, não há o calor da vitória',
'Espere pelo mais sábio dos conselhos: o tempo',
'Todas as coisas são difíceis antes de se tornarem fáceis',
'Se você se sente só é porque construiu muros ao invés de pontes',
'Vencer é 90 por cento suor e 10 por cento de engenho.',
'O amor está sempre mais próximo do que você imagina',
'Você é do tamanho do seu sonho.',
'O conhecimento é a única virtude e a ignorância é o único vício',
'Deixe de lado as preocupações e seja feliz.',
'A vontade das pessoas é a melhor das leis',
'A maior barreira para o sucesso é o medo do fracasso',
'Acredite em milagres, mas não dependa deles',
'Você sempre será a sua melhor companhia',
'Realize o óbvio, pense no improvável e conquiste o impossível.',
]

function frasebiscoito(){
  let fraseselecionada = Math.floor(Math.random() * 20 + 1)
  return fraseselecionada
}
biscoito1.addEventListener('click',function(){
  biscoito.classList.toggle("hide")
  biscoito2.classList.toggle("hide")
})

botao.addEventListener("click",function(){
  document.location.reload(true);
})

  document.getElementById ("troca").innerHTML=(frases[frasebiscoito()])
 


