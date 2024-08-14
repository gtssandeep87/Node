// install module : npm i child_process
const exec = require('child_process').exec;
exec('C:\\Users\\Satish\\sopra18012024\\nodeprojs\\thirdproj\\mytest.bat',
    (err, stdout, stdin) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    }
);