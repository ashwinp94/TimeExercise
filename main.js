// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server


let timeOuput = document.querySelector(".output")

const time = {
    createTimeArea() {

        let date = new Date();
        let hours = date.getHours();
        let days = date.getDay();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
        return strTime

    },
    createButton () {
        let buttonOutput = document.querySelector(".button")

        let button = document.createElement("button")
        button.textContent = "Update Time"
        button.addEventListener("click", () =>{
            location.reload(true)
        })
        buttonOutput.appendChild(button);

    }
}
timeOuput.innerHTML = time.createTimeArea();
time.createButton();


