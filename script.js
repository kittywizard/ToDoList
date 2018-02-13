var d = new Date();
var list = document.querySelectorAll("li");
//use querySelectorAll to get every instance of li!


//display today's date at the top
document.getElementById("date").innerHTML = d.toDateString();


//loop through all LIs to determine cross out, or hover
for(var i = 0; i < list.length; i++){
  list[i].addEventListener("mouseover", function() {
    this.classList.add("hover");
  });

  list[i].addEventListener("mouseout",function() {
    this.classList.remove("hover");
  });

//also want to make a way to delete item once crossed off
  list[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });

}

var test = document.getElementById("test");

//create button variable and
var button = document.getElementById("submit");
button.addEventListener("click", function() {
  var textInput = document.getElementById("addToList").value;
  console.log(textInput);
});
//need a way to add new items to List

//save input to variable

//add contents of input to a new li


//delete items after they've been crossed out
//
