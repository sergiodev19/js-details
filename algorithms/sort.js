const arr = [3, 0, -5, 10, 6, 9, 8, 16, -1];
const count = 0;

function selectionSort(arr, count = 0) {
  let result = { arr, count };

  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = i+1; j < arr.length; j++) {
      result.count++;

      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  result.arr = arr;

  return result;
}

function bubbleSort(arr, count = 0) {
  let result = { arr, count };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.count++;

      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  result.arr = arr;

  return result;
}

let counter = 0;
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    counter++;

    if (i === pivotIndex)
      continue;
    
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return  [...quickSort(less), pivot, ...quickSort(greater)];
}

// console.log(selectionSort(arr, count));

// console.log(bubbleSort(arr, count));

// console.log(quickSort(arr));
// console.log(counter);

