class Food{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.address = createInput("Delivery Place");
        this.phone = createInput("Phone Number");
        this.title = createElement("h2");
        this.title.style('color', 'purple');
        this.greeting = createElement("h2");
        this.greeting.style('color', 'darkGreen');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.address.hide();
        this.phone.hide();
    }

    display(){
        this.title.html("Welcome to HELP ME !!");
        this.title.position(200, 100);
        this.greeting.html("Thank you for helping us");
        this.greeting.position(400, 150);
        this.input.position(300, 250);
        this.address.position(300, 300);
        this.phone.position(300, 350);
        this.button.position(350, 400);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.address.hide();
            this.phone.hide();
            this.greeting.hide();
            this.title.hide();
            end = new End();
            end.display();
            end1.getItemInfo(databaseitem);
            end2.getNumInfo(databasenum);
            end3.getPlaceInfo(databaseplace);
            end4.getTimeInfo(databasetime); 
        });
    }
}