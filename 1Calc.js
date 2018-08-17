function Calculator(firstOperator, operand, secondOperator){
    firstOperator = 35;
    operand = "*";
    secondOperator = 5;
    if (typeof firstOperator === "number" && typeof secondOperator === "number"){
        if (operand === "+") {return (firstOperator+secondOperator);}
        else if (operand === "-") {return (firstOperator-secondOperator);}
        else if (operand === "*") {return firstOperator * secondOperator;}
        else if (operand === "/") {return firstOperator / secondOperator;}
        else {return "Не понял оператор";}
    }
    else {return "Введите цифры";}
}
console.log(Calculator());