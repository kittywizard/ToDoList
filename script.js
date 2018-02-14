var d = new Date();
var test = document.getElementById("test");
var textInput;

//display today's date at the top
document.getElementById("date").innerHTML = d.toDateString();
//can this be changed to a better looking format? D:

var items;
//use querySelectorAll to get every instance of li!

//create button variable and event listener to retrieve data
var button = document.getElementById("submit");
button.addEventListener("click", function(textInput) {
  textInput = document.getElementById("addToList").value;

  var newListItem = document.createElement("li");
  var newListNode = document.createTextNode(textInput);

  newListItem.appendChild(newListNode);

  var list = document.getElementById("list");
  // Insert <li> before the first child of <ul>
  list.insertBefore(newListItem, list.childNodes[0]);

  //run this to force it to loop through all List
  //there's gotta be a better way?
  updateLIs();
});

//loop through all LIs to determine cross out, or hover
function updateLIs() {

  items = document.querySelectorAll("li");
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
      this.classList.add("hover");
    });

    items[i].addEventListener("mouseout", function() {
      this.classList.remove("hover");
    });

    //also want to make a way to delete item once crossed off
    items[i].addEventListener("click", function() {
      this.classList.add("done");
      //add an ability to delete
    });

  }
}

//TODO
//delete items after they've been crossed out
//fix issue with the updateLIs function
