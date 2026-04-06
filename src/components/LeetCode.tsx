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
  for(let i=0;i<count;i++){
    if(nums[i] === 0){
      nums.splice(i,1);
      nums.push(0);
      i--;
      count--;
    }
  }
};
