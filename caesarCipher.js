const caesarCipher = (() => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  return (string, shift) => {
    let encryptedString = "";

    // Iterate through each character of the provided stnrig
    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      // Get the corresponding index of the current character from "alphabet"
      let index = alphabet.indexOf(char.toLowerCase());

      // If char is found in alphabet, perform shift
      if (index >= 0) {
        // Get index after shifting the current character
        let shiftedIndex =
          (index + (alphabet.length + shift)) % alphabet.length;

        // Retrieve the corresponding character from "alphabet" after the shift
        char = isUpperCase(char)
          ? alphabet[shiftedIndex].toUpperCase()
          : alphabet[shiftedIndex];
      }

      // Append the character to the encrypted string
      encryptedString += char;
    }

    return encryptedString;
  };
})();

export default caesarCipher;
