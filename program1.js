function smallestMissingPositiveInteger(nums) {
  const n = nums.length;
  
   let j = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          j++;
      }
  }
  
   const x = nums.slice(j);
  
   for (let i = 0; i < x.length; i++) {
      const index = Math.abs(x[i]) - 1;
      if (index < x.length && x[index] > 0) {
          x[index] = -x[index];
      }
  }
  
   for (let i = 0; i < x.length; i++) {
      if (x[i] > 0) {
          return i + 1;
      }
  }
  
   return x.length + 1;
}

module.exports = smallestMissingPositiveInteger;

