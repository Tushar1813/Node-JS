// ----------------------
// Callback-based version
// ----------------------
var fs = require('fs');

// Read from abc.txt
fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Content of abc.txt:");
        console.log(data);
    }

    // Write new content to abcpromises.txt
    const content = "fasshjhjg";
    fs.writeFile('abcpromises.txt', content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully. Check your folder.");

            // Read again from abcpromises.txt
            fs.readFile('abcpromises.txt', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Content of abcpromises.txt:");
                    console.log(data);
                }
            });
        }
    });
});


// ----------------------
// Promise-based version
// ----------------------
var fsp = require('fs').promises;

fsp.readFile('abc.txt', 'utf-8')
.then((data) => {
    console.log("Content of abc.txt:");
    console.log(data);
})
.then(() => {
    const content = "fgshshsj";
    return fsp.writeFile('promises1.txt', content);
})
.then(() => {
    return fsp.readFile('promises1.txt', 'utf-8');
})
.then((data) => {
    console.log("Content of promises1.txt:");
    console.log(data);
})
.catch((err) => {
    console.log("Error:", err);
});


// ----------------------
// Async/Await version
// ----------------------
async function processFiles() {
    try {
        // Use the promise-based fs
        const fsp = require('fs').promises;

        // Read abc.txt
        const data1 = await fsp.readFile('abc.txt', 'utf-8');
        console.log("Content of abc.txt:");
        console.log(data1);

        // Write to promises.txt
        const content = "fgshshsj";
        await fsp.writeFile('promises.txt', content);
        console.log("File written successfully (promises.txt)");

        // Read the file we just wrote
        const data2 = await fsp.readFile('promises.txt', 'utf-8');
        console.log("Content of promises.txt:");
        console.log(data2);
    } 
    catch (err) {
        console.log("Error:", err);
    }
}

processFiles();
