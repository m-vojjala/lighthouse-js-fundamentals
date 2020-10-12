const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];



const finalPosition = function (moves) {
  let start = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      start[1]++;
    } else if (move === "south") {
      start[1]--;
    } else if (move === "east") {
      start[0]++;
    } else if (move === "west") {
      start[0]--;
    }
  }
  console.log(start);
  return start;
}

console.log(finalPosition(moves));