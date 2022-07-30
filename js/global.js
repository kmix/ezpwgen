///<reference path="ezpwgen.ts" />
// UI Constants
var form_main = "mainForm";
var input_pwLength = "pwLength";
var input_includeSymbols = "inclSymbols";
var input_includeNumbers = "inclNumbers";
var input_includeLower = "inclLower";
var input_includeUpper = "inclUpper";
var input_includeAmbiguous = "inclAmbiguous";
var input_excludeSimilar = "exclSimilar";
var div_resultWrapper = "resultsDiv";
var input_resultsText = "resultsText";
var button_copy = "copyButton";
var style_visible = "visible";
function init() {
    var main_form = document.getElementById(form_main);
    if (main_form != null) {
        main_form.onsubmit = execute;
    }
}
function execute() {
    var pwLengthElement = document.getElementById(input_pwLength);
    var pwLength = +pwLengthElement.options[pwLengthElement.selectedIndex].value;
    var includeSymbols = document.getElementById(input_includeSymbols).checked;
    var includeNumbers = document.getElementById(input_includeNumbers).checked;
    var includeLower = document.getElementById(input_includeLower).checked;
    var includeUpper = document.getElementById(input_includeUpper).checked;
    var includeAmbiguous = document.getElementById(input_includeAmbiguous).checked;
    var excludeSimilar = document.getElementById(input_excludeSimilar).checked;
    var result = generatePassword(pwLength, includeSymbols, includeNumbers, includeLower, includeUpper, includeAmbiguous, excludeSimilar);
    buildOutput(result);
    return false;
}
function buildOutput(result) {
    var resultsDiv = document.getElementById(div_resultWrapper);
    var resultsText = document.getElementById(input_resultsText);
    if (resultsDiv != null && resultsText != null) {
        resultsText.value = result;
    }
    var copyButton = document.getElementById(button_copy);
    copyButton.style.visibility = style_visible;
}
function copy() {
    var resultsText = document.getElementById(input_resultsText).value;
    navigator.clipboard.writeText(resultsText);
    var copyButton = document.getElementById(button_copy);
    copyButton.textContent = "Copied";
    setTimeout(function () { copyButton.textContent = "Copy"; }, 1000);
}
window.onload = init;
