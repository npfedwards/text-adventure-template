# Text Adventure

Build a text adventure game in TypeScript. Everything runs in your browser --
nothing to install on your computer.

## 1. Start the workspace

Click this button, then click **Create codespace**:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/npfedwards/text-adventure-template)

Wait about a minute for it to set up. You will see a code editor.

## 2. Play the game

At the bottom of the screen is a **Terminal**. Click it and type:

```
npm start
```

You are now playing. Try typing `look`, then `go north`.

Press `Ctrl + C` to stop the game.

## 3. Change the game

Open the file `src/game.ts`. That is where the game lives.

* The **`rooms`** object holds all the places in your world.
* The **`handle()`** function decides what happens when the player types.
* The **`state`** object remembers where the player is.

Try this first: add a new room. Copy the `library` block, paste it, rename it,
and add an exit from `entrance` so you can walk there.

Nothing you do can break the setup. If everything goes wrong, you can always
start again from the original file.

## 4. Save your work

Your changes are saved automatically in the cloud. To keep a copy of your own:

1. Click the **Source Control** icon on the left (it looks like a branch).
2. Type a message like `added a new room`.
3. Click **Commit**, then **Publish Branch**.

## Handy commands

| Command | What it does |
| --- | --- |
| `npm start` | Run your game |
| `npm test` | Check your game still works |
| `npx tsc --noEmit` | Check for TypeScript mistakes |
