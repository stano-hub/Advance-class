// async and await functions
const fetchJoke = async()=>{
    let response=await fetch("https://api.chucknorris.io/jokes/random")
    //console.log(response)
    let data = await response.json();
    console.log(data.created_at,data.value);
}
fetchJoke()