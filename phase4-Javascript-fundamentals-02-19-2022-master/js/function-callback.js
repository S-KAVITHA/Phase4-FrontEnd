// callback function  ->  When we pass a function as an argument to another function.
                    //  -> the argument function is callback

let x = function () {
    console.log("This is a X function.");
}

let y = function (callback) {
    console.log("This is a Y function.");
    // console.log(callback);
    callback();
}


// y();
// y(10);
// y("hello");
y(x);

y(function() {
    console.log("I am a direct callback.");
});