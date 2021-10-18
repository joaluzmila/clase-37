class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.input.hide ();
        this.button.hide();
    }

    display(){
        var tittle = createElement('h2')
        tittle.html("Juego de Carreras");
        tittle.position(640,100);
        
        this.input.position(550,250);
        this.button.position(550,300);
        this.button.mousePressed (()=>{
            this.input.hide ();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);
            this.greeting = createElement ('h3');
            this.greeting.html("hola "+player.name);
            this.greeting.position(640,350);   
        })
    }
}