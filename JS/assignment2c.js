// create an object of a player 

let player={
    name: "Lionel Messi",
    age: 36,
    team: "Inter Miami",
    position: "Forward",
    goals: 800,
    assists: 300,
    nationlity: "Argentinian",
    skills: ["Dribbling", "Passing", "Shooting", "Free Kicks"],
    isActive: true,
}
console.log(player);
// Accessing object properties
let skill= player.skills[0]; 
console.log(skill);
// Accessing object properties using dot notation 
let activity=player["team"]; 
console.log(activity); 

let playerName = player.name; 
console.log(playerName); 

let{age, team, position, goals, assists, nationlity, skills, isActive} = player; // destructuring

console.log(skills);