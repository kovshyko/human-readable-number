module.exports = function toReadable(number) {
    let ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundreds = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const numberToString = String(number);

    if (number < 20) {
        return ones[number];
    }

    if (number >= 20 && number < 100 && numberToString[1] == 0) {
        const tensElem = numberToString.slice(0, 1);
        const tensElemToNumber = Number(tensElem);
        return `${tens[tensElemToNumber]}`;
    }

    if (number > 20 && number < 100) {
        const tensElem = numberToString[0];
        const tensElemToNumber = Number(tensElem);
        const onesElem = numberToString[1];
        const onesElemToNumber = Number(onesElem);
        return `${tens[tensElemToNumber]} ${ones[onesElemToNumber]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 0 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 1 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[1]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 2 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[2]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 3 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[3]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 4 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[4]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 5 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[5]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 6 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[6]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 7 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[7]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 8 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[8]}`;
    }

    if (
        number >= 100 &&
        number <= 999 &&
        numberToString[1] == 9 &&
        numberToString[2] == 0
    ) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[9]}`;
    }

    if (number >= 100 && number <= 999 && numberToString[1] >= 2) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        const tensElem = numberToString[1];
        const tensElemToNumber = Number(tensElem);
        const onesElem = numberToString[2];
        const onesElemToNumber = Number(onesElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${tens[tensElemToNumber]} ${ones[onesElemToNumber]}`;
    }

    if (number >= 100 && number <= 999 && numberToString[1] <= 2) {
        const hundredsElem = numberToString[0];
        const hundredsElemToNumber = Number(hundredsElem);
        const onesElem = numberToString.slice(1);
        const onesElemToNumber = Number(onesElem);
        return `${hundreds[hundredsElemToNumber]} hundred ${ones[onesElemToNumber]}`;
    }
};
