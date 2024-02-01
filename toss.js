let images = document.querySelectorAll(".choice");
let userSelection = document.querySelector("#selection");
let buttonElement = document.querySelector("#btn");
let headImage = document.querySelector("#H");
let tailImage = document.querySelector("#T");
let compSelection = document.querySelector("#compsel");
let borderHeads = document.querySelector("#HEADS");
let borderTails = document.querySelector("#TAILS");
let tasweer1 = document.querySelector("#tasweer1");
let tasweer2 = document.querySelector("#tasweer2");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");





let compChoice; // Declare compChoice globally
let userChoice;




const genCompChoice = () => {
    const options = ["HEADS", "TAILS"];
    const randidx = Math.floor(Math.random() * 2);

    

    return options[randidx];
};





const playGame = (userChoice) => { // Allow optional userChoice
    console.log("user choice =", userChoice);
    compChoice = genCompChoice();
    console.log("compChoice =", compChoice);

    
   

};





images.forEach((choice) => {
    choice.addEventListener("click", () => {


        let userChoice = choice.getAttribute("id");
        if (userChoice === "HEADS") {
            userSelection.innerText = `You Selected ${userChoice}`;
            borderHeads.style.border = "6px solid green";
            borderTails.style.border = "2px solid black";
            borderTails.style.marginTop = '7px';

          





        }
        else if (userChoice === "TAILS") {
            userSelection.innerText = `You Selected ${userChoice}`;
            borderTails.style.border = "6px solid green";
            borderHeads.style.border = "2px solid black";
            borderHeads.style.marginTop = '7px';
           

        }



       

        
    });

   
});








buttonElement.addEventListener("click", () => {
    playGame(); // Generate computer choice if needed



    if (compChoice === "HEADS") {
        compSelection.innerText = `And it is...${compChoice}`;

        tailImage.style.display = "none";
        headImage.style.display = "block";

    


    }

    else if (compChoice === "TAILS") {
        compSelection.innerText = `And it is...${compChoice}`;
        headImage.style.display = "none";
        tailImage.style.display = "block";

    }

   
});



