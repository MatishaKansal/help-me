class Order{
    constructor(){
        this.order = createElement("h2");
        this.order.style('color', 'rgb(30, 190, 209)');
        this.item = createInput("Item");
        this.timmings = createElement("h3");
        this.timmings.style('color', 'maroon');
        this.time = createInput("Please enter the time here");
        this.time.style('height', '25px');
        this.time.style('width', '500px');
        this.place = createInput("Please enter the place here");
        this.place.style('height', '25px');
        this.place.style('width', '500px');
        this.number = createInput("Please enter the item number");
        this.number.style('height', '25px');
        this.number.style('width', '500px');
        this.submit = createButton("Submit");
    }

    hide(){
        this.order.hide();
        this.item.hide();
        this.timmings.hide();
        this.time.hide();
        this.place.hide();
        this.number.hide();
        this.submit.hide();
    }

    display(){
        this.order.html("ORDER FOR ");
        this.order.position(displayHeight/2, displayWidth/6);
        this.item.position(displayHeight/2 + 150, displayWidth/6 +20);
        this.timmings.html("TIMMINGS:-")
        this.timmings.position(displayHeight/6 + 90, displayWidth/6 + 70);
        this.time.position(displayHeight/6 + 90, displayWidth/6 + 120);
        this.place.position(displayHeight/6 + 90, displayWidth/6 + 160);
        this.number.position(displayHeight/6 + 90, displayWidth/6 + 200);
        this.submit.position(displayHeight/2 +20, displayWidth/6 + 250);
        this.submit.mousePressed(()=>{
            var item = this.item.value();
            game1.update(item);
            var time = this.time.value();
            game2.update1(time);
            var place = this.place.value();
            game3.update2(place);
            var num = this.number.value();
            game4.update3(num);
            game1.getItemInfo();
            game2.getNumInfo();
            game3.getPlaceInfo();
            game4.getTimeInfo();
            // textSize(20);  
            // text("sky", 200, 200);
            this.order.hide();
            this.item.hide();
            this.timmings.hide();
            this.time.hide();
            this.place.hide();
            this.number.hide();
            this.submit.hide();
            function0 = new Function();
            function0.display()
            // console.log(Game.getItemInfo);
            function1.getItemInfo(databaseitem);
            function2.getNumInfo(databasenum);
            function3.getPlaceInfo(databaseplace);
            function4.getTimeInfo(databasetime);   

    });
    }
}       