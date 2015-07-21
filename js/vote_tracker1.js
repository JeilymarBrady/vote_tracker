//Constructor
var Photo = function(path){
  this.path = path;
  this.img = document.createElement('img');
  this.img.src = path;
  this.img.votes = 0;
};

Photo.prototype.addElement = function(elId){
  this.img.addEventListener('click', function(e){
    e.target.votes++;
    console.log(e.target.src + " votes: " + e.target.votes);
  });
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

function getRandom(){
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

var newBattle = document.getElementById("button");
newBattle.addEventListener('click', function(e){
  e.preventDefault();
    getRandom();
});





