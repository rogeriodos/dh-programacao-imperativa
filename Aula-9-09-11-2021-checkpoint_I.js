/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

// Valores padrões para preparar cada refeição (em segundos)
let pipoca = 1
let tempoPipoca = 10

let macarrao = 2
let tempoMacarrao = 8

let carne = 3
let tempoCarne = 15

let feijao = 4
let tempoFeijao = 12

let brigadeiro = 5
let tempoBrigadeiro = 8

//Variáveis de seleção do usuário
let opcaoComida = 0
let tempoPreparo = 0

function menu(opcaoComida, tempoPreparo) {
  console.log(' --------------------------------------------------------- ')
  console.log('|              Microondas em Funcionamento!               |')
  console.log(' --------------------------------------------------------- ')
  console.log('|                                                         |')
  console.log('| Opções de Comida.                                       |')
  console.log('|                                                         |')
  console.log('|   1 - Pipoca                                            |')
  console.log('|   2 - Macarrão                                          |')
  console.log('|   3 - Carne                                             |')
  console.log('|   4 - Feijão                                            |')
  console.log('|   5 - Brigadeiro                                        |')
  console.log('|                                                         |')
  console.log('| A opção escolhida foi: ' + opcaoComida + '              |')
  console.log('| Tempo de preparo escolhido ' + tempoPreparo + '         |')
  console.log('                                                          |')

  switch (opcaoComida) {
    case 1:
      if (tempoPreparo < tempoPipoca) {
        console.log('Tempo Insuficiente!')
      } else if (
        tempoPreparo >= tempoPipoca * 2 &&
        tempoPreparo < tempoPipoca * 3
      ) {
        console.log('A comida queimou!')
      } else if (tempoPreparo >= tempoPipoca * 3) {
        console.log('Kabumm!')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break

    case 2:
      if (tempoPreparo < tempoMacarrao) {
        console.log('Tempo Insuficiente!')
      } else if (
        tempoPreparo >= tempoMacarrao * 2 &&
        tempoPreparo < tempoMacarrao * 3
      ) {
        console.log('A comida queimou!')
      } else if (tempoPreparo >= tempoMacarrao * 3) {
        console.log('Kabumm!')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break
    case 3:
      if (tempoPreparo < tempoCarne) {
        console.log('Tempo Insuficiente!')
      } else if (
        tempoPreparo >= tempoCarne * 2 &&
        tempoPreparo < tempoCarne * 3
      ) {
        console.log('A comida queimou!')
      } else if (tempoPreparo >= tempoCarne * 3) {
        console.log('Kabumm!')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break
    case 4:
      if (tempoPreparo < tempoFeijao) {
        console.log('Tempo Insuficiente!')
      } else if (
        tempoPreparo >= tempoFeijao * 2 &&
        tempoPreparo < tempoFeijao * 3
      ) {
        console.log('A comida queimou!')
      } else if (tempoPreparo >= tempoFeijao * 3) {
        console.log('Kabumm!')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break
    case 5:
      if (tempoPreparo < tempoBrigadeiro) {
        console.log('Tempo Insuficiente!')
      } else if (
        tempoPreparo >= tempoBrigadeiro * 2 &&
        tempoPreparo < tempoBrigadeiro * 3
      ) {
        console.log('A comida queimou!')
      } else if (tempoPreparo >= tempoBrigadeiro * 3) {
        console.log('Kabumm!')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break
    default:
      console.log('Prato inexistente.')
      break
  }
}

menu(1, 10)
