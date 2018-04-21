function  func(array, str) {
    var n;
    array = ["бокс", "футбол", "баскетбол"];
    str = /фут/i;
    for (n=0; n<array.length; n++) {
       if (str.test(array[n])) {
           return "true";
       }
    }
    return "false";
}
console.log(func());