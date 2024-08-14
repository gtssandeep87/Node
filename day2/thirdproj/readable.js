const { Readable } = require('stream');
async function* gen() {
    yield "First";
    yield "Second";
    yield "Third";
    yield "Fourth";
    yield "Fifth";
}

const readable = Readable.from(gen());
readable.on("data", (c) => console.log(c));