
//Arrays containing all the outcomes.
const days = ["monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const bodyPart = ["chest, shoulders and triceps", "back, biceps abs and forearms", "legs"];
const calories = [2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750];


//Randomizing the arrays
let randomDay = days[Math.floor(Math.random() * days.length)];
let randomBp = bodyPart[Math.floor(Math.random() * bodyPart.length)];
let randomCal = calories[Math.floor(Math.random() * calories.length)];

//Printed messsage
console.log(`Today is ${randomDay}. Based on your exercise regime you need to eat ${randomCal} and train ${randomBp}.`)

















 