$(document).ready(function() {

//User contructor
var Tracker = function(){
  this.isNewBattle = true;
};

//Cat Constructor
var Photo = function(path){
  this.path       = path;
  this.img        = document.createElement('img');
  this.img.src    = this.path;
  this.img.votes  = 0;
  $(this.img).on('click', function(e){
    if(tracker.isNewBattle){
      e.target.votes++;
      $(e.target).toggleClass('winner');
      tracker.isNewBattle = false;
      var targetVote = e.target.votes;
      var otherVote = 0;
      if(e.target.parentElement.id === 'imgL'){
        otherVote = document.getElementById('imgR').children[0].votes;
        chart(targetVote, otherVote);
      } else {
        otherVote = document.getElementById('imgL').children[0].votes;
        chart(otherVote, targetVote);
      }
      saveGame();
    }
  });
};

//Adds cat pictures to HTML
Photo.prototype.addElement = function(elId){
  var el = document.getElementById(elId);
  el.innerHTML = "";
  el.appendChild(this.img);
};

var imgs = [];
imgs.push(new Photo('./images/1.jpg'));
imgs.push(new Photo('./images/2.jpg'));
imgs.push(new Photo('./images/3.jpg'));
imgs.push(new Photo('./images/4.jpg'));
imgs.push(new Photo('./images/5.jpg'));
imgs.push(new Photo('./images/6.jpg'));
imgs.push(new Photo('./images/7.jpg'));
imgs.push(new Photo('./images/8.jpg'));
imgs.push(new Photo('./images/9.jpg'));
imgs.push(new Photo('./images/10.jpg'));
imgs.push(new Photo('./images/11.jpg'));
imgs.push(new Photo('./images/12.jpg'));
imgs.push(new Photo('./images/13.jpg'));
imgs.push(new Photo('./images/14.jpg'));
var tracker = new Tracker();

//Generates 2 random cats
function getRandom(){
  //var rand = Math.floor((Math.random() * imgs.length) + 1);
  var rand = Math.floor((Math.random() * 13) + 1);
  var cat1 = imgs[rand];
  cat1.addElement('imgL');
  var cat2;
  do {
    rand = Math.floor((Math.random() * 13) + 1);
    cat2 = imgs[rand];
  } while ( cat1.path === cat2.path);
    cat2.addElement('imgR');
}
getRandom();

//New Cats!
var newBattle = document.getElementById("button");
newBattle.addEventListener('click', function(e){
  e.preventDefault();
  $('img').removeClass('winner');
  getRandom();
  tracker.isNewBattle = true;
  chart(1,1);
}, false);

//Chart
function chart(l, r){
  var data = [
      {
          value: r,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Right"
      },
      {
          value: l,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Left"
      }
  ];
  var graph = document.getElementById("graph").getContext('2d');
  var myDoughnutChart = new Chart(graph).Doughnut(data);
}
chart(1,1);
var saveGame = function() {
  localStorage.setItem('images', JSON.stringify(imgs));
};

if(!(localStorage.getItem('images'))){
  saveGame();
} else {
  var newArray = JSON.parse(localStorage.getItem('images'));
  for(var i = 0; i < newArray.length; i++){
    imgs[i].img.votes = newArray[i].img.votes;
  }
}

});
