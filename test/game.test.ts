import { test } from "node:test";
import assert from "node:assert/strict";
import { game } from "../src/game.ts";

// These tests describe how the game should behave.
// Run them with:  npm test
// If you change the game and a test fails, decide whether the test or the
// game is wrong -- then fix the one you believe in.

test("looking around describes the starting room", () => {
  const result = game.handle("look");
  const message = typeof result === "string" ? result : result.message;
  assert.match(message ?? "", /Entrance Hall/);
});

test("going north moves you somewhere new", () => {
  game.handle("look"); // reset attention on the current room
  const result = game.handle("go north");
  const message = typeof result === "string" ? result : result.message;
  assert.match(message ?? "", /Library/);
});

test("an unknown command explains itself", () => {
  const result = game.handle("dance");
  const message = typeof result === "string" ? result : result.message;
  assert.match(message ?? "", /do not know/);
});

test("quit ends the game", () => {
  const result = game.handle("quit");
  const finished = typeof result === "string" ? false : result.finished;
  assert.equal(finished, true);
});
