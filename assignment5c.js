// Fetch a joke from `https://official-joke-api.appspot.com/random_joke` and log it.
const fetchJoke = async()=>{
    let response=await fetch("https://official-joke-api.appspot.com/random_joke")
    //console.log(response)
    let data = await response.json();
    console.log(data.type,data.setup,data.punchline);
}
fetchJoke()
