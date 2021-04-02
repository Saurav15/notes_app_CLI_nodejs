const fs = require('fs');
const chalk = require('chalk');
const { lookup } = require('dns');

function addNotes(title, body) {
    // Step-1 Load the notes in the JS object so we can add new note to exsisting one
    const notes = loadNotes();
    
    // Checking if the note title entered is duplicate or not
    var duplicate = 0;
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].title == title) {
            duplicate++;
        }
    }
    // Now we have the list of nodes . So now we need to add this body and title to that array
    if (duplicate > 0) {
        console.log("Duplicate title entered");
    }
    else {
        notes.push({
            title: title,
            body: body
        })

    // Now we need to save this note
        saveNote(notes)
    }
}

function saveNote(notes) {
    // we need to convert these notes obj to string file
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON);
}

function loadNotes() {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const notesString = noteBuffer.toString();
        const noteObj = JSON.parse(notesString);
        return noteObj;
    } catch (error) {
        return [];
    }

    // Here this code will give error as there is no current file called notes.json 
    // So we need to just return an array and cover whole of this function in tr and catch
}

// ------------------------------ADD command completed ----------------------------------------




// Remove command
function removeNote(title){
    //Find the title in the notes 
    // Step-1 load the notes
    const notes = loadNotes();

    // Step-2 check if the node exists
    for(var i = 0; i < notes.length; i++){
        if(notes[i].title === title){
            notes.splice(i,1);
            console.log(chalk.green.bold("Removed note : "+ title));
            break;
        }
        else if(i == notes.length-1){
            console.log(chalk.red.bold("Note with title :\""+ title +"\" does not exists."));
        }
    }

    // Save the list back
    saveNote(notes);
}


// --------------------------------Remove command completed---------------------------------------

function listNotes(){
    //Step 1: Load all the notes
    const notes = loadNotes();

    // Step-2: Print all the notes title for each notes
    notes.forEach((note)=>{
        console.log(chalk.yellow.bold(note.title));
    });
}


// -----------------------------------Read Notes------------------------------------------------

function readNotes(title){
    // Load the note
    const notes = loadNotes();

    // Find the given note and display its body
    // Use some instead of forEach as it was giving troble in returning the value
    // Some and forEach are exactly same just some breaks the loop as we return true
    notes.some((note,index)=>{
        if(note.title==title){
            console.log(chalk.yellow(note.title));
            console.log(chalk.blue(note.body));
            return true;     
        }
        else if(index == notes.length-1){
            // console.log(index)
            console.log(chalk.red.bold('Title not found'));
        }
    });
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

}