var userNumber = "";
var upperCase = "";
var lowerCase = "";
var psNumber = "";
var specialChar = "";

function promptMe() {
    while (
        !((upperCase.toLowerCase() == "yes") || (lowerCase.toLowerCase() == "yes") || (psNumber.toLowerCase() == "yes") || (specialChar.toLowerCase() == "yes"))
    ){ 
        userNumber = upperCase = lowerCase = psNumber = specialChar = "";

        while (!((userNumber >= 8) && (userNumber <= 128))) {
            userNumber = prompt(
                "How long do you want your password? Pick a number between 8-128"
            )
        }
        console.log(userNumber)

        while (
            !((upperCase.toLowerCase() == "yes") || (upperCase.toLowerCase() == "no"))
        ) {
            upperCase = prompt(
                "DO YOU WANT TO USE UPPERCASE CHARACTERS IN YOUR PASSWORD? ANSWER YES OR NO",
                ""
            )
        }
        console.log(upperCase)

        while (
            !((lowerCase.toLowerCase() == "yes") || (lowerCase.toLowerCase() == "no"))
        ) {
            lowerCase = prompt(
                "do you want to use lowercase characters in your password? answer yes or no",
                ""
            )
        }
        console.log(lowerCase)

        while (
            !((psNumber.toLowerCase() == "yes") || (psNumber.toLowerCase() == "no"))
        ) {
            psNumber = prompt(
                "Do you want to use numbers (123) in your password? Answer yes or no",
                ""
            )
        }
        console.log(psNumber)

        while (
            !((specialChar.toLowerCase() == "yes") || (specialChar.toLowerCase() == "no"))
        ) {
            specialChar = prompt(
                "Do you want to use special characters(!@#) in your password? Answer yes or no",
                ""
            )
        }
        console.log(specialChar)
    }

    var id = makeid();
    console.log(id);
    document.getElementById("password").textContent = id;
        document.getElementById("password").style.color = "black";
        document.getElementById("password").style.wordBreak;

}

function makeid() {
    if (upperCase == "yes") 
        var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    else if (upperCase == "no") 
        var upCharacters = "";
    if (lowerCase == "yes") 
        var loCharacters = "abcdefghijklmnopqrstuvwxyz";
    else if (lowerCase == "no") 
        var loCharacters = "";
    if (psNumber == "yes") 
        var Number = "0123456789";
    else if (psNumber == "no") 
        var Number = "";
    if (specialChar == "yes") 
        var spchar = "~!@#$%^&*()_+=-";
    else if (specialChar == "no") 
        var spchar = "";
    
    var characters = upCharacters + loCharacters + Number + spchar;
    var result = "";
    for (let i = 0; i < userNumber; ++i) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}