// function generateUserId(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let userId = "";

//   for (let i = 0; i < length; i++) {
//     const index = Math.floor(Math.random() * characters.length);
//     userId += characters[index];
//   }

//   return userId;
// }

// function userIdGenerateByUser() {
//   const numberCharacter = parseInt(prompt("Enter number of characters:"));
//   const numberIds = parseInt(prompt("Enter number of Ids:"));

//   const userIds = [];

//   for (let i = 0; i < numberIds; i++) {
//     const newUserIds = generateUserId(numberCharacter);
//     userIds.push(newUserIds);
//   }

//   return userIds;
// }

// const generateId = userIdGenerateByUser();
// console.log(generateId);

function rgbColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `${red}, ${green}, ${blue}`;
}

const randomColor = rgbColorGenerator();
console.log(randomColor);

function generateHexColor() {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    color += characters[randomIndex];
  }

  return color;
}

function arrayOfHexaColors(numColors) {
  const hexColors = [];

  for (let i = 0; i < numColors; i++) {
    const hexColor = generateHexColor();
    hexColors.push(hexColor);
  }

  return hexColors;
}

const hexColor = arrayOfHexaColors(2);
console.log(hexColor);

function hex2Rgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}

function hexArray2RgbArray(hexColors) {
  const rgbColors = hexColors.map((hexColor) => hex2Rgb(hexColor));
  return rgbColors;
}

console.log(hexArray2RgbArray(hexColor));

function rgbToHex(rgb) {
  const colors = rgb.split(", ").map(Number);
  const hex = colors.reduce(
    (acc, color) => acc + color.toString(16).padStart(2, "0"),
    "#"
  );
  return hex.toUpperCase();
}

console.log(rgbToHex(randomColor));
