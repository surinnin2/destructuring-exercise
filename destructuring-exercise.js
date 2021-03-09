/*

Object Destructuring 1
1. 8
2. 1846


Object Destructuring 2
3. {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

Object Destructuring 3
4. 'Your name is Alejandro and you like purple'
5. 'Your name is Melissa and you like green'
6. 'Your name is undefined and you like green'

Array Destructuring 1
7. "Maya" 
8. "Marisa"
9. Chi"

Array Destructuring 2
10. "Raindrops on roses"
11. "whiskers on kittens"
12. ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

Array Destructuring 3
13. [10, 30, 20]
*/

//ES2015 Refactoring

//ES5 Assigning Variables to Object Properties
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

let {numbers:{a, b}} = obj

//ES5 Array Swap
let arr = [1, 2]
[arr[0], arr[1]] = [arr[1], arr]

//raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
