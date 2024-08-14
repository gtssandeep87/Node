module.exports.mode = function () {
    this.first = function () {
        console.log("First Function");
    },
        this.sec = function () {
            console.log("Second Function");
        },
        this.third = function () {
            console.log("Third Function");
        },
        this.fourth = () => {
            console.log("Fifth Function");
        }
}