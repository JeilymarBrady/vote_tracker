// 'use strict';
// Suggestions:
//
// Photo **could** have properties like 'path' and 'votes', and perhaps a receiveVote() method (and/or others).
//
// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(), getRandomPhotos(), displayKittens(), updateTally(), resetResults(), castVote(), and so on.

// Your aim should be to compartmentalize repeatable actions into individual methods, and to use properties to store the data changes.

//PHOTO
var Photo = function(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
};

  var imgs = [];
// var path = './images/';
// for(var i = 1; i < 15; i++){
//   imgs.push(path + i + '.jpg');
//   //imgs.push(new Photo(path + i + '.jpg'));
// }
// console.dir(imgs);
  imgs.push(img1 = new Photo("img1", './images/1.jpg'));
  imgs.push(img2 = new Photo("img2", './images/2.jpg'));
  imgs.push(img3 = new Photo("img3", './images/3.jpg'));
  imgs.push(img4 = new Photo("img4", './images/4.jpg'));
  imgs.push(img5 = new Photo("img5", './images/5.jpg'));
  imgs.push(img6 = new Photo("img6", './images/6.jpg'));
  imgs.push(img7 = new Photo("img7", './images/7.jpg'));
  imgs.push(img8 = new Photo("img8", './images/8.jpg'));
  imgs.push(img9 = new Photo("img9", './images/9.jpg'));
  imgs.push(img10 = new Photo("img10", './images/10.jpg'));
  imgs.push(img11 = new Photo("img11", './images/11.jpg'));
  imgs.push(img12 = new Photo("img12", './images/12.jpg'));
  imgs.push(img13 = new Photo("img13", './images/13.jpg'));
  imgs.push(img14 = new Photo("img14", './images/14.jpg'));
console.log(imgs);
// };

//NOT A FUNCTION ATM
// var refreshPhotos = function() {
  var rand = Math.floor((Math.random() * 13) + 1);
  var cat1 = imgs[rand];
  var get1 = cat1.path;
  var one = document.getElementById("imgL");
  one.innerHTML = "<img src='" + get1 + "'/>";
  do {
    rand = Math.floor((Math.random() * 13) + 1);
    var cat2 = imgs[rand];
    get2 = cat2.path;
  } while (get1 === get2);
  var two = document.getElementById("imgR");
  two.innerHTML = "<img src='" + get2 + "'/>";
// };

//Updates after left click
var left = document.getElementById("imgL");
left.addEventListener('click', function(e){
  e.preventDefault();
  for(var i = 0; i<imgs.length; i++){
    if(e.target.source===imgs[i]){
console.log("match found: " + imgs[i]);
      imgs[i].votes++;
      var scoreL = document.getElementById("leftscore");
      scoreL.innerHTML = imgs[i].votes;
console.log("Left cat votes: " + imgs[i].votes);

    }
console.log("not finding a match");
  }
console.log(imgs);
});

//Updates after right click
var right = document.getElementById("imgR");
right.addEventListener('click', function(e){
  e.preventDefault();
  for(var i = 0; i<imgs.length; i++){
    if(e.target.source===imgs[i]){
console.log("match found: " + imgs[i]);
      imgs[i].votes++;
      var scoreR = document.getElementById("rightscore");
      scoreR.innerHTML = imgs[i].votes;
console.log("Right cat votes: " + imgs[i].votes);
    }
console.log("not finding a match");
  }
console.log(imgs);
});

//Triggers for two new cats
var newBattle = document.getElementById("button");
newBattle.addEventListener('click', function(e){
  e.preventDefault();
    var rand = Math.floor((Math.random() * 13) + 1);
  var cat1 = imgs[rand];
  var get1 = cat1.path;
  var one = document.getElementById("imgL");
  one.innerHTML = "<img src='" + get1 + "'/>";
  do {
    rand = Math.floor((Math.random() * 13) + 1);
    var cat2 = imgs[rand];
    get2 = cat2.path;
  } while (get1 === get2);
  var two = document.getElementById("imgR");
  two.innerHTML = "<img src='" + get2 + "'/>";
  // refreshPhotos();
});

//Necessary call to get first two pictures
//refreshPhotos();

// Tracker.prototype.vote = function() {

// };

// Tracker.prototype.winner = function() {

// };

// Tracker.prototype.updateVote = function() {
// }

// var newBattle = document.getElementById("button");
// newBattle.addEventListener('click', function(){
//

// });
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

// And for a doughnut chart
var graph = document.getElementById("graph").getContext('2d');
var myDoughnutChart = new Chart(graph).Doughnut(data);

// graph.innerHTML(myDoughnutChart);
