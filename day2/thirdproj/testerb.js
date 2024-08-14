const exec = require('child_process').exec;
exec('mspaint',
    (err, stdout, stdin) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    }
);