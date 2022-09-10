# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as 
if you were in a job interview. If you don't know the answer a good tip is to 
answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have 
answered the question completely, there is always something more to learn. 
Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

--- 
<!-- ======================================================================= -->
1. What is git? What is the difference between git and Github?

Your answer: 
* Git is a version control system created by Linus Torvalds who
happens to be the creater of Linux too. It is essentially a super save state 
used in software development, which is used to keep track of changes to 
codebase and allows developers to go back to a previous 'save' in case there
are problems with the codebase.

* Github is one of many formats that can be used with Git. You can utilize Git 
and Github together to share a codebase in the cloud. This allows developers to
easily share and collaborate with other developers.

Researched answer:
* According to: https://git-scm.com/, Git is a free and open source distrubuted 
version control system designed to handle small to large projects quickly and
efficiently. https://git-scm.com/book/en/v2 is a free online book that provides
a plethora of information with everything git.

* According to: https://kinsta.com/knowledgebase/what-is-github/, Github is a 
website and cloud-based service that provides devolopers a way to store and 
manage code.

--- 
<!-- ======================================================================= -->
2. Which JavaScript operators will return a Boolean value?

Your answer: 
* Javascript operators that will return a Boolean value include
'< <= > >= == === ! && || != !=='

examples:
```javascript
(3 > 2)             // true
(3 < 2)             // false
(3 === 2)           // false
(3 !== 2)           // true
(3 > 2 && 2 > 3)    // false
(3 > 2 || 2 > 3)    // true
(3 >= 3 && 2 >= 2)  // true
```

Researched answer: 
* According to: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators, 
the following operators '< <= > >= == === ! && || != !==' are refered to as 
comparison operators. They compare its operands and return a logical value 
based on whether the comparison is true. The operands can be Numerical, string, 
logical, or object values.

--- 
<!-- ======================================================================= -->
3. What is an index? What is the difference between index and value?

Your answer: 
* An index is a location reference used in arrays and strings. JavaScript uses a
zero based index system, meaning it starts the index at 0. An index number can 
be stored in a variable as well to make understanding the code easier, and other 
situations such as going through an array during a loop where the index needs
to change every loop.  

* The difference between index and value is that you use the index to find the 
value. 

Example:
```javascript
arr = ["Cat", "Dog", "Rabbit"];
arr[0] // index: 0, value: "Cat"
arr[1] // index: 1, value: "Dog"
arr[2] // index: 2, value: "Rabbit" 
```
Researched answer:
* According to: 
https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript#indexing-arrays, 
Arrays do not have name/value pairs. Instead, they are indexed with integer 
values beginning with 0.
* According to: https://www.educba.com/javascript-values/, JavaScript values are 
the values that comprise values like Booleans, Strings, arrays, and numbers. 



--- 
<!-- ======================================================================= -->
4. Compare and contrast arrays and strings.

Your answer:
Arrays and Strings Compared:
* Arrays and strings are both primitives
* They both can use bracket notation
* They both have built in methods
* They both can utilize an index
* They both can hold a value
* They can both be declared with var, const, and let
* You can loop through an array and a string

Arrays and Strings Contrasted:
* Strings store string data only
* Arrays can store strings, arrays, objects, integers, booleans, and floats
* Strings cannot change the value with bracket notation
* Arrays can change value with bracket notation


Researched answer:
According to: 
http://www.differencebetween.net/technology/difference-between-array-and-string/,
The main difference between arrays and strings is that arrays can have any data 
type of any length while strings are ASCII characters. It goes on to say that 
a string is a sequence of characters that is represented as a single data item, 
and that an array is a sequenced collection of elements.  

--- 
<!--======================================================================== -->
5. Give a brief description of proper pair programming techniques. What are the 
roles of each person?

Your answer:
* Proper pair programming techniques would revolve around team members effectively
communicating and collaborating with each other to solve problems. This would 
involve one team member that is actively inputing code based on what the other 
member is suggesting.  

Researched answer:
* According to techtarget.com:
https://www.techtarget.com/searchsoftwarequality/definition/Pair-programming#:~:text=Pair%20programming%20is%20an%20Agile,code%20and%20test%20user%20stories.,
pair programming is an Agile software development technique that originated from 
Extreme Programing (XP). The site goes on the say the common implementation of
pair programming calls for a "driver", the person at the keyboard, and the 
"Navigator", the person who focuses on the overall direction of the programming.
Ideally that both members should have equal time at the keyboard.

--- 
<!-- ======================================================================= -->
## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:

2. Jest:

3. Objects:

4. Method:

5. Classes:
