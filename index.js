var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(input) {
    return serverURL +"?"+"text=" + input
}

function errorHandler(error) {
    console.log("ERROR!",error);
    alert("Something wrong please try again after sometimes!");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        console.log(json)
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        // var translatedText = "HI";
        outputDiv.value = translatedText;
    })
    .catch(errorHandler)
    // outputDiv.value = inputText;
};

btnTranslate.addEventListener("click",clickHandler)