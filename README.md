# Text Adventure

Build a text adventure game in TypeScript. Everything runs in your browser --
there is nothing to install on your own computer.

## 1. Start your workspace

Click this button, then click **Create codespace**:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/npfedwards/text-adventure-template)

Wait about a minute while it sets up. You will see a code editor.

## 2. Play the game

At the bottom of the screen is a **Terminal**. Click on it and type:

```
npm start
```

You are now playing. Type `look`, then try `go north`.

Press **Ctrl** and **C** together to stop the game.

## 3. Change the game

Open the file `src/index.ts`. That is your whole game, and it is the
only file you need to touch.

Read it from top to bottom. It is a **script**: it runs one line after
another, like a recipe. Everything is explained as you go.

Things to try, in order:

1. **Change the words.** Find `title` near the top and give your game
   a new name. Run it again to see your change.
2. **Add a room.** Find the block that starts `else if (input === "go north")`.
   Copy it, paste it below, and change the words so it describes a new
   place. Then add another `else if` so the player can walk back.
3. **Add a new command.** Want the player to be able to `sing`? Add a
   block that checks `input === "sing"` and prints something silly.

You cannot break anything permanently. If your game stops working,
read the error message in the terminal -- it tells you the line number
to look at.

## 4. Save your work

Your changes are saved in the cloud automatically. To keep your own copy:

1. Click the **Source Control** icon on the left.
2. Type a short message like `added a cave`.
3. Click **Commit**, then **Publish Branch**.

## Words you will see

| Word | What it means |
| --- | --- |
| `let` | Make a labelled box to store something |
| `string` | A piece of text |
| `boolean` | A yes/no value, written `true` or `false` |
| `console.log(...)` | Print something on the screen |
| `if` / `else if` / `else` | Choose which block of code runs |
| `while` | Repeat a block of code |
