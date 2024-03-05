function findLongestWord(sentence) {
    const longestWord = sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
    return longestWord;
  }
  const inputSentence = "cô thi đẹp gái";
  const result = findLongestWord(inputSentence);
  console.log(result);
  