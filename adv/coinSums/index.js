const coins = [1, 5, 10, 25, 50, 100, 200];

const coinSums = (total) => {
  let counter = 0;
  const recurse = (index, remainder) => {
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index - 1, remainder);
      remainder -= coin;
    }
  };
  recurse(coins.length - 1, total);
  return counter;
};
