var objRole1 = { 
  Id: 1, 
  Name: 'System Administrator', 
  Parent: 0 
}; 

var objRole2 = { 
  Id: 2, 
  Name: 'Location Manager', 
  Parent: 1 
};

var objRole3 = {
  Id: 3, 
  Name: 'Supervisor', 
  Parent: 2
}; 

var objRole4 = { 
  Id: 4, 
  Name: 'Employee', 
  Parent: 3 
};

//Array with objects
const roles = [objRole1, objRole2, objRole3, objRole4];

//Button Event
var user = document.getElementById("users");

user.addEventListener("change", function() {
  var result = user.options[user.selectedIndex].value;

//If statement to separate results for roles with no subordinates
  if (result == "Select") {
    document.getElementById("subordinates").innerHTML = "";

  } else if (result === "Employee") {
    document.getElementById("subordinates").innerHTML = "There is no subordinate for this role";

  } else {
  
//Find to get the parentID from Element
    var parent = roles.find(obj => obj.Name == result);
    var parentId = parent.Id;

//Filter roles
    const found = roles.filter(function(element) {
      return element.Id > parentId;
    });
    
//Display roles
    var results = [];

    for(let i = 0; i < found.length; i++) {
      results.push(found[i].Name);
     }
     document.getElementById("subordinates").innerHTML = results; 
  };
});
