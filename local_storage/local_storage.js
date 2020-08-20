window.addEventListener('load', () => {
    //checking local storage
    if (typeof(Storage) !== 'undefines') {
        console.log("The system can use Local Storage");
    } else {
        console.log("The sistem can't use Local Storage");
    }
    //Save data
    localStorage.setItem("title", "This is a title");

    //Recovery element
    document.querySelector("#movies").innerHTML = localStorage.getItem("title");

    //Save object

    var user = {
        name: "maciel",
        email: "macielgaleano.jh@SpeechGrammarList.com",
        age: "30"
    }

    //Need convert json in string with "stringify"

    localStorage.setItem("user", JSON.stringify(user));

    //recovery object 

    var userJs = (JSON.parse(localStorage.getItem("user")));
    document.querySelector("#movies").append(" ," + userJs.name)

    //Clean local Storage

    localStorage.clear;

});