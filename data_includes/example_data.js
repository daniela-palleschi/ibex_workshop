PennController.ResetPrefix(null); // Initiates PennController
PennController.AddHost("https://amor.cms.hu-berlin.de/~pallesid/workshop_2/");

// Start typing your code here

    //=====================================================
    // 1. Welcome page
    
    PennController( "welcome" ,
    defaultText // command for 'default text elements...
    .print() // ...so for every text element, we're saying to automatically print it; DP
    
    ,
    newText("<p>Welcome to the experiment!</p>")
    ,
    newText("<p>You will be presented with a picture which will disappear automatically. You will then see a sentence.</p><p>Your task is to indicate whether the sentence is <b>'true'</b>, <b>'false'</b>, or if you're <b>'unsure'</b> by clicking on the presented options.</p>") // strong = bold; DP
    ,
    newTextInput("ID") // collect participant ID using a 'text input field'
    .settings.before(newText("Please enter your participant ID:  ")
    .settings.italic())
    .print() // BUT won't collect the value of their input
    ,
    newText("<p>Click the button below to start the experiment.</p>")
    ,
    newButton("Start") // a button with the word 'start'; DP
    .print()
    .wait() // wait until button is clicked; DP
    ,
    newVar("ID") // this will create a new variable "ID"; MUST be after the 'Start' button click
    .settings.global() // ensures value of "ID" is available later to be added to results file
    .set( getTextInput("ID") ) // setting the value of "ID" to be the input from "ID above"
    )
    .log( "ID" , getVar("ID") // ensures that for each trial, logging value of ID in variable ID; this should be OUTSIDE of PennController()
    );

//=====================================================
// 2. Trial events

PennController(
    newTimer(500)  // 500ms timer (pause before beginning trial)
    .start()
    .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
    ,
    newImage("picture1","putin.jpeg")
    .settings.size(400)
    .print()
    ,
    newTimer(1000)  // 500ms timer (pause before beginning trial)
    .start()
    .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
    ,
    getImage("picture1")
    .remove()
    ,
    newText("sentence1","Vladimir Putin is the president of France.")
    .settings.bold()
    .settings.center()
    .print() 
    ,
    newScale("judgement",   "true", "false", "unsure")
    .settings.labelsPosition("right")
    .settings.before( newText("<br><br>This sentence is..") )
    .print()
    .settings.log("last")
    .wait() 
    ,
    newTimer(500)  // 500ms timer (pause before ending trial)
    .start()
    .wait()
)
PennController(
    newTimer(500)  // 500ms timer (pause before beginning trial)
    .start()
    .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
    ,
    newImage("picture2","colosseum.jpg")
    .settings.size(400)
    .print()
    ,
    newTimer(1000)  // 500ms timer (pause before beginning trial)
    .start()
    .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
    ,
    getImage("picture2")
    .remove()
    ,
    newText("sentence","Hawaii is located in the Pacific Ocean")
    .settings.bold()
    .settings.center()
    .print() 
    ,
    newScale("judgement",   "true", "false", "unsure")
    .settings.labelsPosition("right")
    .settings.before( newText("<br><br>This sentence is..") )
    .print()
    .settings.log("last")
    .wait() 
    ,
    newTimer(500)  // 500ms timer (pause before ending trial)
    .start()
    .wait()
)
    
    // Log ID after trial
    .log( "ID" , getVar("ID")); // ensures that for each trial, logging value of ID in variable ID; this should be OUTSIDE of PennController()

//=====================================================
// 3. Send results

PennController.SendResults( "send" ); // important!!! Sends all results to the server


//=====================================================
// 4. Thank you screen

PennController( "final" ,
                newText("<p>Thank you for your participation!</p>")
                .print()
                ,
                newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>") // confirmation link (e.g., for payment)
                .print()
                ,
                newButton("void") // this creates a 'void' button that must be clicked to continue. This is because we don't want them to be able to continue beyond this screen
                .wait() // so basically this is the end and there's no way to go any further
               );
