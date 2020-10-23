const recurse = function () {
  let counter = 0;
  const inner = function () {
    if (counter === 10) {
      return;
    }
    console.log(counter);
    counter++;
    inner();
  };
  inner();
};
