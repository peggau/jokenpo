// const rl = require('./interface')

// rl.question('Você está gostando de POO?', answer => {
//     console.log(`Sua resposta foi: ${answer}`)
//     rl.close();
// })

const options = require('./data');
const user = require('./controller/class/user')
// const machineOptions = require('./controller/class/machine');

let users = new user({
    opt: options, 
    name: 'Gi', 
    selected: 'Paper'
}).game()

console.log(users)
