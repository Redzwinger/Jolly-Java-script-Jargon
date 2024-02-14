console.log("Hello World!")

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
        process.exit();
    });