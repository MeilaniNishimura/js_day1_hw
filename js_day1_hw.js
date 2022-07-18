//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(some_string, some_names){
        for (let name of some_names) {
        if (some_string.toLowerCase().includes(name.toLowerCase())){
            console.log('Matched dog_name')
        } else {
            console.log('No matches')
        }
    }
    
    }

findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"])

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){

    for (let i = 0; i < arr.length; i += 2){
            let mySplice = arr.splice(i, 1, "even index")
        }
        console.log(arr)
        return arr
    }


console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/* Code Wars Problems
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
    let q1 = [1,2,3]
    let q2 = [4,5,6]
    let q3 = [7,8,9]
    let q4 = [10,11,12]
    if (q1.includes(month)){
      return 1
      } else if (q2.includes(month)){
        return 2
      } else if (q3.includes(month)){
        return 3
      } else {
        return 4
    }
} // Tested in codewards, solution passed 

/* Code Wars problem 
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let new_age = sonYearsOld*2
    if (new_age > dadYearsOld){
      return new_age - dadYearsOld
    } else {
      return dadYearsOld - new_age
    }
  } // Tested in code wars, solution passed