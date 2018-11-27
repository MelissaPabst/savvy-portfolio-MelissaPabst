var userName = prompt("WhAt Is yOUr nAmE?");

var title = document.querySelector('h1');

var greetUser = function greetUser() {

    //if userName is empty
    if (!userName) {
        userName = prompt("Hello, user. Please give me your name");

        greetUser();
    } 
    else {
        //else only called in the event we have the username (a non-empty string)
        //alert("Hello, " + userName);
        //instead of alert, make greeting appear in h1
        //object.key.value
        //title.textContent = "Hello, " + userName;
        //title.textContent = title.textContent + ', ' + userName;
        // title.textContent += ', ' + userName;
        title.textContent += `, ${userName}`;
    }
};

greetUser();