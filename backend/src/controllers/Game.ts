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
  seenBySeer: boolean;
  constructor(name: string) {
    this.name = name;
    this.role = "townsperson";
    this.alive = true;
    this.seenBySeer = false;
  }
}

export class WerewolfGame {
  players: Player[];
  maxNumOfWerewolves: number;
  maxNumOfSeers: number;
  werewolves: Player[];
  seers: Player[];
  constructor(names: string[]) {
    this.players = names.map(name => new Player(name));
    this.werewolves = [];
    this.seers = [];
    this.maxNumOfWerewolves = 2;
    this.maxNumOfSeers = 1;

    this.determineRoles("werewolf", this.maxNumOfWerewolves, this.werewolves);
    this.determineRoles("seer", this.maxNumOfSeers, this.seers);
  }

  determineRoles = (
    role: "townsperson" | "werewolf" | "seer",
    numberOfPlayersToAssign: number,
    playerList: Player[]
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
        playerList.push(this.players[index]);
        assignedPlayers += 1;
      }
    }
  };

  killPlayer = (index: number): Player[] => {
    if (this.players[index].alive) this.players[index].alive = false;
    return this.players;
  };

  seerSight = (): Player => {
    for (const werewolf of this.werewolves) {
      if (!werewolf.seenBySeer) {
        werewolf.seenBySeer = true;
        return werewolf;
      }
    }
    return null;
  };

  checkVictory = (): "townsperson" | "werewolf" => {
    const numOfWerewolves = this.werewolves.length;
    const numOfPlayers = this.players.length;

    if (numOfWerewolves >= numOfPlayers) return "werewolf";
    if (numOfWerewolves === 0) return "townsperson";

    return null;
  };
}

/*
Five players

Wolves acknowledge each other.

First Day

*/
