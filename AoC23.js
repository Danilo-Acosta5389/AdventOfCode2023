var fs = require("fs");
var text = fs.readFileSync("./day1puzzle.txt").toString('utf-8');
var textByLine = text.split("\n")
var sum = 0;
var numb = 0;

for (var i = 0; i < textByLine.length; i++) {
    var str = textByLine[i].replace(/\D/g, "");
    
    //if str length is > 1 multiply by 2
    if (str.length === 1) {
        //numb * 2;
        numb = parseInt((str + str));
        //console.log(typeof(numb));
        sum += numb;
    }
    //else add first with last
    else {
        var firstChar = str.charAt(0); ; 
        var lastChar = str.charAt(str.length - 1);

        numb = parseInt((firstChar + lastChar));
        //console.log(typeof(numb));
        sum += numb;
    }
    
    //console.log(numb);
}

console.log('The sum of all numbers is: ' + sum);


