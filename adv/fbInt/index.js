// given two words, begin and endWord, and a word list, find the length of the shortest transformation sequence from begin to end such that:

//only one letter can change at a time

// each transformed word must exist in the wordlist

// return the length of the shortest transformation sequence, or 0 if no such sequence exists

// beginword and endword are not empty nor the same

const wordTransformer = function (beginWord, endword, Wordlist) {
  let counter = 0;
  let notFound = true;
  let answer = wordList.length;

  const oneOff = function (base, list) {
    let result = [];
    list.forEach((word) => {
      let counter = 0;
      word.split("").forEach((letter, i) => {
        if (base[i] !== letter) {
          counter++;
        }
      });
      if (counter === 1) {
        result.push(word);
      }
    });
  };

  const inner = function (base, list) {
    counter++;
    if (base === endword) {
      notFound = false;
      answer = Math.min(answer, counter);
      return;
    }
    const approvedList = oneOff(base, list);
    if (approvedList.length === 0) {
      return;
    }
    for (let i = 0; i < approvedList.length; i++) {
      inner(
        approvedList[i],
        list
          .slice(0, list.indexOf(approvedList[i]))
          .concat(list.slice(list.indexOf(approvedList[i]) + 1))
      );
      counter--;
    }
  };
  inner(beginWord, wordList);
  return notFound === true ? 0 : answer;
};
