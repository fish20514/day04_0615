const fs = require('fs');
const path = require('path');

const writepath = path.join(__dirname, "writedata", "writelorem.txt");
fs.writeFile(writepath, "data", err=>{
    console.log(err);

    console.log("1. write");
});

