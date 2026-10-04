import { createInterface } from "node:readline";
import { game } from "./game.ts";

/**
 * This file handles talking to the player (input and output).
 * You probably do NOT need to change much here -- the fun stuff
 * lives in src/game.ts.
 *
 * It sets up a REPL-style prompt: it reads a line of text, hands it
 * to the game, prints the game's reply, and repeats forever.
 */
async function main(): Promise<void> {
  const terminal = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (prompt: string): Promise<string> =>
    new Promise((resolve) => terminal.question(prompt, resolve));

  // Say hello and explain the very basics.
  console.log("");
  console.log("  " + game.title);
  console.log("  " + "=".repeat(game.title.length));
  console.log("");
  console.log("  " + game.intro);
  console.log("");

  // The main loop. Keep going until the game tells us it is over.
  let finished = false;
  while (!finished) {
    const input = await ask("> ");
    const result = game.handle(input);

    // Support several ways of replying, so the simplest game can
    // just return a plain string.
    if (typeof result === "string") {
      console.log(result);
    } else {
      if (result.message) console.log(result.message);
      finished = result.finished ?? false;
    }
    console.log("");
  }

  console.log("  Thanks for playing!");
  console.log("");
  terminal.close();
}

main();
