function findRepeatedCharacters(text) {
  const frequencies = {};

  for (const rawCharacter of text) {
    const character = rawCharacter.toLowerCase();

    if (character === " ") {
      continue;
    }

    if (frequencies[character]) {
      frequencies[character] += 1;
    } else {
      frequencies[character] = 1;
    }
  }

  const repeatedCharacters = {};

  for (const character in frequencies) {
    if (frequencies[character] > 1) {
      repeatedCharacters[character] = frequencies[character];
    }
  }

  return repeatedCharacters;
}

console.log(
  "mississippi:",
  findRepeatedCharacters("mississippi"),
);

console.log(
  "React Router:",
  findRepeatedCharacters("React Router"),
);