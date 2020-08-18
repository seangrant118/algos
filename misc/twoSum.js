// Given an array of ints, return indicies of the two numbers such that those two numbers add up to a spec target

//Assume only one solution

// less efficeit solution

function twoSumsLesser(nums, target) {
  nums.forEach(num, (idx) => {
    nums.forEach(num2, (idx2) => {
      if (num + num2 === target) {
        return [idx, idx2];
      }
    });
  });
}

// More efficient solution

function twoSumsGreater(nums, target) {
  const prevValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;

    if (prevValues[neededValue] != null) {
      return [prevValues[neededValue], i];
    } else {
      prevValues[currentValue] = i;
    }
  }

  return [];
}
