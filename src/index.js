const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let strDecoded = '';
    let letter;

    while (expr.length > 0) {
        letter = expr.slice(0, 10);
        strDecoded += decodeLetter(letter);
        expr = expr.slice(10);
    }

    return strDecoded;
}

function decodeLetter(code) {
    if (code === '**********')
        return ' ';

    let codeMorse = '';
    let sign = '';

    for (let i = 0; i < code.length; i = i + 2) {
        sign = code[i] + code[i + 1];

        switch (sign) {
            case '10':
                codeMorse += '.';
                break;
            case '11':
                codeMorse += '-';
                break;
            default:
                break;
        }
    }

    return MORSE_TABLE[codeMorse];
}

module.exports = {
    decode
}