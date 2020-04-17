const isPalindrome = (str) => {
  // console.log(
  //   "isPalindrome input str",
  //   str,
  //   str.toString() === str.toString().split("").reverse().join("")
  //     ? true
  //     : false
  // );

  return str.toString() === str.toString().split("").reverse().join("")
    ? true
    : false;
};
const hasPalindrome = (str) => {
  let pals = [];
  let palin = "";
  let strArr = str.toString().split("");
  for (let outeridx = 0; outeridx < strArr.length; outeridx++) {
    for (let idx = 1; idx < strArr.length - outeridx + 1; idx++) {
      palin = strArr.slice(outeridx, idx + outeridx).join("");
      if (isPalindrome(palin)) {
        pals.push(palin);
      }
    }
  }

  return pals;
};
export default hasPalindrome;
