var s = ""

for (var i = 0 ; i < 15 ; i++){
    s += "*";
    s += "\n";
}

console.log(s)

// Bersarang
/*
*****
*****
*****
*****
*****
*/

var s = ""

for (var i = 0 ; i < 5 ; i++){
    for (let j = 0; j < 5; j++) {
        s += "*";
    }
    s += "\n";
}

console.log(s)

// Bersarang
/*
*
**
***
****
*****
*/

var s = ""

for (var i = 0 ; i < 5 ; i++){
    for (let j = 0; j <= i; j++) {
        s += "*";
    }
    s += "\n";
}

console.log(s)

// Bersarang terbalik
/*
*****
****
***
**
*
*/

var s = ""

for (var i = 10 ; i > 0 ; i--){
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}

console.log(s)
