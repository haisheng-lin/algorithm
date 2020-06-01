const quickSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[0];
  const smallers: number[] = [];
  const equals: number[] = [];
  const largers: number[] = [];

  nums.forEach(num => {
    if (num < pivot) {
      smallers.push(num);
    } else if (num > pivot) {
      largers.push(num);
    } else {
      equals.push(num);
    }
  });

  return [...quickSort(smallers), ...equals, ...quickSort(largers)];
};

export default quickSort;
