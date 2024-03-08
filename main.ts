// Task # 1

// Hello world

console.log("Hello World");


// Task # 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string = "ERIC";
let message: string = "would you like to learn some python today";
console.log(`Hello ${personName}, " ${message}"`);




// Task # 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Haseeb";
 // Lowercase
 console.log("lowercase:" , personName.toLowerCase());
 // uppercase
 console.log("uppercase:" , personName.toLocaleUpperCase());
 //titlecase
 console.log("titlecase:" , personName.replace(/\bw/g,c => c.toLocaleUpperCase()));




 // Task # 4
// //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”



let personName: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new";
console.log(`${personName} once said, "${quote}"`);



// Task # 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = "A person who never made a mistake never tried anything new";
console.log(`${famous_person} once said, "${message}"`);





// Task # 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName: string = `\n\t Haseeb Naeem\n\t`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);




// Task # 7 & 8
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// ou should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4);
console.log(4 * 2);
console.log(10 - 2);
console.log(16 / 2);



// Task # 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber: Number = 7;
let message: string = "My favourite number is:";
console.log(`${message} ${favouriteNumber}`);



// Task # 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// My name is Haseeb Naeem
// dated: 22-2-2024
// This code will print my name
console.log("Haseeb Naeem");




// Task # 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


let names: string[] = ["Haseeb", "Ali", "Imran", "Bilal", "Usama"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);




// Task # 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



let names: string[] = ["Haseeb", "Ali", "Imran", "Bilal", "Usama"];
let message: String = "You are invited for dinner at my home";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
console.log(names[4] + " " + message);



// Task # 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["Honda", "Toyota", "Audi"];
let statements: string = "I would like to own a";
console.log(statements + " " + transportation[0]);
console.log(statements + " " + transportation[1]);
console.log(statements + " " + transportation[2]);



// Task # 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let personName: string[] = ["Ali", "Hamza", "Usama"];
let message: string = "You are invited for dinner at my home";
console.log(personName[0] + " " + message);
console.log(personName[1] + " " + message);
console.log(personName[2] + " " + message);

// Task #15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



let personName: string[] = ["Ali", "Hamza", "Usama"];
let canNotAttent: string = "Ali";
let message: string = "cannot attent the dinner due to personal reason";
console.log(canNotAttent + " " + message);
let newGuest: string = "Haseeb";
personName [personName.indexOf(canNotAttent)] = newGuest;
console.log(personName);
personName.map((items) => console.log(`Dear ${items} you are invited fot the dinner at my home.`));

// Task # 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guestName: string[] = ["Ali", "Hamza", "Usama", "Kamran"];
let canNotAttent: string = "Ali";
let newGuest: string = "Haseeb"
guestName[guestName.indexOf(canNotAttent)] = newGuest;
console.log(guestName);
guestName.map((item) => (
 console.log(`Dear ${item}, I found a bigger dinner table hence you are invited for dinner.`)  
));
let guestBegin: string = "Saad";
guestName.unshift(guestBegin);
console.log(guestName);
let middleGuest: string = "Rabail"
let middleindex = guestName.length/2
guestName.splice(middleindex,0,middleGuest);
console.log(guestName);
guestName.push("Rosheen");
console.log(guestName);
guestName.map((item) => (
   console.log(`Dear ${item}, you are invited for the dinner.`)
));

// Task # 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


console.log("I can invite only two people for dinner");
while(guestName.length>2) {
   let removeGuest = guestName.pop()
console.log(`Dear ${removeGuest}, you are not invited for the dinner`)
};
guestName.map((item) =>
console.log(`Dear ${item}, you are still invited for the dinner`));
guestName.pop()
console.log(guestName);

// Task # 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let invitedGuest: string[] = ["Ali", "Hamza"];
let guestLength: number = invitedGuest.length;
console.log(`only ${guestLength} guests will attent the dinner`);



// Task # 18

// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let places: string[] = ["Karachi", "Lahore", "Islamabad", "Murree", "Swat"];
console.log("Original order :" , places);
console.log("Alphabetical order :" , [...places].sort());
console.log("original order after sorting :", places);
console.log("reverse alphabetical order :", [...places].sort().reverse());
console.log("original order after reverse sorting :", places);
console.log("reverse order :", places.reverse());
console.log("original order :", places.reverse());
console.log("Alphabetical order :", [...places].sort());
console.log("Reverse alphabetical order :", places.sort((a,b) => b.localeCompare(a)));



// Task # 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let cities: string[] = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Sukkur"];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
console.log(cities[4]);



// Task # 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let profile: {name: string, age: number, education: string} = {name: "Haseeb Naeem", age: "26", education: "B.E"};
console.log(profile);




// Task # 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let names: string[] = ["Haseeb", "Ali", "Imran"];
console.log(names[0]);


// Task # 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car: string = "Subaru";
console.log("is car == 'subaru'? predict True.");
console.log(car == 'Subaru');
console.log("is car != 'Honda City'? predict True.");
console.log(car != 'Honda City');
console.log("is car.length == '6'? predict True")
console.log(car.length == 6);
console.log("is car != 'Honda Civic'? predict True.");
console.log(car != 'Honda Civic');
console.log("is car.length != '5'? predict True. ");
console.log(car.length != 5);
console.log("is car == 'Audi'? predict False.");
console.log(car == 'Audi');
console.log("is car.length == '5'? predict False.");
console.log(car.length == 5);
console.log("is car == 'Toyota Corolla'? predict False. ");
console.log(car == 'Toyota Corolla');
console.log("is car == 'Suzuki'? predict False.")
console.log(car == 'Suzuki');
console.log("is car != 'Subaru'? predict False.");
console.log(car != "Subaru");



// Task # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array





let name1: string = "Haseeb";
let name2: string = "Naeem";
let name3: string = "Haseeb";
if(name1 == name2) {
    console.log(name1 = name2, "hence names are equal");
} else {
    console.log(name1 != name2, "hence names are not equal");
}
if(name1 == name3) {
    console.log(name1 = name3, "hence names are equal");
} else {
    console.log(name1 != name3, "hence names are not equal");
}

//for equality and inequality

let num1: number = 5;
let num2: number = 10;
let num3: number = 5;
if(num1 == num2) {
    console.log(num1 = num2, "numbers are equal");
} else {
    console.log(num1 != num2, "numbers are not equal");
}
if(num1 == num3) {
    console.log(num1 = num3, "numbers are equal");
} else {
    console.log(num1 != num3, "numbers are not equal");
}

// greater than and less than

let person1: number = 20;
let person2: number = 25;
let person3: number = 30;
if(person1 > person2) {
    console.log("person1 is older than person2");
} else {
    console.log("person1 is younger than person2");
}

//greater than or equal to and less than or equal to

let age: number = 20;
if(age >=18) {
    console.log(age, "you are eligible for vote");
} else {
    console.log(age, "you are not eligible for vote");
}

let age: number = 15;
if(age >=18) {
    console.log(age, "you are eligible for vote");
} else {
    console.log(age, "you are not eligible for vote");
}

// and operator or operator

const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// array and not in array

const names: string[] = ["Haseeb","Ali", "Imran"];
console.log(names.includes("Haseeb"));
console.log(names.includes("haseeb"));





// Task # 25
// // Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)





let alien_color: string = "green";
if(alien_color == "green") {
    console.log("Player just earned 5 points");
}

let alien_color: string = "red";
if(alien_color == "green") {
    console.log("no output");
}





// Task # 26
// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.






let alien_color: string = "green";
if(alien_color == "green") {
    console.log("player just earned 5 points");
} else {
    console.log("player just earned 10 points");
}




// Task # 27
//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.






let alien_color: string = "green";
if(alien_color == "green") {
    console.log("player earned 5 points");
} else if(alien_color == "yellow") {
    console.log("player earned 10 points");
} else if(alien_color == "red") {
    console.log("player earned 15 points");
}


let alien_color: string = "yellow";
if(alien_color == "green") {
    console.log("player earned 5 points");
} else if(alien_color == "yellow") {
    console.log("player earned 10 points");
} else if(alien_color == "red") {
    console.log("player earned 15 points");
}

let alien_color: string = "red";
if(alien_color == "green") {
    console.log("player earned 5 points");
} else if(alien_color == "yellow") {
    console.log("player earned 10 points");
} else if(alien_color == "red") {
    console.log("player earned 15 points");
}




// Task # 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.






let personAge: number = 26;
if(personAge <= 2) {
    console.log("person is a baby");
} else if(personAge >= 2 && personAge <= 4) {
    console.log("person is a toddler");
} else if(personAge >= 4 && personAge <= 13) {
    console.log("person is a kid");
} else if(personAge >= 13 && personAge <= 20) {
    console.log("person is a teenager");
} else if(personAge >= 20 && personAge <= 65) {
    console.log("person is an adult");
} else if(personAge >= 65) {
    console.log("person is an elder");
}




// Task # 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!





const favorite_fruits: string[] = ["Banana", "Orange", "Apple"];
if(favorite_fruits.includes("Banana")) {
    console.log("you really like bananas");
} if(favorite_fruits.includes("Apple")) {
    console.log("you really like Apple");
} if(favorite_fruits.includes("Kivi")) {
        console.log("you really like Kivi")
    } else {
        console.log("kivi is not in your favorite list");
    } if(favorite_fruits.includes("Orange")) {
        console.log("you really like oranges");
    } if(favorite_fruits.includes("grape fruit")) {
        console.log("you really like grape fruits");
    } else {
        console.log("grape fruits are not in your favorite list");
    }





    // Task # 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.





let user: string[] = ["admin", "haseeb", "eric", "ali", "imran", "saad"];

for(let i=0; i<user.length; i++)
  if(user[i] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log(`Hello ${user[i]},thank you for logging in again.`);
}



// Task # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.





let usernames: string[] = ["Haseeb", "Ali", "Imran", "Yaseen", "Saad"];
if(usernames.length === 0) {
    console.log("We need to find some users!");
}else{
    for(let i=0; i<=usernames.length; i++);
}
console.log(usernames);

// second part

let usernames: string[] = [];
if(usernames.length ===0) {
    console.log("We need to find some users!");
}else{
    for(let i=0; i<usernames.length; i++);
}
console.log(usernames);





// Task # 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.






let currentUsers: string[] = ["ali", "haseeb", "imran", "saad", "bilal"];
let newUsers: string[] = ["Ali", "qasim", "junaid", "Haseeb", "tahir"];
for(let newUser of newUsers) {
    let isAvailable = true;
    for(let currentUser of currentUsers) {
        if(newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`username "${currentUser}" is already taken. Please choose a different username.`);
            isAvailable = false;
            break;
        }
    }
    if(isAvailable) {
        console.log(`username "${newUser}" is available`);
    }
}





// Task # 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.




let numbers: number[] = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<numbers.length; i++) {
    let suffix: string;
    if(numbers[i] === 1) {
        suffix = "st";
    }else if(numbers[i] === 2) {
        suffix = "nd";
    }else if(numbers[i] === 3) {
        suffix = "rd";
    }else{
        suffix = "th";
    }
    console.log(`${numbers[i]}${suffix}`);
}







// Task # 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!





let favoritePizzas: string[] = ["chicken tikka", "chicken fajita", "behari chicken"];
for(let i=0; i<favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} flavour pizza.`);
}
console.log("I really love Pizza!");




// Task # 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!





let animals: string[] = ["Cat","Parrot", "Dog"];
for(let i=0; i<animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");




// Task # 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.



function make_shirt(size: string, message: string): void {
   console.log(`I am making a "${size}" T-Shirt with a message on it "${message}"`);
}
make_shirt("Large", "I love my country");




// Task # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function make_shirt(size: string, message: string): void {
   console.log(`I am making "${size}" T-Shirt with a message on it "${message}"`);
}
make_shirt("Large", "I love Typescript");
make_shirt("Medium", "I love Typescript");
make_shirt("Small", "I love Pakistan");





// Task # 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.




function describe_city(city: string, country: string = "Pakistan"): void{
   console.log(`"${city}" is in "${country}"`);
}
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("New York", "America");




// Task # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.




function city_country(city: string, country: string): void{
   console.log(`"${city}", "${country}"`);
}
city_country("Karachi", "Pakistan");
city_country("Beijing", "China");
city_country("Sydney", "Australia");





// Task # 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.





function make_album(artist: string, title: string, tracks?: string): object {
   let album: object ={
       artist: artist,
       title: title,
       track: tracks,
   };
   if (tracks) {
       album: tracks = tracks
   }
   return album;
}
let album1 = make_album("Atif Aslam", "Teri Yad", "6");
let album2 = make_album("Ali Zafar", "Masti", "5");
let album3 = make_album("Rihana", "I am lonely", "8");
console.log(album1)
console.log(album2)
console.log(album3)



// function make_album(artist: string, title: string): {artist: string, title: string} {
// const songs = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1)
//     title: title.charAt(0).toUpperCase() + title.slice(1)
// return songs;
// }
// let album = make_album("Teri Yad", "Atif Aslam");
// console.log(album);






// Task # 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



function show_magicians(magicians: string[]): void {
   for(const magician of magicians) {
       console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
   }
}
const magician: string[] = ["haseeb", "ali", "imran"];
show_magicians(magician)







// Task # 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



function make_great(magicians: string[]): void {
   for(let i = 0; i < magicians.length; i++) {
       magicians[i] = magicians[i]   +      " the great "
   }
} 
const magicians2: string[] = ["Haseeb","Saad", "Usama"]
make_great(magicians2)
console.log(magicians2);






// Task # 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.




function make_great2(magicians: string[]): string[] {
   const greatMagicians: string[] = [];
   for(let i = 0; i < magicians.length; i++) {
       greatMagicians.push(magicians[i]  +   " the great ");
   }
   return greatMagicians;
}
const magicians3: string[] = ["Haseeb", "Ali", "Arslan"]
console.log(magicians3);






// Task # 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.




function sandwich(...items: string[]): void {
   console.log("sandwich order:")
   for(let i = 0; i < items.length; i++) {
       console.log(` - ${items[i]}`)
   }
   }
   console.log("I like grilled club sandwiches");
   sandwich("chicken","onion","olives");
   sandwich("bbq sauce", "mashroom", "ice berg");
   sandwich("mayo garlic sauce", "fried egg", "ketchup");






   // Task # 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



type car = {
   manufacturer: string
   model: string
   name: string
   year: number
}
function carSpec(manufacturer: string, model: string, name: string, year: number): car {
   return {
       manufacturer,
       model,
       name,
       year,
   }
}
const myCar: car = carSpec("Honda", "City", "Aspire", 2024)
console.log(myCar);
     




