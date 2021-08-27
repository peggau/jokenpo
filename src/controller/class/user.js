const machineOptions = require('./machine');
const inquirer = require('inquirer');
const options = require('../../data')

class user extends machineOptions {
    constructor({opt, name, selected}) {
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort()
    }

    set name(string) {
        this._name = string
    }

    get name() {
        return this._name
    }
 
    set selected(string) {
        this._selected = string
    }

    get selected() {
        return this.selected
    }

    logic() {
        if(this._selected === this._sort) {
            return `${this._name}, it's a tie! --> user: ${this._selected} | machine: ${this._sort}.`
        } else if((this._selected === 'Rock' && this._sort === 'Scissor') || (this._selected === 'Scissor' && this._sort === 'Paper') || (this._selected === 'Paper' && this._sort === 'Rock')) {
            return `you chose ${this._selected} | The machine chose ${this._sort}... ${this._name}, you won!`
        } else {
            return `you chose ${this._selected} | The machine chose ${this._sort}... ${this._name}, you lose!`
        }
    }

    game() {
        return inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'Tell us your nickname =) ',
                    default: 'Player'

                },
                {
                    type: 'list',
                    name: 'jokenpo',
                    message: 'Select one of these options: ',
                    choices: options
                }
            ]).then((answers) => {
                this._name = answers.name
                this._selected = answers.jokenpo
                console.info(`Hey, ${this.logic()}`)
            })
    }
}

module.exports = user