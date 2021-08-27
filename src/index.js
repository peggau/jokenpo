const options = require('./data');
const user = require('./controller/class/user')
// const machineOptions = require('./controller/class/machine');

let play = new user({opt: options}).game()

play
