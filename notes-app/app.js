const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js')

// ADD
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// READ
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log(chalk.blue('reading a note...'));
    }
})

// LIST
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => {
        console.log(chalk.blue('listing the notes...'));
    }
})

// DELETE
yargs.command({
    command: 'delete',
    describe: 'delete a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.deleteNote(argv.title)
    }
})

yargs.parse();