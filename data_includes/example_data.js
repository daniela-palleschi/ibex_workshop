PennController.ResetPrefix(null);
PennController.AddHost("https://amor.cms.hu-berlin.de/~pallesid/workshop_2/");

PennController(
    newText("test sentence", "The fish swim in a tank which is <i>perfectly round</i>")  // italics
    .settings.center()    // centred
    .print()
    ,
    newImage("competitor", "1fishSquareTank.png")// An image with 1 fish that swims in a square tank
    .settings.size(200,200)    
    .print()       
    ,
    newImage("target", "2fishRoundTank.png")// An image with 2 fish that swim in a round tank
    .settings.size(200,200)    
    .print()        
    ,
    newCanvas("tanks", 500, 200)
    .settings.add(   50, 0, getImage("competitor") ) // moved 50px from the left limit
    .settings.add( 270, 0, getImage("target") )  // 20px from the right limit of 'competitor' ('competitor' right edge = (50px from the left) + (200px wide) =  250px)
    .settings.add(  120, 200, newText("one fish") )  // TASK: add text below the images
    .settings.add(   355, 200, newText("two fish") ) // TASK: add text below the images
    .print()
    ,
    newSelector("tank") // We indicate that target+competitor belong to a selection group
    .settings.add( getImage("target") , getImage("competitor") )
    .wait()         // wait until target or competitor is selected 
);
