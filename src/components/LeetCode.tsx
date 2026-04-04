function containsDuplicate(nums: number[]): boolean {
  const unique = [...new Set(nums)];
  return unique.length !== nums.length;
}
