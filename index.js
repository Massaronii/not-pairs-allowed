/*nao são permitidos pares

para cada palavra em uma lista de palavras, se quaisquer dois caracteres adjacentes forem iguais, altere um deles. determine o numero minimo de substituições para que a sequencia final nao contenha caracteres adjacentes iguais.

exemplo
palavra = ["add", "boook", "break"]

1 "add" alterar um d (1 alteração)
2 "book alterar um o (1 alteração)
3 break nenhuma alteração é necessaria (0 alteração)

a matriz de terono é [1,1,0]

descrição da função 

complete a função minimalOperations no editor abaixo

minimalOperations tem os seguintes paraemtros
string words[n] : uma matriz de strings

retornos 
Int[n]: cada elemento i é o minimo de substituições para words[i]

formato ed entrada para testes 
 a entrada de stdin sera processada da seguinte forma e passada para a função

a primeira linha contem um inteiro n, o tamanho do array words

cada uma das proximas n linhas contem uma string words[i]

caso de amostrea 0

entrada

parametros 
5 -> palavras[] tamanho = 5
ab -> palavras[] = ["ab", "aab", "abb", "abab", "abaaaba"]
aab
abb
abab
abaaaba

saida 
0
1
1
0
1

explicação

words = ab ja é aceitavel, entao 0 substrituições sao necessarias.
palavras - aab substitua um a por um caractere apropriado, entao 1 substituição

words = abb nao e aceitavel. substitua um b por um caractere apropriado, novamente 1 substituição
words = "abab" ja e aceitavel, entao nao sao necessarias substituições
palavras = abaaaba nao e aceitavel. substitua o a do meio em aaa. 1 substituição

a matriz de retorno é [0,1,1,0,1
] */

// index.js

function notPairsAllowed(words) {


  //varíavel para armazenar resultado
  const result = []

  //iteração de cada letra da palavra
  for (let word of words) {

    //varíavel que vai mandar para o resultado começando com 0 porque não houve nenhuma substituição ainda
    let substitutions = 0

    //-1 para não estourar o limite da string
    for (let count = 0; count < word.length - 1; count++) {

      //verificar o atual com o da frente
      if (word[count] === word[count + 1]) {

        //soma o resultado caso entre no if
        substitutions++

        //pular um caracter para nao evita duplicidade na contagem caso entre no if
        count++
      }
    }

    result.push(substitutions)
  }

  //retorna o resultado
  return result
}

console.log(notPairsAllowed(["ab", "aab", "abb", "abab", "abaaaba"])) // resultado 0, 1, 1, 0, 1

console.log(notPairsAllowed(["add", "boook", "break"]))
//resultado 1,1,0
