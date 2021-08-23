function quarterOf(month) {
  switch (month) {
    case 1:
      return 1;
      brake;
    case 2:
      return 1;
      brake;
    case 3:
      return 1;
      brake;
    case 4:
      return 2;
      brake;
    case 5:
      return 2;
      brake;
    case 6:
      return 2;
      brake;
    case 7:
      return 3;
      brake;
    case 8:
      return 3;
      brake;
    case 9:
      return 3;
      brake;
    case 10:
      return 4;
      brake;
    case 11:
      return 4;
      brake;
    case 12:
      return 4;
      brake;
  }
}

// quarterOf();

function findSmallestInt(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}

// findSmallestInt([78, 56, 232, 12, 8]);

function reverseWords(str,arr = []) {
arr = str.split(" ")
console.log(arr);
for(let i = arr.length; i--;) {
    console.log(arr[i]);
  }
}

reverseWords("world! hello")