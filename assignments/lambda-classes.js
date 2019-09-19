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
        this.faveSubjects = attributes.faveSubjects
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
        return `${student.name} receives a perfect score on ${subject}`;
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
    skill: 'Coding... sort of...'
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
console.log(thomas.demo());

// STRETCH PROBLEMS //

