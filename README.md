# NoteTaker

A note saving application that is deployed through heroku. The app allows the user to create and save notes to a SQL database and retrieves the notes using ajax api calls to the database. The notes are then rendered (using a unique note id) in a read only format and the user can then either view or delete the note. 

![Alt text](./master/noteTaker.png?raw=true)

## Cloning the GitHub Repository
You can directly clone the note taker repository by using git bash:

```bash
$ git clone https://github.com/thomps9012/NoteTaker.git NoteTaker
```
### Downloading the Repository Zip File
Another way to use the TrailTails code is to download a zip copy from the [master branch on GitHub](https://github.com/thomps9012/NoteTaker/archive/master.zip). You can also do this using the `wget` command:

```bash
$ wget https://github.com/thomps9012/NoteTaker/archive/master.zip -O NoteTaker.zip; unzip NoteTaker.zip; rm NoteTaker.zip
```

Don't forget to rename after your project name.

#### Running the Application
Simply visit the url "https://radiant-cliffs-00329.herokuapp.com/" and you can begin using the Note Taker application

##### Built With
* [HTML] - Used to create out the website that on the front end
* [CSS] - Used to create custom styling for the front end of the website
* [Local Storage] - Used to store notes for future sessions / website visits
* [Javascript] - Used for functionalty of the app
