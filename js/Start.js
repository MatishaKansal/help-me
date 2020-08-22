class Start{
    constructor(){
        this.food = createButton("Volunteer For Food");   
        this.food.style('height', '150px');
        this.food.style('width', '150px');
        this.food.style('color', 'black');
        this.food.style('fontSize', 'x-large');
        this.food.style('fontWeight', '900');
        this.food.style('background', 'orange');
        this.ngo = createButton("NGO");
        this.ngo.style('height', '150px');
        this.ngo.style('width', '150px');
        this.ngo.style('color', 'black');
        this.ngo.style('fontSize', 'x-large');
        this.ngo.style('fontWeight', '900');
        this.ngo.style('background', 'rgb(22, 150, 248)');
        this.delivery = createButton("Volunteer For Delivery");
        this.delivery.style('height', '150px');
        this.delivery.style('width', '150px');
        this.delivery.style('color', 'black');
        this.delivery.style('fontSize', 'x-large');
        this.delivery.style('fontWeight', '900');
        this.delivery.style('background', 'rgb(108, 247, 0)');
        this.greeting = createElement("h1");
        this.greeting.style('color', 'darkBlue');
        this.greeting.style('fontSize', 'xxx-large');
        this.greeting.style('fontWeight', '900');
        this.greeting.style('textDecoration', 'underline overline');
    }

    hide(){
        this.food.hide();
        this.ngo.hide();
        this.delivery.hide();
        this.greeting.hide();
    }

    display(){
        this.greeting.style.color = "purple";
        this.greeting.html("HELP ME!");
        this.greeting.position(displayHeight/2+100, displayWidth/6 - 150);
        this.food.position(displayHeight/2- 50, displayWidth/6 - 30);
        this.ngo.position(displayHeight/2+ 130, displayWidth/6 + 180);
        this.delivery.position(displayHeight/2+ 310, displayWidth/6 - 30);
        this.food.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            foodform = new Food();
            foodform.display();
        });
        this.ngo.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form1 = new Form();
            form1.display();
        });
        this.delivery.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form2 = new Delivery();
            form2.display();
        });

    }
}