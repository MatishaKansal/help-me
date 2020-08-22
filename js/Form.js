class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.button.style('color', 'hotPink');
        this.address = createInput("Address");
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
        this.title.position(displayHeight/2 + 100, displayWidth/6 - 80);
        this.greeting.html("Thank you for helping us");
        this.greeting.position(displayHeight/2 + 50, displayWidth/6 - 40);
        this.input.position(displayHeight/2 + 50, displayWidth/6 + 40);
        this.address.position(displayHeight/2 + 50, displayWidth/6 + 80);
        this.phone.position(displayHeight/2 + 50, displayWidth/6 + 120);
        this.button.position(displayHeight/2 + 100, displayWidth/6 + 170);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.address.hide();
            this.phone.hide();
            this.greeting.hide();
            this.title.hide();
            order = new Order();
            order.display();
        });
    }
}