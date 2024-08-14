//process constants
console.log(`${process.arch}`);
console.log(`${process.pid}`);
console.log(`${process.platform}`);
console.log(`${process.version}`);
//process functions
console.log(process.cwd());
console.log(process.hrtime());
console.log(process.memoryUsage());
console.log(process.uptime());
process.argv.forEach((value, index, array) => {
    console.log(`${index}:${value}`);
});
console.log(__dirname);