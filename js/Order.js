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
        this.order.position(300, 100);
        this.item.position(450, 120);
        this.timmings.html("TIMMINGS:-")
        this.timmings.position(100, 200);
        this.time.position(100, 300);
        this.place.position(100, 350);
        this.number.position(100, 400);
        this.submit.position(400, 500);
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