PennController.ResetPrefix(null);

PennController(
    newText("test sentence", "The fish swim in a tank which is <i>perfectly round</i>")  // italics
    .settings.center()    // centred
    .print()
    ,
    newImage("competitor", "https://amor.cms.hu-berlin.de/~pallesid/workshop_2/1fishSquareTank.png")// An image with 1 fish that swims in a square tank
    .print()       
    ,
    newImage("target", "https://amor.cms.hu-berlin.de/~pallesid/workshop_2/2fishRoundTank.png")// An image with 2 fish that swim in a round tank
    .print()        
    ,
    newSelector("tank") // We indicate that target+competitor belong to a selection group
    .settings.add( getImage("target") , getImage("competitor") )
    .settings.log()
    .wait()         // wait until target or competitor is selected 
);
