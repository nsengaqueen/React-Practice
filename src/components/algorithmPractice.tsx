function filterEven(arr: number[]) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEven([1, 2, 4, 5, 6, 8]));

function sort(arr: string[]): string[] {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
console.log(sort(["charlie", "Mike", "ariel"]));

function reverse(arr: string): string {
  return arr.split("").reverse().join("");
}
console.log(reverse("ariel"));

function sum(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sum([1, 2, 8, 9]));

function dups(arr: number[]): number[] {
  return [...new Set(arr)];
}
console.log(dups([1, 2, 8, 9]));

function largest(arr: number[]): number {
  return Math.max(...arr);
}
console.log(largest([1, 2, 8, 9]));

function palindrome(arr: string): boolean {
  let reversed = arr.split("").reverse().join("");
  console.log(reversed);

  return reversed === arr;
}
console.log(palindrome("racecar"));






type User = {
  id: number;
  name: string;
  email: string;
}

function filterUsers(users: User[], name: string): User[] {
  return users.filter(user => user.name.toLowerCase === name.toLowerCase);
}

const users = [
  { id: 1, name: "Alice", email: "alice@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
  { id: 3, name: "Charlie", email: "charlie@gmail.com" }
];

console.log(filterUsers(users, "Alice"));
// → [{ id: 1, name: "Alice", email: "alice@gmail.com" }]




function findDuplicates(arr: number[]): number[]{
   return arr.filter((num,index)=>arr.indexOf(num)!= index)
}
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));