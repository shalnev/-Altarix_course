function sum(){
    var sumArg = 0;
    for (var n=0; n<arguments.length; n++) {
        sumArg = sumArg + arguments[n];
    }
    return sumArg;
}

console.log(sum(1,2,3));