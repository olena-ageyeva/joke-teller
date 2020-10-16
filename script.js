const audioElement=document.getElementById("audio");
const button = document.getElementById("button");

// Disable/Enable button
function toggleButton(){
    button.disabled = !button.disabled;
}

// passing jokes to VoiceRSS API
function tellMe(joke) {
    console.log("tell me", joke);
    VoiceRSS.speech({
      key: "0b2386ffe02b49ea905673fe3e186781",
      src: joke,
      hl: "en-us",
      v: "Linda",
      r: 0,
      c: "mp3",
      f: "44khz_16bit_stereo",
      ssml: false,
    });
}

// Get jokes from JokeAPI

async function getJokes() {
    let joke='';
    const apiUrl="https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";
    try {
       const response= await fetch(apiUrl);
       const data = await response.json();
       if (data.setup) {
           joke=`${data.setup} ... ${data.delivery}`
       } else {
           joke = data.joke
       } 
        // text-to-speach  
       tellMe(joke);   
       
       toggleButton();

    } catch (error){
        console.log("whoops", error)
    }
}


// Event listeners
button.addEventListener('click', getJokes)
audioElement.addEventListener("ended", toggleButton)