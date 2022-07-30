///<reference path="ezpwgen.ts" />

// UI Constants
const form_main: string = "mainForm";
const input_pwLength: string = "pwLength";
const input_includeSymbols: string = "inclSymbols";
const input_includeNumbers: string = "inclNumbers";
const input_includeLower: string = "inclLower";
const input_includeUpper: string = "inclUpper";
const input_includeAmbiguous: string = "inclAmbiguous";
const input_excludeSimilar: string = "exclSimilar";
const div_resultWrapper: string = "resultsDiv";
const input_resultsText: string = "resultsText";
const button_copy: string = "copyButton";
var style_visible = "visible";

function init(): void {
    let main_form = <HTMLFormElement>document.getElementById(form_main);
    if (main_form != null) {
        main_form.onsubmit = execute;
    }
}

function execute(): boolean {
    let pwLengthElement = <HTMLSelectElement>document.getElementById(input_pwLength);
    let pwLength: number = +pwLengthElement.options[pwLengthElement.selectedIndex].value;
    let includeSymbols: boolean = (<HTMLInputElement>document.getElementById(input_includeSymbols)).checked;
    let includeNumbers: boolean = (<HTMLInputElement>document.getElementById(input_includeNumbers)).checked;
    let includeLower: boolean = (<HTMLInputElement>document.getElementById(input_includeLower)).checked;
    let includeUpper: boolean = (<HTMLInputElement>document.getElementById(input_includeUpper)).checked;
    let includeAmbiguous: boolean = (<HTMLInputElement>document.getElementById(input_includeAmbiguous)).checked;
    let excludeSimilar: boolean = (<HTMLInputElement>document.getElementById(input_excludeSimilar)).checked;

    let result: string = generatePassword(pwLength, includeSymbols, includeNumbers, includeLower, includeUpper, includeAmbiguous, excludeSimilar);
    buildOutput(result);
    return false;
}

function buildOutput(result: string): void {
    let resultsDiv = document.getElementById(div_resultWrapper);
    let resultsText = <HTMLInputElement>document.getElementById(input_resultsText);
    if (resultsDiv != null && resultsText != null) {
        resultsText.value = result;
    }
    let copyButton = <HTMLButtonElement>document.getElementById(button_copy);
    copyButton.style.visibility = style_visible;
}

function copy() {
    let resultsText: string = (<HTMLInputElement>document.getElementById(input_resultsText)).value;
    navigator.clipboard.writeText(resultsText);

    let copyButton = <HTMLButtonElement>document.getElementById(button_copy);
    copyButton.textContent = "Copied";
    setTimeout(function () { copyButton.textContent = "Copy"; }, 1000);
}

window.onload = init;