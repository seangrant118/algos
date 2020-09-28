const rps = function (rounds) {
  let results = [];
  let possibilities = ["r", "p", "s"];

  const play = function (playedSoFar, rounds) {
    if (rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    for (let i = 0; i < 3; i++) {
      play(playedSoFar + possibilities[i], rounds - 1);
    }
  };
};
