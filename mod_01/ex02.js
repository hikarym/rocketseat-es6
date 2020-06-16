// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [  
    { 
        nome: 'Diego', 
        idade: 23, 
        empresa: 'Rocketseat' 
    },  
    { 
        nome: 'Gabriel', 
        idade: 15, 
        empresa: 'Rocketseat' 
    },  
    { 
        nome: 'Lucas', 
        idade: 30, 
        empresa: 'Facebook' 
    },
];

// 2.1. [map] Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
// way 1
const idades1 = usuarios.map(item => item.idade); 
console.log(idades1);

// way 2
const idades2 = usuarios.map(function (item) {return item.idade }); 
console.log(idades2);

// 2.2. [filter] Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat 
// e com mais de 18anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
// way 1
const usuariosRocketSeat1 = usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade > 18
});
console.log(usuariosRocketSeat1);

// way 2
const usuariosRocketSeat2 = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(usuariosRocketSeat2);

// 2.3. [find] Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
// way 1
const usuarioGoogle1 = usuarios.find(function (item){
    return item.empresa === 'Google'
});
console.log(usuarioGoogle1);

// way 2
const usuarioGoogle2 = usuarios.find(item => item.empresa === 'Google');
console.log(usuarioGoogle2);

// 2.4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos:
// Resultado:[  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },]
const usuarioJovenes = usuarios.filter(item => item.idade * 2 <= 50);
console.log(usuarioJovenes);