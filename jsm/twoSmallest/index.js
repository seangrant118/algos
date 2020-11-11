const sumTwoSmallestNumbers = (numbers) => {
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
};
