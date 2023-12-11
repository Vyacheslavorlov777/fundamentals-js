export const concatStrings = (a , b) => a + b;

export const isString = (value) => value === "";

export function identifySign(num) {
    if (num === 0) {
        return "Ноль";
    } if (num > 0) {
        return "Положительное число";
    } if (num < 0) {
        return "Отрицательное число";
    }
}

export function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}  

export function wordsCount(text) {
    return text.split(' ').length;
}


