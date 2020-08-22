class Finish{
    constructor(){
    this.item = createElement('h2');
    this.num = createElement('h2');
    this.place = createElement('h2');
    this.time = createElement('h2');
    this.done = createElement('h1');
    this.done.style('fontSize', 'xx-large');
    this.done.style('fontWeight', '900');
    this.done.style('color', 'maroon');
}
hide(){
    this.buttonC.hide();
    this.item.hide();
    this.num.hide();
    this.place.hide();
    this.time.hide();

}
display(){
    this.done.html("COMPLETED!!!");
    this.done.position(displayHeight/2 + 100, displayWidth/6 + 200);
    }
getItemInfo(){
    this.item.html("Item :- Rotis");
    this.item.position(displayHeight/2 - 50, displayWidth/6);
}

getNumInfo(){
    this.num.html("Item Number :- 10");
    this.num.position(displayHeight/2 - 50, displayWidth/6 + 40);
}

getPlaceInfo(){
    this.place.html("Destination :- Manipur");
    this.place.position(displayHeight/2 - 50, displayWidth/6 + 80);
}

getTimeInfo(){
    this.time.html("Time :- 2pm");
    this.time.position(displayHeight/2 - 50, displayWidth/6 + 120);
}
}