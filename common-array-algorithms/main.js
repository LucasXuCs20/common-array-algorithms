function myIncludes(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return true;
    }
  }
  return false;
}

function myIndexOf(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return i;
    }
  }
  return -1;
}

function average(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  ans = ans / arr.length;
  return ans;
}

function myMax(arr) {
  let ans = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (ans < arr[i]) {
      ans = arr[i];
    }
  }
  return ans;
}

function count(arr, item) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (item == arr[i]) {
      ans++;
    }
  }
  return ans;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}
