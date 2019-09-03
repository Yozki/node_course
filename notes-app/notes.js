const fs = require('fs')

const getNotes = () => {
    return 'Your notes:';
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicates = notes.filter((note) => {
        return note.title === title
    })

    if (duplicates.length === 0) {
        notes.push({ title: title, body: body })
        saveNotes(notes)
        console.log(notes)
    } else {
        console.log('A note already exists with that title')
    }
}

const deleteNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
        return note.title !== title
    })
    saveNotes(newNotes)
    console.log(newNotes)
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote
}