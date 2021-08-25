// const rl = require('./interface')

// rl.question('Você está gostando de POO?', answer => {
//     console.log(`Sua resposta foi: ${answer}`)
//     rl.close();
// })

const options = require('./data');
const machineOptions = require('./controller/class');

let sortition = new machineOptions({opt: options}).sort()

console.log(sortition)
