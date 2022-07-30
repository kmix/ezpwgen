// Character Constants
const symbols: string = "!#$%&*+-=?@^_";
const numbers: string = "0123456789";
const lowers: string = "abcdefghijklmnopqrstuvwxyz";
const uppers: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ambiguous: string = "{}[]()\/'\"`~,;:.<>\\";
const similar: string = "01iIlo|"

function generatePassword(pwLength: number, includeSymbols: boolean, includeNumbers: boolean, includeLower: boolean, includeUpper: boolean, includeAmbiguous: boolean, excludeSimilar: boolean): string {
    let validChars: string = "";
    if (includeSymbols) {
        validChars += symbols;
    }
    if (includeNumbers) {
        validChars += numbers;
    }
    if (includeLower) {
        validChars += lowers;
    }
    if (includeUpper) {
        validChars += uppers;
    }
    if (includeAmbiguous) {
        validChars += ambiguous;
    }
    let validLength: number = validChars.length;
    let result: string = "";
    while (result.length < pwLength) {
        let c: string = validChars.charAt(Math.floor(Math.random() * validLength));
        if (similar.indexOf(c) == -1) {
            result += c;
        }
    }
    return result;
}