const generateRandomNum = (max: number): number => {
  return Math.floor(Math.random() * max + 1);
};

function getRandomNumbers(howMany: number, max: number): Set<number> {
  const randomNumbers = new Set();

  while (randomNumbers.size < howMany) {
    const num = generateRandomNum(max);
    if (!randomNumbers.has(num)) randomNumbers.add(num);
  }

  return randomNumbers;
}

class Player {
  name: string;
  role: "townsperson" | "werewolf" | "seer";
  alive: boolean;
  constructor(name: string) {
    this.name = name;
    this.role = "townsperson";
    this.alive = true;
  }
}

class WerewolfGame {
  players: Player[];
  constructor(names: string[]) {
    this.players = names.map(name => new Player(name));
  }

  determineRoles = (
    role: "townsperson" | "werewolf" | "seer",
    numberOfPlayersToAssign: number
  ): void => {
    /*
    Assigns a number of players to a role.
    Mutates `this.players`.
    */
    let assignedPlayers = 0;

    while (assignedPlayers < numberOfPlayersToAssign) {
      const index: number = generateRandomNum(this.players.length - 1);
      if (this.players[index].role === "townsperson") {
        this.players[index].role = role;
        assignedPlayers += 1;
      }
    }
  };
}

/*
Five players

Wolves acknowledge each other.

First Day

*/
