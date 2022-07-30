// Character Constants
var symbols = "!#$%&*+-=?@^_";
var numbers = "0123456789";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ambiguous = "{}[]()\/'\"`~,;:.<>\\";
var similar = "01iIlo|";
function generatePassword(pwLength, includeSymbols, includeNumbers, includeLower, includeUpper, includeAmbiguous, excludeSimilar) {
    var validChars = "";
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
    var validLength = validChars.length;
    var result = "";
    while (result.length < pwLength) {
        var c = validChars.charAt(Math.floor(Math.random() * validLength));
        if (similar.indexOf(c) == -1) {
            result += c;
        }
    }
    return result;
}
