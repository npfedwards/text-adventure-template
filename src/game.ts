/**
 * ============================================================
 *  YOUR GAME LIVES IN THIS FILE
 * ============================================================
 *
 * A text adventure is just three things:
 *
 *   1. Some STATE  -- where the player is, what they are carrying.
 *   2. Some ROOMS  -- places the player can be, and how they connect.
 *   3. Some VERBS  -- what happens when the player types a word.
 *
 * Everything below is a starting point. Change it, break it, rebuild it.
 * There is no wrong answer -- if it runs, it is correct.
 */

/** What a room looks like. Add your own fields if you want. */
export type Room = {
  name: string;
  description: string;
  /** Which room each direction leads to, e.g. { north: "kitchen" }. */
  exits: Record<string, string>;
};

/** The whole world. Each key here is a room id. */
const rooms: Record<string, Room> = {
  entrance: {
    name: "Entrance Hall",
    description:
      "You stand in a dusty hall. A wooden door leads north.\n" +
      "A brass lamp sits on a small table.",
    exits: { north: "library" },
  },
  library: {
    name: "Library",
    description:
      "Shelves of books tower over you. The air smells of old paper.\n" +
      "The hall is back to the south.",
    exits: { south: "entrance" },
  },
};

/** The player's current situation. */
const state = {
  currentRoom: "entrance",
  finished: false,
};

/** What the game can return from handle(). */
export type TurnResult = {
  message?: string;
  finished?: boolean;
};

/** Good practice: keep the game readable in one place. */
function describeRoom(): string {
  const room = rooms[state.currentRoom];
  return `${room.name}\n\n${room.description}`;
}

/**
 * THE HEART OF THE GAME.
 *
 * `input` is whatever the player typed, e.g. "go north".
 * Decide what should happen, and return a message to show them.
 */
function handle(input: string): TurnResult {
  const words = input.toLowerCase().trim().split(/\s+/);
  const verb = words[0];
  const rest = words.slice(1).join(" ");

  switch (verb) {
    case "":
      return { message: describeRoom() };

    case "look":
      return { message: describeRoom() };

    case "go": {
      const direction = rest;
      const room = rooms[state.currentRoom];
      const destination = room.exits[direction];

      if (!destination) {
        return { message: "You cannot go that way." };
      }
      state.currentRoom = destination;
      return { message: describeRoom() };
    }

    case "quit":
      return { message: "You slip back into the real world.", finished: true };

    default:
      return {
        message: `I do not know how to "${verb}". Try: look, go north, quit`,
      };
  }
}

/** Everything the game exposes to index.ts. */
export const game = {
  title: "The Dusty Hall",
  intro: "Type 'look' to see where you are, 'go north' to move, 'quit' to stop.",
  handle,
};
