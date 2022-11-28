const filmes = ["Show de Truman",
"Django Livre",
"Os Oito Odiados"];

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
console.table ("Titulo:",filmes[0]);

const sinopseTruman = "Sinopse: \nTruman Burbank (Jim Carrey) é um pacato vendedor de seguros que leva um vida simples com sua esposa Meryl Burbank (Laura Linney). Porém algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. \nApós conhecer a misteriosa Lauren (Natascha McElhone), ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.";
console.log(sinopseTruman);

filmes [0]  = {
    Titulo: "Show de Truman",
    Ano: "30/10/1998",
    Direçao:"Peter Weir",
    Duração:"1h 43min",
    Elenco:"Jim Carrey, Laura Linney, Natascha McElhone",
    Gênero:"Drama, Comédia",
    Premição: true,
    Idade:24
}
console.table(filmes[0]);

console.log("Titulo:",filmes[1]);

const sinopseDjango = "Sinopse: \nDjango (Jamie Foxx) é um escravo liberto cujo passado brutal com seus antigos proprietários leva-o ao encontro do caçador de recompensas alemão Dr. King Schultz (Christoph Waltz). \nSchultz está em busca dos irmãos assassinos Brittle, e somente Django pode levá-lo a eles. \nO pouco ortodoxo Schultz compra Django com a promessa de libertá-lo quando tiver capturado os irmãos Brittle, vivos ou mortos.\nAo realizar seu plano, Schultz libera Django, embora os dois homens decidam continuar juntos. \nDesta vez, Schultz busca os criminosos mais perigosos do sul dos Estados Unidos com a ajuda de Django. \nDotado de um notável talento de caçador, Django tem como objetivo principal encontrar e resgatar Broomhilda (Kerry Washington), sua esposa, que ele não vê desde que ela foi adquirida por \noutros proprietários, há muitos anos.\nA busca de Django e Schultz leva-os a Calvin Candie (Leonardo DiCaprio), o dono de \"Candyland\", uma plantação famosa pelo treinador Ace Woody, que treina os escravos locais para a luta. \nAo explorarem o local com identidades falsas, Django e Schultz chamam a atenção de Stephen (Samuel L. Jackson), o escravo de confiança de Candie. \nOs movimentos dos dois começam a ser traçados, e logo uma perigosa organização fecha o cerco em torno de ambos. Para Django e Schultz conseguirem escapar com Broomhilda, eles terão que escolher entre independência e solidariedade, sacrifício e sobrevivência."

console.log(sinopseDjango);

filmes [1]  = {
    Titulo: "Django Livre",
    Ano: "18/02/2013",
    Direçao:"Quentin Tarantino",
    Duração:"2h 44min",
    Elenco:" Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
    Gênero:"Faroeste",
    Premição: true,
    Idade:9
}
console.table(filmes[1]);

console.log("Titulo:",filmes[2]);

const sinopseOitoOdiado = "Durante uma nevasca, o carrasco John Ruth (Kurt Russell) está transportando uma prisioneira, a famosa Daisy Domergue (Jennifer Jason Leigh), que ele espera trocar por grande quantia de dinheiro. \nNo caminho, os viajantes aceitam transportar o caçador de recompensas Marquis Warren (Samuel L. Jackson), que está de olho em outro tesouro, e o xerife Chris Mannix (Walton Goggins), prestes a ser empossado em sua cidade. \nComo as condições climáticas pioram, eles buscam abrigo no Armazém da Minnie, onde quatro outros desconhecidos estão abrigados. \nAos poucos, os oito viajantes no local começam a descobrir os segredos sangrentos uns dos outros, levando a um inevitável confronto entre eles."

console.log(sinopseOitoOdiado);
filmes [2]  = {
    Titulo: "Os Oito Odiados",
    Ano: "16/01/2016",
    Direçao:"Quentin Tarantino",
    Duração:"2h 48min",
    Elenco:"Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
    Gênero:"Faroeste",
    Premição: true,
    Idade: 6
    
}
console.table(filmes[2]);


const anoTruman = filmes[0].Idade;
console.log("Idade do filme Show de Truman:",anoTruman,"anos.");

const anoDjango = filmes[1].Idade;
console.log("Idade do filme Django Livre:",anoDjango,"anos.");

const anoOitoOdiados = filmes[2].Idade;
console.log("Idade do filme Os Oito Odiados",anoOitoOdiados,"anos");

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
const media = ((anoTruman+anoDjango+anoOitoOdiados)/3);
console.log("A media de idade entre os filmes é de:\n"+media,"anos");

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
const somaIdade = filmes[0].Idade + filmes[1].Idade + filmes[2].Idade ===39;
console.log("A soma de idades dos filmes é = 39:",somaIdade);

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
const novoItem = filmes[0].Apenas_maior_18  = false;
console.table(filmes[0]);

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
filmes[0].Titulo = filmes[0].Titulo.toUpperCase();
console.table(filmes[0]);
 filmes[1].Titulo = filmes[1].Titulo.toUpperCase();
 console.table(filmes[1]);
 filmes[2].Titulo = filmes[2].Titulo.toUpperCase();
 console.table(filmes[2]);