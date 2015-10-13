//               YOU WILL NOT SEE THE CONSOLE.LOG AND ALERT MESSAGES FROM THE SCRIPT.JS FILE   	 
//	                  - EACH STEPS / QUESTIONS ARE  COMMENTED OUT  USING A MULTILINE COMMENT 
//   	
//
//
//     	REMOVE THE FIRST AND LAST LINE OF THE MULTILINE COMMENT IN EACH STEP / QUESTION TO SEE THE CONSOLE.LOG AND ALERT
//     
//
//
//                       			 JOE MCDONALD  OCTOBER 12 2015
//
// ==========================================================================================================
// ==========================================================================================================
//						                 	 ASSIGNMENT     5 
//								           
//  ---------------------------------------------                            -------
 //  jQuery 
 //  !function(){
//	      console.log('self invoking anonymous funcion'); 
//   } ();
//
//       window.onLoad = function() {}      
 
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  --------------------------------  PRACTICE FORMS & DOM EVENT MODEL         -------------
//  ----------------------------------------------------------------------------------------   

//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 1 BUTTON                             -------------  
//  ----------------------------------------------------------------------------------------

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/

   console.log("\n\n----------  STEP 1  BUTTON  -----------");

function writeMessage() {
	window.alert("I have been clicked 1");
}


//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 2 BUTTON ID element method         -------------  
/*
2. Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
*/
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  STEP 2  BUTTON  ID ELEMENT METHOD -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/
function myFunction() {
   var myElement = window.document.getElementById("myButton2");
   window.alert("I have been clicked 2 ");
}


//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 3 BUTTON EVENT LISTENER              -------------  
/*
3. Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.

*/
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  STEP 3  BUTTON EVENT LISTENER  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/






//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 3 BUTTON EVENT LISTENER                             -------------  
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  STEP 1  BUTTON EVENT LISTENER  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/



//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 3 BUTTON EVENT LISTENER                             -------------  
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  STEP 1  BUTTON EVENT LISTENER  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/




//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 3 BUTTON EVENT LISTENER                             -------------  
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  STEP 1  BUTTON EVENT LISTENER  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/






/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

//  ----------------------------------------------------------------------------------------
//  -----------------------------    STEP 1  NAMESPACE ANIMAL & SUB NAMESPACES -------------  
//  ----------------------------------------------------------------------------------------

console.log("\n\n----------  Part 1 STEP 1  -----------");



/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

var ANIMAL = ANIMAL || {};  				// NAMESPACE  if it already exist else create empty object

ANIMAL.CAT = ANIMAL.CAT || {};  			    // sub NAMESPACE
ANIMAL.CAT.mamal =  function(type, color) 
{ 
	this._type = type;
	this._color = color;
	
	this.getTypeColor = function ()
	{ 
		return this._type + " " + this._color;		// display function returned values
	}
	return this;
} 
alert (window.ANIMAL.CAT.mamal("tiger"," black").getTypeColor());

//  ------

ANIMAL.DOG = ANIMAL.DOG  || {};  			    // sub NAMESPACE
ANIMAL.DOG.mamal = function(type, color) 
{ 
	this._type = type;
	this._color = color;
	return this._type + " " + this._color;
}
 alert (ANIMAL.DOG.mamal("siamise" ,"orange"));		// display returned values
 
 
*/    


//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 2  CLASS                           -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 2  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

 //    "object-literal notation"  FIRST EXAMPLE

var Cat = { 								// DEFINE CLASS OBJECT LITERAL NOTATION
	name: "SHORTY",
	displayCatInfo: function(color, size) {
		return(color + " " + this.name + " " + size) ;
		}	
	};
console.log("my cat is = " + Cat.displayCatInfo("BLACK", "LARGE" ));
console.log("The name of the cat is = " + Cat.name + " \n"  ); 

//  --------------

//    "object-literal notation"  SECOND  EXAMPLE

var oldCat = { name : "SHORTY" }    // Create a new variable and assign to the oldCat object 
var newCat = oldCat;      // Change the name property of the NEW CAT object using the oldCat variable 

console.log(" BEFORE CHANGE" + " \n" );
console.log(" oldCat.name =  " + oldCat.name   + " \n" ); 
console.log(" newCat.name = " + newCat.name + " \n"  ); 

//---

newCat.name = "FATTY";                // NOTE THE CHANGING OF THE NEW CAT NAME TO FATTY 
									
console.log(" AFTER CHANGE" + " \n" );
console.log(" oldCat.name =  " + oldCat.name   + " \n" ); // because it is a object literal the name property changed for the entire script
console.log(" newCat.name = " + newCat.name + " \n"  ); 

//  ----------------------------------------------

 //  prototype constructor  FIRST EXAMPLE 
 
function Mamal() { console.log (' 1 - Mamal has been created'); } // OBJECT VARIABLE

var Dog = new Mamal();						// 
console.log(Dog.constructor);  				// Returns: function Person()

//  --------------

//  prototype constructor  SECOND EXAMPLE 

var Dog = function()
{  this.name = "SHORTY"; }

var oldDog = new Dog ();
var newDog = new Dog (); 

console.log(" BEFORE CHANGE" + " \n" );
console.log(" oldDog.name = " + oldDog.name);
console.log(" newDog.name = " + newDog.name);	

newDog.name = "FATTY";

console.log(" AFTER CHANGE" + " \n" );
console.log(" oldDog.name = " + oldDog.name);			// NOTE THAT THE NAME REMAINED THE SAME FOR THIS
															// OBJECT INSTANCE 
														// CHANGE TO ONE INSTANCE OF OBJECT WILL NOT EFFECT 																// THE  OTHER INSTANCES OF THE NAME
console.log(" newDog.name = " + newDog.name);			



*/  

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 3  CLASS                           -------------
//  ----------------------------------------------------------------------------------------

console.log("\n\n----------  Part 1 STEP 3  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

function Mamal() {}  		 			  // DEFINE CLASS OBJECT VARIABLE
var Cat = new Mamal();		 			  // OBJECT VARIABLE INSTANCE NAMES 
var Dog = new Mamal();		 			  // OBJECT VARIABLE INSTANCE NAMES 

*/  


//  ----------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 4  CLASS    LITERAL SYNTAX         -------------
//  ----------------------------------------------------------------------------------------

console.log("\n\n----------  Part 1 STEP 4  -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

function Animal1() {console.log(" step 4 Animal has been created");}  	 // DEFINE CLASS OBJECT VARIABLE
var Cat =  new Animal1(); 


*/   



//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 5  CLASS  MIMIC CONSTRUCTOR         -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 5  -----------");
 
 /*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

 
 function Animal2() {};
				
function Animal2(color) {
	console.log(" step 5 Animal has been created");
	this._color = color;
	console.log("THE COLOR INSIDE THE FUNCTION BEFORE CHANGE = " + this._color); 
	if (this._color == "RED" ){ 
		this._color = "YELLOW";
		console.log (" 1 THE COLOR INSIDE THE FUNCTION AFTER CHANGE = " + this._color);
		return "1 THE COLOR INSIDE THE FUNCTION AFTER CHANGE = " + this._color ; 
	                }
	             }  	 // DEFINE CLASS OBJECT VARIABLE
var Dog =  new Animal2("RED");	 	

console.log("THE COLOR OUTSIDE THE FUNCTION AFTER CALL = " + (Dog._color) );	
console.log(Dog);

*/   

//  ----------------------------------------------------------------------------------------
//  -----------------------------  STEP 6  CLASS LITERAL SYNTAX PROPERTIES CONSTRUCOR -------------
//  ----------------------------------------------------------------------------------------
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------


console.log("\n\n----------  Part 1 STEP 6  CLASS LITERAL SYNTAX PROPERTIES CONSTRUCOR  -----------");

 //    "object-literal notation"  FIRST EXAMPLE

var Animal3 = { 								// DEFINE CLASS OBJECT LITERAL NOTATION
	name: "SHORTY",
	type: "",
	breed: "",
	color: "",
	height: 0,
	length: 0,
	
	displayAnimalInfo: function(type, breed, color, height, length) {return(this.name + " " + type + " " + breed + " " + color + " " + height + " " + length);
		}	
      };
console.log("My animal's name is = " + Animal3.name + " and its properties are  " + Animal3.displayAnimalInfo("CAT", "TIGER", "BLACK", 5 , 7 ));
console.log("The name of the animal is = " + Animal3.name + " \n"  ); 
*/   

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 7  CLASS     FOR IN LOOP           -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 7  FOR IN LOOP -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

console.log("\n\nStep 7 Animal class properties\n\n");

for (var property in Animal3) {
    console.log("Animal class property =  " + property);
}
*/    

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 8  METHOD SPEAK ANIMAl             -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 8  METHOD SPEAK ANIMAl       -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------




function Animal4( name, type, breed, color, height, length)
{ 	this.name = name;
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}

Animal4.prototype.displayAnimalInfo= function()
{
	return(this.name + " " + this.type + " " + this.breed + " " + this.color + " " + this.height + " " + this.length);
};

Animal4.prototype.speak = function () {  
	alert("SPEAK - Animal name is "  + this.name  + "   type is  " + this.type);     
	if (this.type == "DOG" ) {
		return "SPEAK - The " + this.color + " " + this.type + " is barking!";
	}
	else if (this.type == "CAT" ) {
		return "SPEAK - The " + this.color + " " + this.type + " is meowing!"; }
	else {
		return "SPEAK - This is a " + this.type; }
 };

var cat = new Animal4 ("KITTY", "CAT", "TIGER", "BLACK", 5 , 7 );
var dog = new Animal4("BUTCH", "DOG", "GERMAN", "BROWN", 22, 50 )	;

console.log("Properties of the class cat =  " + (cat.displayAnimalInfo()));
console.log("Properties of the class dog =  " + (dog.displayAnimalInfo()));

console.log(dog.speak());
console.log(cat.speak());

*/   


	
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 9  METHOD PRIVATE                  -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 9  METHOD PRIVATE     -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

function Animal5( name, type, breed, color, height, length)
{ 	name = name;
	type = type;
	breed = breed;
	color = color;
	height = height;
	length = length;
    checkType = function() {
		if (type == "DOG") {
			return "DOG";
			} else if (type == "CAT") {
			return "CAT" ;
			} else {
			return "OTHER" ;
			}
	  };
	checkName= function() {
		return name;
		} ;

 this.getType = function () {         
	return checkType();
 };
		
 this.getName = function () {         
	return checkName();
 };
}
			
Animal5.prototype.speak = function () {  
	alert("SPEAK - Animal name is "  + this.getName() + "   type is  " + this.getType());     
	if (this.getType() == "DOG" ) {
		return "SPEAK - The animal named " +  this.getName() + " type " + this.getType() + " has made a noise!";
	}
	else if (this.getType() == "CAT" ) {
		return "SPEAK - The animal named  " +  this.getName() + " type " + this.getType() + " is meowing!"; 
	}
	else {
		return "SPEAK - This is a " + this.getType() + " type of animal!"; 
	}
 };

var cat = new Animal5 ("KITTY", "CAT", "TIGER", "BLACK", 5 , 7 );
console.log(cat.speak());
var dog = new Animal5("BUTCH", "DOG", "GERMAN", "BROWN", 22, 50 )	;
console.log(dog.speak());

*/  

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 10 METHOD            -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 10  METHOD        -----------");





//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 11  ABSTRACT BASE CLASS            -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 11  ABSTRACT BASE CLASS             -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------


//  The Vehicle Class
var Vehicle = function(make, model) {
	this.make = make;
	this.model = model;
	this.miles = 0;
	this.oilMiles = 0;
}
*/   

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 12             -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 12           -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------


//  The Vehicle Class
var Vehicle = function(make, model) {
	this.make = make;
	this.model = model;
	this.totalMiles = 0;
	this.drivenMiles = 0;
	this.type = "";
	this.lastOilChange = lastOilChange;
}


*/    
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 13             -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 13           -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

//  The Vehicle Class
var Vehicle = function(make, model) {
	this.make = make;
	this.model = model;
	this.totalMiles = 0;
	this.drivenMiles = 0;
	this.type = "";
	this.lastOilChange = lastOilChange;
}

//The drive Method
Vehicle.prototype.drive = function(miles) {
	this.drivenMiles += miles;
	return this;
};
*/    
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 14                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 14           -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------


Vehicle.prototype.checkOil = function() {
	if (this.totalMiles - this.lastOilChange >= 3000) {
		return "You need an oil change!";
	} else {
		return "You don't need an oil change!";
	}
	return this;
};
*/    
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 15                                -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 15          -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

//  The Car Class
var Car = function(doors) {
	this.doorCount = doors;
}
*/    
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 16                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 16          -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

//  The Car Class
var Car = function(doors) {
	this.doorCount = doors;
}
*/   
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 17                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 17          -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

//  The Car Class
var Car = function(doors) {
	this.doorCount = doors;
	if (this.doorCount > 2) {
       this.type = "Sedan";
   } else {
        this.type = "Coupe";
    }
}
*/   
//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 18                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 18          -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------


Car.prototype = new Vehicle("Dodge", "Stratus", 20000, 17000); 

*/    

//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 19                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 19          -----------");


//  ----------------------------------------------------------------------------------------
//  -----------------------------      STEP 20                                 -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------  Part 1 STEP 20          -----------");


//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------



//  ----------------------------------------------------------------------------------------
//  -----------------------------      RECIPE CARD                               -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------      RECIPE CARD           -----------");
/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

var Recipe = function(title, servings, ingredients)
{  
   this.title = title;
   this.servings = servings;
   this.ingredients = ingredients; 

Recipe.prototype.displayInfo =  function() 
	{
	console.log("\n\n" + this.title + "\n" + "servings: "  + this.servings + "\n" + "Ingredients: \n"   );    
	for (i = 0 ; i <this.ingredients.length; i++) { console.log("- " + this.ingredients[i] + "\n" ); }
    };	
};	
	
var Guacamole = new Recipe ("Guacamole", 9, ["3 Alvacados", "2 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tabelspoons Cilantro",  "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper" ] );	

Guacamole.displayInfo( );
	
var Pizza = new Recipe ("Pizza", 15, ["10 tomatoes", "2 Mushrooms", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Peppers",  "2 Cups Olives", "1 Teaspoon Garlic", "1 Pinch Ground Pepper","5 slices peperoni", "5 cups cheese", "4 cups flour" , "1 cup yeast" , "1/2 cup oil"   ] );	

Pizza.displayInfo();

*/


//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------


//  ----------------------------------------------------------------------------------------
//  -----------------------------      READING LIST                             -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------      READING LIST           -----------");


//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------


//  ----------------------------------------------------------------------------------------
//  -----------------------------      BLANKS                             -------------
//  ----------------------------------------------------------------------------------------
console.log("\n\n----------      BLANKS           -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------

(function()  {
    var person = function ( first, last, age, eyecolor) {     // anonymous class
    	this._firstName = first;
		this._lastName = last;
		this._age = age;
		this._eyeColor = eyecolor;
        person.buy = function (car) {
	      console.log("I'm rich - so I will buy the Car Make:  " + car._make ) ;
          return this._firstName + " " + this._lastName;
	       };
    };
//-----
    var car = function(make, model, doors, miles, price) {		// anonymous class
        this._make = make;
		this._model = model;
		this._doors = doors;
		this._miles = miles;
		this._price = price;
        car.drive = function(miles) {		// totals the driven miles 
		    this._miles += miles;
		    return this;
		};	
		car.getPrice = function() {
			this._price = price;
			console.log("CAR PRICE a  " + this._price);
			return price;
		};
	};
//-----	
var John = new person("John", "Doe", 50, "blue");	// instance of the person class
var Sally = new person("Sally", "Rally", 48, "green"); // instance of the person class
var myCar = new car("Chevy", "Impalla", 4, 20000, 300000);  // instance of the car clas	
	
// print vroom vroom
car.drive();	
	console.log("VROOM VROOM" +  " & the miles are "  + myCar._miles	);
	
car.getPrice();	
    // print 'I'm rich'
    if (myCar._price > 100000) { 
		console.log(myCar._price  + " car price is greater ");
        person.buy(myCar);
    }
}());

*/

