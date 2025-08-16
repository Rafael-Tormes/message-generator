console.log("Random Message Generator");
const randMessages = {
  first: ["We", "You", "They"],
  second: [" smell", " seem", " are"],
  third: [" stinky.", " gross.", " lovely."],
};

const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

const genMessage = (arr1, arr2, arr3) => {
  let tempArr1 = arr1;
  let tempArr2 = arr2;
  let tempArr3 = arr3;

  let firstWord = tempArr1[randomNum()];
  let secondWord = tempArr2[randomNum()];
  let thirdWord = tempArr3[randomNum()];
  return `${firstWord}${secondWord}${thirdWord}`;
};

console.log(
  genMessage(randMessages.first, randMessages.second, randMessages.third)
);
