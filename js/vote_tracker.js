// 'use strict';
// Suggestions:
//
// Photo **could** have properties like 'path' and 'votes', and perhaps a receiveVote() method (and/or others).
//
// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(), getRandomPhotos(), displayKittens(), updateTally(), resetResults(), castVote(), and so on.

// Your aim should be to compartmentalize repeatable actions into individual methods, and to use properties to store the data changes.


//PHOTO
var Photo = function() {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.onclick = function() {
    this.votes++;
  };
  one.addEventListener('click', this.onclick, false);
  two.addEventListener('click', this.onclick, false);
  // this.album = function() {
  //   for(var i = 1; i < 15; i++){
  //     var currentPic = i + '.jpg';
  //     this.photos.push(currentPic);
  //   }
  };

//getPhotos()
var imgs = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg', './images/9.jpg', './images/10.jpg', './images/11.jpg', './images/12.jpg', './images/13.jpg', './images/14.jpg'];
console.log(typeof(imgs));


// var Tracker = function() {
// };

// var getRandomPhotos = function() { and display()
  var rand = Math.floor((Math.random() * 13) + 1);
  var cat1 = this.imgs[rand];
  var one = document.getElementById("imgL");
  one.innerHTML = "<img src='" + cat1 + "'/>";
  console.log(cat1);
  do {
    rand = Math.floor((Math.random() * 13) + 1);
    var cat2 = this.imgs[rand];
  } while (cat1 === cat2);
  var two = document.getElementById("imgR");
  two.innerHTML = "<img src='" + cat2 + "'/>";

// };

// var displayImg = function() {
//   var picture = document.createElement("img");

//   picture.src = './images/' + imgs[i];
//   var one = document.getElementById("thisone");
//   one.appendChild(picture);
// };

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
