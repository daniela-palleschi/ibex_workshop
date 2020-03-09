PennController.ResetPrefix(null);
PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

PennController(
    newButton("test sentence", "Ready?") // Task 1
    .print()
    .wait()
    ,
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
    .print()
    ,
    newSelector("tank") // We indicate that target+competitor belong to a selection group
    .settings.add( getImage("target") , getImage("competitor") )
    .settings.once() // Task 4
    .wait()
    ,
    getAudio("test sentence")
    .wait() // Task 3
    // .stop() // Task 2
);

/* CHANGES
- remove the text under each image


TASKS
Tip: make sure to test the experiment after each change! This way, if it doesn't work you've only changed one thing and know where the problem is

1. Add a 'start' button, which must be pressed before the trial starts.

2. Stop the audio once a selection has been made (FYI: this will make the change from task 2 useless)

3. Wait for the audio to finish before ending trial

4. Only one selection is possible (i.e., can't change your mind, even though the pictures remain on the screen)




*/