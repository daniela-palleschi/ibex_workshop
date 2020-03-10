PennController.ResetPrefix(null); // Initiates PennController
PennController.AddHost("https://amor.cms.hu-berlin.de/~pallesid/workshop_2/");

// Start typing your code here

//=====================================================
// Establish sequence, with randomised items
//shuffle(randomize("real"), randomize("filler"))
PennController.Sequence( "welcome" , randomize("experiment") , "send" , "final" )
    
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

PennController.Template( PennController.GetTable("worldknowledge.csv"),// creates a template to be used for multiple trials; will use .csv in chunk_includes
                         variable => PennController( "experiment",
                                                     newTimer(500)  // 500ms timer (pause before beginning trial)
                                                     .start()
                                                     .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
                                                     ,
                                                     newImage("picture",variable.picture)
                                                     .settings.size(400)
                                                     .print()
                                                     ,
                                                     newTimer(1000)  // 500ms timer (pause before beginning trial)
                                                     .start()
                                                     .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
                                                     ,
                                                     getImage("picture")
                                                     .remove()
                                                     ,
                                                     newText("sentence",variable.sentence)
                                                     .settings.bold()
                                                     .settings.center()
                                                     .print() // will print the text in its entirety
                                                     //.unfold(variable.Duration) // will unfold for the duration of the audio file (which is 2600ms)
                                                     ,
                                                     /*newKey("response", "FJ")
                                                     .settings.log()
                                                     .wait()
                                                     ,*/
                                                     newScale("judgement",   "true", "false", "unsure")
                                                     .settings.labelsPosition("right")
                                                     //.settings.slider()
                                                     .settings.before( newText("<br><br>This sentence is..") )
                                                     //.settings.size("auto")
                                                     .print()
                                                     .settings.log("last")
                                                     .wait() 
                                                     ,
                                                     newTimer(500)  // 500ms timer (pause before ending trial)
                                                     .start()
                                                     .wait()
                                                    )
                         
                         // Log ID after trial
                         .log( "ID" , getVar("ID")) // ensures that for each trial, logging value of ID in variable ID; this should be OUTSIDE of PennController()
                         .log( "Item" , variable.item)
                         .log( "sentencematch" , variable.world)
                         .log( "picmatch" , variable.pic)
                         .log( "critical" , variable.criticalword)
                         .log( "list" , variable.list)
                        );

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
