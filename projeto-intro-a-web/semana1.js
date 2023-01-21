// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const Titulo= "Show de Truman"
const Ano= "30/10/1998"
const Direçao="Peter Weir"
const Duração="1h 43min"
const Elenco="Jim Carrey, Laura Linney, Natascha McElhone"
const Gênero="Drama, Comédia"
const Premição= true
const Idade=24

const sinopseTruman = "Sinopse: \nTruman Burbank (Jim Carrey) é um pacato vendedor de seguros que leva um vida simples com sua esposa Meryl Burbank (Laura Linney). Porém algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. \nApós conhecer a misteriosa Lauren (Natascha McElhone), ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.";



const Titulo1= "Django Livre"
const Ano1= "18/02/2013"
const Direçao1="Quentin Tarantino"
const Duração1="2h 44min"
const Elenco1=" Jamie Foxx, Christoph Waltz, Leonardo DiCaprio"
const Gênero1="Faroeste"
const Premição1= true
const Idade1=9

const sinopseDjango = "Sinopse: \nDjango (Jamie Foxx) é um escravo liberto cujo passado brutal com seus antigos proprietários leva-o ao encontro do caçador de recompensas alemão Dr. King Schultz (Christoph Waltz). \nSchultz está em busca dos irmãos assassinos Brittle, e somente Django pode levá-lo a eles. \nO pouco ortodoxo Schultz compra Django com a promessa de libertá-lo quando tiver capturado os irmãos Brittle, vivos ou mortos.\nAo realizar seu plano, Schultz libera Django, embora os dois homens decidam continuar juntos. \nDesta vez, Schultz busca os criminosos mais perigosos do sul dos Estados Unidos com a ajuda de Django."


const Titulo2= "Os Oito Odiados"
const Ano2= "16/01/2016"
const Direçao2="Quentin Tarantino"
const Duração2="2h 48min"
const Elenco2="Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh"
const Gênero2="Faroeste"
const Premição2= true
const Idade2= 6

const sinopseOitoOdiado = "Durante uma nevasca, o carrasco John Ruth (Kurt Russell) está transportando uma prisioneira, a famosa Daisy Domergue (Jennifer Jason Leigh), que ele espera trocar por grande quantia de dinheiro. \nNo caminho, os viajantes aceitam transportar o caçador de recompensas Marquis Warren (Samuel L. Jackson), que está de olho em outro tesouro, e o xerife Chris Mannix (Walton Goggins), prestes a ser empossado em sua cidade. \nComo as condições climáticas pioram, eles buscam abrigo no Armazém da Minnie, onde quatro outros desconhecidos estão abrigados. \nAos poucos, os oito viajantes no local começam a descobrir os segredos sangrentos uns dos outros, levando a um inevitável confronto entre eles."

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const media = (v1,v2,v3) =>{
    const medias = (v1 + v2 + v3 )/3;
    return `A media de idades entre os filmes é de: ${medias}`

}
console.log(media(Idade,Idade1,Idade2));

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const vericicacao = (premio,premio1,premio2) =>{
    const premios = premio && premio1 && premio2 
    return `Todos os filmes possuem uma premiação?:${premios}` 
};
console.log(vericicacao(Premição,Premição1,Premição2));

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const listaDePremios = ["Globo de Ouro 1999", "Oscar 1999", "MTV Movie & TV 1999"]
const listaDePremios1 = ["MTV Movie & TV 2013", "BAFTA de cinema 2013", "Globo de Ouro 2013"]
const listaDePremios2 = ["Oscar 2016", "Globo de Ouro 2016", "Bandung Film Festival 2016z"]


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log("---------------------------------------------")


console.log(
`
Titulo: ${Titulo},
Ano: ${Ano},
Direçao: ${Direçao}
Duração: ${Duração}
Elenco: ${Elenco}
Gênero: ${Gênero}
Premição: ${Premição}
Idade: ${Idade}
Lista de premios: ${listaDePremios2}
Sinopse: ${sinopseTruman}
`
);

console.log("---------------------------------------------")


console.log(
`
Titulo: ${Titulo1}
Ano: ${Ano1}
Direçao: ${Direçao1}
Duração: ${Duração1}
Elenco: ${Elenco1}
Gênero: ${Gênero1}
Premição: ${Premição1}
Idade: ${Idade1}
Lista de premios: ${listaDePremios1}
Sinopse: ${sinopseDjango}

`
);

console.log("---------------------------------------------")

console.log(
`
Titulo: ${Titulo2}
Ano: ${Ano2}
Direçao: ${Direçao2}
Duração: ${Duração2}
Elenco: ${Elenco2}
Gênero: ${Gênero2}
Premição: ${Premição2}
Idade: ${Idade2}
Lista de premios: ${listaDePremios}
Sinopse: ${sinopseOitoOdiado}
`
);


