const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const l1 = document.getElementById("1li");
const l2 = document.getElementById("2li");
const l3 = document.getElementById("3li");
const l4 = document.getElementById("4li");
const l5 = document.getElementById("5li");

let col1 = monday.children;
let col2 = tuesday.children;
let col3 = wednesday.children;
let col4 = thursday.children;
let col5 = friday.children;
    
function swap(day,list,col) {
    if (day.offsetHeight == list.offsetHeight + 66) {
        day.style.maxHeight = "none";
        for (let i = 1; i < col.length; i++) {
            col[i].style.display = "block";
        }
    }
    else {
        day.style.maxHeight = `${list.offsetHeight}px`;
        for (let i = 1; i < col.length; i++) {
            col[i].style.display = "none";
        }
    }
};

monday.addEventListener("click", function() {swap(monday,l1,col1)});

tuesday.addEventListener("click", function() {swap(tuesday,l2,col2)});

wednesday.addEventListener("click", function() {swap(wednesday,l3,col3)});

thursday.addEventListener("click", function() {swap(thursday,l4,col4)});

friday.addEventListener("click", function() {swap(friday,l5,col5)});

swap(monday,l1,col1)
swap(tuesday,l2,col2)
swap(wednesday,l3,col3)
swap(thursday,l4,col4)
swap(friday,l5,col5)