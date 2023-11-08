const merge = (first, second) => {
  const temp = [];
  let i = 0;
  let j = 0;

  while(i < first.length && j < second.length) {
    if (first[i] >= second[j]) {
      temp.push(second[j]);
      j++;
    } else {
      temp.push(first[i]);
      i++;
    }
  }

  while(i < first.length ) {
    temp.push(first[i]);
    i++
  }

  while(j < second.length) {
    temp.push(second[j]);
    j++
  }

  return temp;
};

const mergeSort = array => {
  if (array.length === 1) {
    return [array[0]];
  }

  const midIndex = Math.floor(array.length / 2);
  const firstPart = mergeSort(array.splice(midIndex));
  const secondPart = mergeSort(array);

  return merge(firstPart, secondPart);
};

console.log(mergeSort([6, 3, 7, 8, 1, 9]));