function containsDuplicate(nums: number[]): boolean {
  const unique = [...new Set(nums)];
  return unique.length !== nums.length;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let letter of strs) {
    const key = letter.split("").sort().join("");

    if (map.has(key)) {
      map.get(key)!.push(letter);
    } else {
      map.set(key, [letter]);
    }
  }
  return Array.from(map.values());
}

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }

  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

function isPalindrome(s: string): boolean {
  let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newS === newS.split("").reverse().join("");
}

function validPalindrome(s: string): boolean {
  function isPalin(str: string): boolean {
    return str === str.split("").reverse().join("");
  }
  for (let i = 0; i < s.length; i++) {
    const newStr = s.slice(0, i) + s.slice(i + 1);
    if (isPalin(newStr)) {
      return true;
    }
  }
  return false;
}

function moveZeroes(nums: number[]): void {
  let count = nums.length;
  for (let i = 0; i < count; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      count--;
    }
  }
}

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]);

        while (left < right && nums[right] === nums[right - 1]);

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let profit = prices[i] - minPrice;

    if (profit > max) {
      max = profit;
    }
  }

  return max;
}

function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum / k;

  for (let right = k; right < nums.length; right++) {
    sum += nums[right];
    sum -= nums[right - k];
    max = Math.max(max, sum / k);
  }
  return max;
}

function removeDuplicates(nums: number[]): number {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }
  return left + 1;
}
