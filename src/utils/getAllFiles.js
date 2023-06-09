// imports
const fs = require('fs');
const path = require('path');

// directory is where we want to get all the files or folders from
// foldersOnly - if TRUE, returns folders only from a specific PATH
module.exports = (directory, foldersOnly = false ) => {
    let fileNames = []

    // import files and folders inside this specific directory
    const files = fs.readdirSync(directory, { withFileTypes: true })

    // loop through all the files and save the filepath to each file
    for (const file of files) {
        const filePath = path.join(directory, file.name);

        if (foldersOnly) {
            if(file.isDirectory()) {
                fileNames.push(filePath)
            }
        } else {
            if (file.isFile()) {
                fileNames.push(filePath)
            }
        }
    }

    return fileNames
}