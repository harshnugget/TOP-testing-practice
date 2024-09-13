const caesarCipher = (() => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function isUpperCase(letter) {
    return letter === letter.toUpperCase();
  }

  return (string, shift) => {
    let encryptedString = "";

    // Iterate through each letter of the provided string
    for (let i = 0; i < string.length; i++) {
      // Get the corresponding index of the current letter from "alphabet"
      let index = alphabet.indexOf(string[i].toLowerCase());

      // Get index after shifting the current letter
      let shiftedIndex = (index + (alphabet.length + shift)) % alphabet.length;

      // Retrieve the corresponding letter from "alphabet" after the shift
      let letter = isUpperCase(string[i])
        ? alphabet[shiftedIndex].toUpperCase()
        : alphabet[shiftedIndex];

      // Append the letter to the encrypted string
      encryptedString += letter;
    }

    return encryptedString;
  };
})();

caesarCipher("abc", -3);

export default caesarCipher;
