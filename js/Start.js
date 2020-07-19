class Start{
    constructor(){
        this.food = createButton("Volunteer For Food");   
        this.food.style('height', '100px');
        this.food.style('width', '100px');
        this.food.style('color', 'purple');
        this.food.style('fontsize', '1000px');
        this.ngo = createButton("NGO");
        this.ngo.style('height', '100px');
        this.ngo.style('width', '100px');
        this.ngo.style('color', 'purple');
        this.ngo.style('fontsize', '1000px');
        this.delivery = createButton("Volunteer For Delivery");
        this.delivery.style('height', '100px');
        this.delivery.style('width', '100px');
        this.delivery.style('color', 'purple');
        this.delivery.style('fontsize', '1000px');
        this.greeting = createElement("h1");
        this.greeting.style('color', 'darkBlue');

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
        this.greeting.position(380, 50);
        this.food.position(200, 200);
        this.ngo.position(400, 400);
        this.delivery.position(600, 200);
        this.food.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form3 = new Food();
            form3.display();
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