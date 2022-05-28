// complimentor.js
// Bryce Listner

// The first thing to do is diagram a compliment
// Source: https://jonmillward.com/blog/psychological-subtleties/the-anatomy-of-a-compliment-and-art-of-giving-one/
// One Format: "Your " + noun + "is/looks" + intensifier + adjective

// Initialize a bank of nouns, intensifiers, and adjectives. 
const nounList = ["house", "car", "hair", "face", "hands"]
const intenseList = ["extremely", "very", "incredibly"]
const adjectiveList = ["charming", "amazing", "fabulous", "excellent"]

// Next, select a random word from each list, and store it.
let noun = nounList[Math.floor(Math.random() * nounList.length)]
let conjoin = Math.floor(Math.random() * 2) == 1 ? "is" : "looks"
let intensifier = intenseList[Math.floor(Math.random() * intenseList.length)]
let adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)]

// Now, output the finished sentence
console.log("Your " + noun + " " + conjoin + " " + intensifier + " " + adjective + "!")