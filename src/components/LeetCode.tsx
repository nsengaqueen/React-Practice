function containsDuplicate(nums: number[]): boolean {
  const unique = [...new Set(nums)];
  return unique.length !== nums.length;
}


function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
 
    return  s.split('').sort().join('') === t.split('').sort().join('');
};


function groupAnagrams(strs:string[]):string[][]{
const map = new Map <string,string[]>()

for(let letter of strs){
    const key = letter.split('').sort().join('') 

    if(map.has(key)){
        map.get(key)!.push(letter)
    }
    else{
        map.set(key,[letter])
    }
}
return Array.from(map.values())
}