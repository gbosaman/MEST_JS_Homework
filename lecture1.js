/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge'; //variable name can't start with a number 
var cupCake = 'variable'; //can't use a researved word as a variable name
var firstName = 'Jerry'; //no space in variable name
var schoolName = 'MEST'; //
var totalNumber = 100; //camel cased it

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'Its nice to me you today!';
var response = 'Ashwin said, Yes Sir!';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 because they are of the same type
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
 function Pizza (size, type, prize) {
 	this.size = size;
 	this.type = type;
 	this.prize = prize;
 }

 var somePizza = new Pizza ('Large', 'Chicken', '12', 'Cheese')

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 var animal = {name:'Elephant', habitat:'Forest', feedingtype:'Herbivore'}

var animal = Object.create(animal);
function Animal (name, habitat, feedingtype) {
	this.name = name;
	this.habitat = habitat;
	this.feedingtype = feedingtype;
}

Animal.prototype.trait = function() {console.log('Can jump to the moon')};

Animal.prototype.trait = function() {console.log('Can jump to space')};

function Lion(name){
	this.name = name;
}

lion.prototype = new Animal();
var lioni = new lion ('lion');
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
