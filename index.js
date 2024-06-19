const btnEL = document.getElementById("btn")
const jokeEL = document.getElementById("joke");

const apiKey = "hpdseL8g6keUMQvDxhgdsg==3LASBwFPhcONRvDd";

const Options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke(){
    try {
        jokeEL.innerText = "updating...";
        btnEL.disabled = true;
        btnEL.innerText = "loading...";
        const response = await fetch(apiURL, Options)
        const data = await response.json();
         
        btnEL.disabled = false;
        btnEL.innerText = "RANDOM JOKE";
    
        jokeEL.innerText = data[0].joke;
    } catch (error) {
        jokeEL.innerText = "An error happend, try again later";
        btnEL.disabled = false;
        btnEL.innerText = "RANDOM JOKE";
    }

  
}


btnEL.addEventListener("click", getJoke);