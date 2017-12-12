var initialCats = [
{
  clickCount: 0,
  name: 'Tabby',
  imgSrc: 'img/434164568_fea0ad4013_z.jpg',
  imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
  catNicknames: ['Zowie', 'Zoey', 'Zoie']
},
{
  clickCount: 0,
  name: 'Blue',
  imgSrc: 'img/434164568_fea0ad4013_z.jpg',
  imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
  catNicknames: ['Bowzer', 'Billy', 'Bobby']
}];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.catNicknames = ko.observable(data.catNicknames);
  this.level = ko.computed(function() {
    if (this.clickCount() <= 5) {
        return "Baby";
    } else if (this.clickCount() <= 10) {
        return "Kid";
    } else if (this.clickCount() <= 15) {
        return "Teen";
    } else if (this.clickCount() <= 20) {
        return "Adult"
    }
  }, this);
}

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  })

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.selectCat = function(cat) {
    self.currentCat(cat);
  };
}

ko.applyBindings(new ViewModel());
