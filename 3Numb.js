
function formatter(numb) {
    numb = 26544333.34;
    numb = numb.toFixed(2);
    numb = String(numb);
    str = "- 00 000 000,00";
    if (numb.length == 11) {
        str = str[0]+str[1]+numb[0]+numb[1]+str[4]+numb[2]+numb[3]+numb[4]+str[8]+numb[5]+numb[6]+numb[7]+str[12]+numb[9]+numb[10];
        return str;
    }
    else if (numb.length == 10) {
        str = str[0]+str[1]+str[2]+numb[0]+str[4]+numb[1]+numb[2]+numb[3]+str[8]+numb[4]+numb[5]+numb[6]+str[12]+numb[8]+numb[9];
        return str;
    }
    else if (numb.length == 9) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+numb[0]+numb[1]+numb[2]+str[8]+numb[3]+numb[4]+numb[5]+str[12]+numb[7]+numb[8];
        return str;
    }
    else if (numb.length == 8) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+numb[0]+numb[1]+str[8]+numb[2]+numb[3]+numb[4]+str[12]+numb[6]+numb[7];
        return str;
    }
    else if (numb.length == 7) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+numb[0]+str[8]+numb[1]+numb[2]+numb[3]+str[12]+numb[5]+numb[6];
        return str;
    }
    else if (numb.length == 6) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+numb[0]+numb[1]+numb[2]+str[12]+numb[4]+numb[5];
        return str;
    }
    else if (numb.length == 5) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]+numb[0]+numb[1]+str[12]+numb[3]+numb[4];
        return str;
    }
    else if (numb.length == 4) {
        str = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]+str[10]+numb[0]+str[12]+numb[2]+numb[3];
        return str;
    }
    else return "ошибка ввода";
}
console.log(formatter());