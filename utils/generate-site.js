const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
             resolve({
                 ok: true,
                 message: 'File created!'
             });
        });
    });
};

const copyFile = function() {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};