/**
 * Counting Sort Implementation
 * 
 * Counting sort is a sorting technique based on keys between a specific range.
 * It works by counting the number of objects having distinct key values (kind
 * of hashing). Then doing some arithmetic to calculate the position of each
 * object in the output sequence.
 * 
 * @see https://en.wikipedia.org/wiki/Counting_sort
 * 
 * @ Time Complexity of Solution:
 * Best Case O(n+k); Average Case O(n+k); Worst Case O(n+k),
 * 
 * @ Space Complexity of Solution:
 * Worst Case O(n+k).
 *
 * where n is the size of the input array and k means the values range from 0
 * to k.
 * 
 * Stability of Solution: Yes
 * In-Place of Solution: No
 * 
 * @param {number []} list the array of numbers to be sorted.
 * @return {number []} the sorted array in non-decreasing order.
 *
 */

const countingSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  const min = Math.min(...list);
  const max = Math.max(...list);

  const count = new Array(max - min + 1).fill(0);

  for (let i = 0; i < list.length; i++) {
    const index = list[i] - min;
    count[index]++;
  }

  let sortedList = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedList.push(i + min);
      count[i]--;
    }
  }

  return sortedList;
}

export default countingSort;