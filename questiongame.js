//------------------------------Questiongame-----------------------------//////

/*
1)building a function constructor called Question to describe a question.A question
should include 
a)question itself
b)the answeres from which the employer can choose the correct ans
c)correct answer (I would use a umber for this)

2)create a couple of questions using the constructor
3)store them all inside the array

*/
function Question(question,answers,correct){
               this.question=question;
               this.answers=answers;
               this.correct=correct;
}


//method is written into the questions prottype property
//which is protype of the all the instances created through it
Question.prototype.displayQuestion =
function(){
	console.log(this.question);
	for(var i=0;i<this.answers.length;i++){
		console.log(i+': '+this.answers[i]);
	}
}
Question.prototype.checkanswer =
function(ans,callback){
	var sc;
	if(ans===this.correct){
		console.log('correct answer');
		sc=callback(true);
	} else{
		console.log('wrong answer ! please try again ');
		sc=callback(false);
	}
	this.displayscore(sc);
}

Question.prototype.displayscore=function(score){
	console.log('your current score is ' + score);
	console.log('--------------------------------')
}
var q1= new Question('Is javascript the coolest programming language in the world? ',
	                   ['yes','no'],0);
/*the new word creates a new empty object ,then the function is called, 
the function then relates to the this keyword, the this keyword is then related 
to the empty object*/

var q2=new Question('what is the name of this laptop owner',['pavani','pushkar','leela'],1);
var q3=new Question('what is the name of the clg', ['uta','uc','umbc'],2);

//since we want continous functions we write a function for that



var questions=[q1,q2,q3];

function score(){
	var sc=0;
	return function(correct){
		if(correct){
			sc++;
		} return sc;
	}
}

var keepscore=score();
function nextquestion(){
	//we then need to retrieve a random number from this array
//so we need to select a number between 0,1,2 so that we select q1,q2,q3
var n=Math.floor(Math.random()*questions.length);
//the below statment will give us the random question
questions[n].displayQuestion();

///ask the user for the correct answer
//the answer here is taken in the format of the strong therfore we convert it
//in the form of the int so we use the parseint function
var answer =prompt('please select the correct answer ');


///calling the function again
//passing the answer from our user

if(answer!== 'exit'){
	questions[n].checkanswer( parseInt(answer),keepscore);
 nextquestion();
}
}

nextquestion();

//but by doing the above we we get a continous functions so to stop it is writig exit
