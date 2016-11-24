# Off-week

Thanksgiving break code wars assessments.

## songDecoder

Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.


### Best Practice Answer (found after completion)
```javascript
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}
```

## goodVsEvil

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits - 1
Men - 2
Elves - 3
Dwarves - 3
Eagles - 4
Wizards - 10
On the side of evil we have:

Orcs - 1
Men - 2
Wargs - 2
Goblins - 2
Uruk Hai - 3
Trolls - 5
Wizards - 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

### Best Practice Answer (found after completion)
```javascript
function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) {
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}
```

## listNames

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

```javascript
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
```

### Best Practice Answer (found after completion)
```javascript
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
 ```

## array_diff

Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.
```javascript
difference([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must be removed from the other:
```javascript
difference([1,2,2,2,3],[2]) == [1,3]
```

### Best Practice (found after completion)
```javascript
function array_diff(a, b) {
  return a.filter(function (v) { return b.indexOf(v) === -1 });
}
```

## Clay Pigeon Shooting
Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

Note that as there are three rounds, the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

### Clever Answer (found after solving)
```javascript
shoot=x=>(y=x.reduce((a,b)=>a+(b[0].P1.split("O").length-b[0].P2.split("O").length)*(b[1]+1),0))>0?'Phil Wins!':y<0?'Pete Wins!':'Draw!'
```


## Triangle Type
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

### Best Practice (found after answering. Mine was kind of similar for once!)

```javascript
function triangleType(a, b, c){
  var result = triangleType.ACUTE,
      sides = [a,b,c].sort(function(a,b){return a-b});

  a = sides[0], b = sides[1], c = sides[2];

  if(a <= c - b) {
    result = triangleType.INVALID;

  } else if(c*c === a*a + b*b) {
    result = triangleType.RIGHT;

  } else if(c*c > a*a + b*b) {
    result = triangleType.OBTUSE;
  }

  return result;
}

triangleType.INVALID = 0;
triangleType.ACUTE = 1;
triangleType.RIGHT = 2;
triangleType.OBTUSE = 3;
```

## Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

### Best Practice (found after answering)
```javascript
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}
```

## Find the odd int
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

### Whoops

I thought the problem was asking me to find the number that appeared an odd amount of times
as in a different amount of times than other numbers. For example, if the number
3 showed up 5 times, the number 4 showed up 5 times, and the number 2 showed up four
times, it should return 4. I kept failing the random tests and could not figure out why.
I left my original answer in there because I think it is a cool function, but lesson learned!
RTFD. (To my credit the instructions could possibly be worded better)

### Best Practice (found after answering)
```javascript
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
```
