PennController.ResetPrefix(null);
PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

PennController(
    // newText("test sentence", "The fish swim in a tank which is perfectly round")
    //    .print()
    newAudio("test sentence", "fishRound.ogg")
    .play() // Immediately play the audio file
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
    .wait()
    ,
    getAudio("test sentence")
    .wait()
);

// TASKS

// Add a 'start' button, which must be pressed before the trial starts

// Pause the audio once a selection is made

// Only one selection is possible (i.e., can't change your mind, even though the pictures remain on the screen)