const {glob} = require("glob");
const { promisify } = require("util");
const proGlob = promisify(glob);

async function loadFiles(dirName){
    console.log("LLEGO")
    console.log(`${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`);
    const Files = await proGlob(
            `${process.cwd().replace(/\\/g, "/")}/${dirName}/Client`
    );
    console.log("Files")

    Files.forEach((file)=> delete require.cache[require.resolve(file)]);
    return Files;
}

module.exports = {loadFiles};