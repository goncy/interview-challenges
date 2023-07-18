## [Valid Parentheses](./__tests__/valid-parentheses.test.ts)

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

### Examples

"()" => true
")(()))" => false
"(" => false
"(())((()())())" => true

### Constraints

0 <= input.length <= 100

## [Count Salutes](./__tests__/count-salutes.test.ts)

There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

### Input

People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

### Examples

Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.

## [Vasya Clerk](./__tests__/vasya-clerk.test.ts)

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single100,50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

### Examples

tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25,50,25,100,25,25,25,100,25,25,50,100,50,25]) // => NO
