// Exercise 11: Sum File Sizes in Folder
// Goal: list the entries in data-folder and sum the size of the files (ignore folders).
// Required:
//   fs.readdir(directoryPath, callback)  - get the entries
//   fs.lstat(filePath, callback)         - is it a file? (stats.isFile()) and its size (stats.size)
//   path.join(directoryPath, entryName)  - build the full path
// Print the total ONCE - only after all the lstat callbacks have finished.
//
// Expected output:
//   Total size: 2345 bytes
//
// Run: node ex11.js

// const fs = require("fs");
// const path = require("path");

// // write your code here

// const directoryPath = path.join(__dirname, "data-folder");
// const totalSize = 0; // Use an object to hold the total size
// const pedding=0;
// fs.readdir(directoryPath, (err, entries) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }
//   if (pedding === 0 ){
//     console.log(`Total size: ${{totalSize}} bytes`);
//     return;
//   }
//   pedding = entries.length;
//   entries.forEach((entry) => {
//     const fullPath = path.join(directoryPath, entry);
//     fs.lstat(fullPath, (err, stats) => {
//       if (err) {
//         console.error("Error getting stats for file:", err);
//         return;
//       } 
//     if(stats.isFile()){
//         totalSize.value += stats.size;
//         pedding--;
//     }
//  if (pedding === 0 ){
//     console.log(`Total size: ${{totalSize}} bytes`);
//     return;
//   }
    
//     });
//     });
// });



const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");

let totalSize = 0;

fs.readdir(directoryPath, (err, entries) => {
    if (err) {
        console.error(err);
        return;
    }

    let pending = entries.length;

    if (pending === 0) {
        console.log(`Total size: ${totalSize} bytes`);
        return;
    }

    entries.forEach((entry) => {
        const filePath = path.join(directoryPath, entry);

        fs.lstat(filePath, (err, stats) => {
            if (err) {
                console.error(err);
            } else if (stats.isFile()) {
                totalSize += stats.size;
            }

            pending--;

            if (pending === 0) {
                console.log(`Total size: ${totalSize} bytes`);
            }
        });
    });
});

