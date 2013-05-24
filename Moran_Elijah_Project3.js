//alert("JavaScript works!");
// Elijah Moran
// Week 3, Scalable Data Infrastructures
// 5/23/2013
// Project: Guard Duty


// create M4 object
var m4 = {
	brand: "M4",
	model: "carbine",
	rounds: "5.56",
	typeOfRoundsMadeFor: ["blank" , " tracer" ," and live."],
	doesItFire: true,
	allEquipment: true,


// M4 object functions
	inspect: function(rounds)
		{	
			console.log("We will be inspecting " + rounds);
		}
}

// Function going to guard duty
var goingToGuardDuty = function( )
{
	console.log("Today at 5:30, I will be assigned to Guard duty");
}

// displaying the guard force! Return the member who is not here yet
// added a variable for return the member who is not here yet.

var guardForceMembers = function(guardForce, notPresent)

{
	for (var i = 0, j = guardForce.length; i < j; i++)
	{
		var members = guardForce[i];
		console.log(members);
	}
	return guardForce[notPresent];
}

// see if I have a backup Soldier for duty function.

var useBackupMember = function(backupYes, stringYes)
{
	var returnValue;
	if (backupYes === true && stringYes === true)
	{
		returnValue = true;
	}
	
	else
        {
	        returnValue = false;	
        }
        return returnValue;
}


// how many times we need to inspect the guards.
var functionsCheck = function(time)
{	
	var timeToStop = 1755;
	var count = 0;
	while(time < timeToStop)
	{
		console.log("Check your gear again!");
		time += 5;
		count++;
	}
	return count;
}


var endingWords = function(string1, string2)
{
	return string1 + string2;
}


// all equipment function with access to object variable
var allEquipment = function(allEquipmentObject)
{
	if (allEquipmentObject === true)
	{
                console.log ( "The troops have all equipment needed.") }

	else
	{
		console.log("Someone does not have all his gear!");
	}
}


// json data
var upcomingPatrols = function (json)
{
	for (var i = 0; i < json.patrols.length; i++)
	{
		var patrol = json.patrols[i];
		console.log("Search: " + patrol.search + " Search: " + patrol.patrol + " date: " +
		patrol.date);
	}
}

	
// main program
// global variables
var guardForceArray = ["PVT Jones", "PV2 Johnson", "SPC Green", "and myself"],
 	guardNotPresent = 2,
 	backupYes = true,
 	equipmentYes = false,
 	nameOfSoldier = "CPL Lee",
 	time = 1725,
	myWords = " Everyone prepared for guard duty?"
 	spcGreenWords = " It is going to be a long night!";

// main program functions
goingToGuardDuty ();

// array function to output my guardmembers
console.log("My guard members assigned for duty are");

// array function return
console.log("I have just been informed that " + guardForceMembers( guardForceArray, guardNotPresent )
		+ " will be late for guard duty.");
console.log("So we start to prepare for inspection without him for the time being");

// call on the backup guard function (boolean)
console.log("I have to contact the  backup guard and see if he has all of his equipment");

// using if statement for the boolean function return
	if(useBackupMember(backupYes, equipmentYes) === true)
	{
		console.log("The backup guard is present and has all of his equipment!");
	}
	else
	{
		console.log("The backup guard is not present");
		console.log("I have found a replacement!")
	}

// manipulation of the M4 object - accessor and mutator
console.log("Our main weapon is a " + m4.brand +" " + m4.model + ".");
console.log("While " + guardForceArray[2] + " is  " 
					 + (m4.brand = "absent") + (m4.model = " Cpl Lee will fill in"));


// outputting the types of rounds the weapon is made for
console.log("The types of rounds that the M4 carbine can fire are " + m4.typeOfRoundsMadeFor);

//calling on m4 allequipment function with m4.allEquipment object as argument
allEquipment(m4.allEquipment);

// outputting perform functions check
m4.inspect(nameOfSoldier) + console.log("Conduct function check when you are ready");

// using a loop to output how many times we had to conduct the functions check
console.log(functionsCheck(time) +  " times we conducted a inspection before it was  time to leave!");

console.log("Before we all leave, we will be briefed on upcoming patrols tonight");
	
// upcoming patrols feed
upcomingPatrols(json);

     var   myWords = " Everyone prepared for Guard Duty!";
     var   spcGreenWords = " It is going to be a long night!";
console.log(endingtalk = ( myWords));  
console.log(endingtalk = (spcGreenWords));
	