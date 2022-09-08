const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    debugger
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)  
        console.log('New note added')
    } 
    else {
        console.log('Duplicate title')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    if(notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No Note found!'))
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note Removed'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log('Your notes')
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const newNote = notes.find((note) => note.title === title)
    if(newNote) {
        console.log(chalk.white.inverse('Title:', newNote.title))
        console.log('Body:', newNote.body)   
    } else {
        console.log(chalk.red('Error'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}