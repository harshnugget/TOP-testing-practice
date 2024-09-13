const caesarCipher = (() => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (string, shift) => {
    let encryptedString = "";

    // Iterate through each letter of the provided string
    for (let i = 0; i < string.length; i++) {
      // Get the corresponding index of the current letter from "alphabet"
      let index = alphabet.indexOf(string[i]);

      // Get index after shifting the current letter
      let shiftedIndex = (index + shift) % alphabet.length;

      // Retrieve the corresponding letter from "alphabet" after the shift
      let letter = alphabet[shiftedIndex];

      // Append the letter to the encrypted string
      encryptedString += letter;
    }

    return encryptedString;
  };
})();

export default caesarCipher;
