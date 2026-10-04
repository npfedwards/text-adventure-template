// ============================================================
//  YOUR TEXT ADVENTURE
// ============================================================
//
//  Read this file top to bottom. It is just a script: it runs
//  one line after another, exactly like a recipe.
//
//  To play it, type this in the terminal:
//
//      npm start
//
//  To stop it, press Ctrl and C together.
//
// ============================================================


// --- THE TOOLS WE NEED --------------------------------------
//
// This grabs a helper that GitHub Codespaces gives us for free.
// It is what lets us wait for the player to type something.
//
// You do not need to understand this line. In a couple of weeks
// it will make perfect sense. For now, just leave it alone.

import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// --- PART 1: THE THINGS IN YOUR GAME ------------------------
//
// These are VARIABLES. A variable is a labelled box that holds
// something you want to remember.
//
// Each box below holds a piece of text. Text goes inside "quote
// marks". The word after the colon says what kind of thing the
// box holds -- `string` means text, and `boolean` means a yes/no
// switch.

let title: string = "The Dusty Hall";

let intro: string = "You are standing in a dark hall.";

let roomName: string = "Entrance Hall";

let roomDescription: string =
  "Dust floats in the air. A heavy wooden door leads north.";

// This box remembers which room the player is in right now.
let currentRoom: string = "entrance";

// This box becomes `true` when the game is over.
let finished: boolean = false;


// --- PART 2: SAY HELLO --------------------------------------

console.log(title);
console.log(intro);
console.log("");


// --- PART 3: THE MAIN LOOP ----------------------------------
//
// A loop runs the same code again and again.
//
// This one says: "while the game is not finished, keep going."
// Each time round we wait for the player to type, look at what
// they typed, and reply.

while (finished === false) {

  // Wait for the player to type a line and press Enter.
  let input: string = await rl.question("> ");

  // Tidy it up: make it lowercase and trim the spaces off the
  // ends. This means "LOOK" and "look  " behave the same way.
  input = input.toLowerCase().trim();

  // Now decide what to do, by comparing what they typed to
  // things we recognise. Only ONE of these blocks runs.

  if (input === "look" || input === "") {
    console.log("");
    console.log(roomName);
    console.log(roomDescription);
    console.log("");
  }

  else if (input === "go north") {
    currentRoom = "library";
    roomName = "Library";
    roomDescription =
      "Tall shelves of books surround you. The hall is back to the south.";
    console.log("");
    console.log(roomName);
    console.log(roomDescription);
    console.log("");
  }

  else if (input === "go south") {
    currentRoom = "entrance";
    roomName = "Entrance Hall";
    roomDescription =
      "Dust floats in the air. A heavy wooden door leads north.";
    console.log("");
    console.log(roomName);
    console.log(roomDescription);
    console.log("");
  }

  else if (input === "quit") {
    console.log("");
    console.log("You slip back into the real world.");
    finished = true;
  }

  else {
    // We did not recognise that. Say so, politely.
    console.log("");
    console.log('I do not know how to "' + input + '".');
    console.log("Try: look, go north, go south, quit");
    console.log("");
  }
}


// --- PART 4: THE END ----------------------------------------

rl.close();
console.log("Thanks for playing!");
