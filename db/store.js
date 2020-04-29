const util = require("util");
const fs = require("fs");

const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);


const writeFileAsync = util.promisify(fs.writeFile);


class Store {
    read(){
        return readFileAsync("./db.json", "utf8")
    }

    write(note){
        return writeFileAsync("./db.json", JSON.stringify(note))
    }

    getNotes(){
        this.read().then(notes => {
            // parse the JSON string and turn it into an object
            //add them to a list
            //return the list to an array

        })
    }

    addNotes(note){
        //use the note argument to create a new note object with the required fields (text, title, id)
        //write the object to the JSON file
    }

    removeNote(id){
        //get all notes
        //remove the note with the given id
        //return a list of notes that don't have that id (filtered list)

    }
}

module.exports = new Store()