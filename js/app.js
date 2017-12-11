var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
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
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.catNicknames = ko.observableArray([{ nick: 'Zowie' }, {nick: 'Zoey'}, {nick: 'Zoie'}]);
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
