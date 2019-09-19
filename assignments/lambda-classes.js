class Person {                                    
    constructor(attributes){                          
        this.name = attributes.name,       
        this.age = attributes.age,                  
        this.location = attributes.location,      
        this.height = attributes.height,
        this.skill = attributes.skill,
        this.faveFood = attributes.faveFood
        this.subject = attributes.subject
    }                                                
    speak(){                                                
        return `Hello! My name is ${this.name} and I am from ${this.location}`;     
      }  
                                                
    } 
class Student extends Person{             
    constructor(attributes){                         
        super(attributes);                         
        this.previousBackground = attributes.previousBackground,    
        this.className = attributes.className,
        this.faveSubjects = attributes.faveSubjects,
        this.grade = attributes.grade
    }                                             
    listsSubjects(){                                             
        return `Favorite subjects are ${this.faveSubjects[i]}`                  
    }                                                         
    prAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
    showGrade(subject){
        return `${this.name} has a ${this.grade} in ${subject}`
    }   
    graduate(student){
        if (student.grade > 80){
            return `${student.name} has graduated!`
        }
        else {
            return `${student.name} did not graduate. D:`
        }
    }
}                                                                 

class Instructor extends Person{             
    constructor(attributes){                         
        super(attributes);                         
        this.specialty = attributes.specialty,    
        this.faveLanguage = attributes.faveLanguage,
        this.catchPhrase = attributes.catchPhrase
    }                                             
    demo(subject){                                             
        return `Today we are learning about ${subject}`;                
    }                                                         
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
    gradeChange(student){
       student.grade = (student.grade + getRandomInt())
       return `${student.name}'s new grade is now ${student.grade}`
    }
}    

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.faveInstructor = attributes.faveInstructor
    }
    standUp(slackChannel){
        console.log `${name} announces to ${slackChannel}, @channel standup times!`
    }
    debugsCode(subject){
        console.log `${name} debugs ${student.name}'s code on ${subject}`
    }
}


// STUDENTS //

const joshua = new Student({
    name: 'Joshua Edgerton',
    location: 'Texas',
    age: 28,
    height: "6'2",
    skill: 'Coding... sort of...',
    grade: 90,
});

// INSTRUCTORS //

const thomas = new Instructor({
    name: 'Thomas Utsey',
    location: 'USA',
    subject: "Javascript"
});

// PROJECT MANAGERS //

const don = new ProjectManager({
    name: 'Don Whitely',
    location: 'USA',
    subject: "Javascript"
});

//  CONSOLE.LOGS //

console.log(joshua.speak());
console.log(thomas.speak());
console.log(don.speak());
console.log(thomas.demo("Javascript"));
console.log(don.demo("Hacking the universe"));
console.log(thomas.grade("Joshua", "Javascript"));
console.log(joshua.showGrade("Javascript"));

// STRETCH PROBLEMS //

// CONSOLE.LOG OF THE NEW GRADE AFTER CHANGE //
console.log(thomas.gradeChange(joshua));
// FUNCTION THAT GENERATES A RANDOM INTEGER BETWEEN 1 AND 100 //
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(-10));
  }
// CONSOLE.LOG TO TEST RANDON INTEGER FUNCTION //
  console.log(getRandomInt());
// CONSOLE.LOG TO SHOW IF STUDENT HAS GRADUATED OR NOT //
  console.log(joshua.graduate(joshua));



// CODE TO GENERATE A RANDOM OPERATOR BETWEEN "+" AND "-"
  var operators = [{
    sign: "+",
    method: function(){}
},{
    sign: "-",
    method: function(){}
}];

var selectedOperator = Math.floor(Math.random()*operators.length);
// CONSOLE.LOG TO SH OW RANDOM OPERATOR OUTPUT //
console.log(operators[selectedOperator].sign) //this will give you the sign

function randomOperator(){
    return operators[selectedOperator].sign;
}
