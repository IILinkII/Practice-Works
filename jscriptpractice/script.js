console.log("asdfsadf");
/**
 * Data Types:
 * undefined, null, boolean, string, symbol, number, and object
 */
//declaring a variable u can use

var myName="Christian";
//var means you're going to be able to used in whole program

let ourName= "freeCodeCamp";
//let means it will only be used within the scope where you declare.

const pi = 3.14
//cannot be change

/**Storing Values with Assignment Operator*/
var a; //declaring
var b=2; // declaring and assigning and initializing
console.log(b);
/**Initializing Variables w/ Assignment Operator */
var c = 3;
console.log(c);

/**Initialize theses three variables */
var a = 10;
var b = 15;
var c = "Christian";
d=a+1;
e=b+3;
f=c+" Rodriguez"
console.log(d,e,f);
/**Case Sensitivity in variables 
 * variable names and function names are case sensitive in JavaScript that means the Capitalization matters
*/
var Chair;
chair=10;
console.log(chair);
/**Increment */
var myNum = 84;
myNum++;
console.log(myNum);
/**Decrement */
var myNum = 84;
myNum--;
console.log(myNum);
/**Decimal */
var myDecimal = 0.0002;
console.log(0.0002);
/**Multiplying Decimals */
var myDecimal = 2.0;
a = myDecimal*2.5;
console.log(a);
/**Dividing Decimals */
var myDecimal = 7.0;
a = myDecimal/2.5;
console.log(a);
/**Finding Remainder */
var remainder;
remainder = 11 % 3;
console.log(remainder);
/**Compound Assignment with Augmented Addition shortcut += */
var a = 3;
a+=12;
console.log(a);
/**Compound Assignment with Augmented Subtraction shortcut -= */
var a =3;
a-=12;
console.log(a);
/**Compound Assignment with Augmented Multiplication shortcut *= */
var a = 3;
a*=12;
console.log(a);
/**Compound Assignment with Augmented Division shortcut /= */
var a = 3;
a/=12;
console.log(a);
/**Declare String Variables - String Literals*/
var firstName = "Alan";
var lastName = "Turing";
console.log(firstName,lastName);
/**Escaping Literal quotes in Strings - sometimes ur string contains quotes symbols */
var myStr= "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
/**Quoting String with a single quotes */
var myStr= 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);
/**Escape Sequences in Strings*/
/**
 * CODE OUTPUT
 '
 "
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */
var myStr = "FirstLine\nSecondLine\tThirdLine\\FourthLine";
console.log(myStr);
/**concatenating Strings with Plus Operator */
var myStr = "I come first. "+"I come second.";
console.log(myStr);
/**Concatenating Strings with Plus Equals Operator */
var myStr = "I come first. "
myStr += "I come second."
console.log(myStr);
/**Constructing String with Variables */
var a = "Christian";
var b = "My name is "+a+" Rodriguez";
console.log(b);
/**Appending Variables to Strings */
var a = "My name is ";
var b = "Christian";
a += b;
console.log(a);
/**Find Length of a String */
var firstNameLength = 0;
var firstName = "Christian Rodriguez";
firstNameLength = firstName.length;
console.log(firstNameLength);
/**Bracket Notation to Find First Character in String 
 * -bracket notation is a way to get a character in a specific within a string
 * zero base indexin
 */
 var firstNameLength = "";
 var firstName = "Christian Rodriguez";
 firstNameLength = firstName[0];
 console.log(firstNameLength);
 /**String immutability 
  * -string are immutable- meaning they cannot be altered once they are created.
  * but this does not mean that they cannot be change
 */
var myStr = "Jello World";
myStr[0] = "H";
console.log(myStr);//when we run this there will be an error because of the immutability of the string
/**Bracket Notation to Find Nth Character in String */
var firstName="Christian";
var thirdLetter = firstName[2];
console.log(thirdLetter) ;
/**Brackey Notation to Find Last Character in String */
var firstName = "Christian";
var lastLetter = firstName[firstName.length-1];
console.log(lastLetter);
/**Bracket Notation to find Nth-to-Last Character in String */
var firstName = "Christian";
var thirdLetterOfLastName = firstName[firstName.length-3];
console.log(thirdLetterOfLastName);
/**Word Blanks
 * we will use knowledge of string to build a madlives style word games
 */
function wordBlanks(noun, adjective, verb, adverb){
    var result = "";
    result += "The "+adjective+" " +noun+" " +verb+ " " + adverb+".";
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));
 /**Store Multiple Values with Arrays
 * every element in array is separated by comma
 */
  var array = ["John",23];
  a = array[0];
  console.log(a);
 /**Modify Array Data with Indexes */
 var array = ["John",23];
 array[1]=50;
 console.log(array);
/**Next Array
  * -multidimensional array
  */
 var array = [["Christian",25],["Bill",23]];
 var b = array[0];
 console.log(b);
 /**Access Multi-Dimensional Arrays With Indexes */
var array = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = array[2][1];
var myData2 = array[3][0][0]
console.log(myData);
console.log(myData2);
/**Manipulate Data with PUSH function to add arrays at the end of array */
var array = [1,2,3];
array.push(4,5,6);
console.log(array);
/**Manipulate Arrays with pop means to remove the last element*/
var array = [1,2,3];
array.pop();
console.log(array);
/**Manipulate Array with Shift means to remove the first element */
var array = [1,2,3];
array.shift();
console.log(array);
/**Manipulate Array with Unshift to add arrays at the beginning of array */
var array = [1,2,3];
array.unshift(0);
console.log(array); 

