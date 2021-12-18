var jobTitle = ["Junior developer", "Middle developer", 
// "Senior developer", 
// "Junior QA", "Middle QA", "Senior QA",
// "Project Manager"
];

var names = [];
var team = new Object;    
team.employees = [];

var getNames = function(){

  for (var i = 0; i < jobTitle.length; i++) {
    var name = prompt("Please write name - ");
    names[i] = name;  
  }
}

var createTeam = function(){  

  for(i = 0; i < jobTitle.length; i++) {
    team.employees[i] = new Object();
    team.employees[i].name = names[i];
    team.employees[i].position = jobTitle[i];
  }
}

var setSalary = function() {
  
  for(i = 0; i<jobTitle.length; i++) {
    
    var computerChoice = Math.random();
    
    if (team.employees[i].position.includes("Junior") == true) {
      team.employees[i].salary = Math.round(500 + 500*computerChoice);
    }
    else if (team.employees[i].position.includes("Middle") == true) {
      team.employees[i].salary = Math.round(1500 + 500*computerChoice);
    }
    else if (team.employees[i].position.includes("Senior") == true) {
      team.employees[i].salary = Math.round(2500 + 500*computerChoice);
    }
    else {
      team.employees[i].salary = Math.round(4500 + 500*computerChoice);
    }      
  }
  //Не использовал IndexOf , так как метод Include мне понравился больше. С IndexOf в коде была бы проверка к 0 вместо True
}

getNames();
createTeam();
setSalary();

for(i = 0; i < jobTitle.length; i++) {
  team.employees[i].tellAboutYourSelf = function() {
    console.log("Меня зовут " + team.employees[i].name + " и я - " + team.employees[i].position + ". Я зарабатываю " + team.employees[i].salary + "$.")
  }
  team.employees[i].tellAboutYourSelf();
}

team.showTeam = function() {
  for (var elem in team.employees) {
    if (typeof team.employees[elem] !== 'function') {
      console.log(team.employees[elem].name + " - " + team.employees[elem].position + ". Зарплата - " + team.employees[elem].salary + "$.");
    }
  }
}

team.showTeam();


