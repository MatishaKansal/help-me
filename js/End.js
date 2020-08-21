class End{
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
        this.done.position(300, 500);
        }
    getItemInfo(item){
        this.item.html("Item :- " + item);
        this.item.position(200, 200);
    }
    
    getNumInfo(num){
        this.num.html("Item Number :- " + num);
        this.num.position(200, 250);
    }
    
    getPlaceInfo(place){
        this.place.html("Destination :- " + place);
        this.place.position(200, 300);
    }
    
    getTimeInfo(time){
        this.time.html("Time :- " + time);
        this.time.position(200, 350);
    }
    }