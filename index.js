var userName = prompt("WhAt Is yOUr nAmE?");

var greetUser = function greetUser() {

    //if userName is empty
    if (!userName) {
        userName = prompt("Hello, user. Please give me your name");

        greetUser();
    } 
    else {
        //else only called in the event we have the username (a non-empty string)
        alert("Hello, " + userName);
    }
};

greetUser();