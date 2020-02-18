PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here

//=====================================================
// Welcome page

PennController(
    defaultText // command for 'default text elements...
        .print() // ...so for every text element, we're saying to automatically print it; DP
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to report which of two pictures matches a description.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key for the picture on the left, or the <strong>J</strong> key for the picture on the right.</p>") // strong = bold; DP
    ,
    newText("<p>Click the button below to start the experiment.</p>")
    ,
        newTextInput("ID") // collect participant ID using a 'text input field'
        .print() // BUT won't collect the value of their input
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
)

//=====================================================
// Trial events

PennController.Template( // creates a template to be used for multiple trials
  variable => PennController(
      newAudio("description",variable.AudioFile)
        .play()
    ,
    newText(variable.Description)
        // .print() // will print the text in its entirety
        .unfold(variable.Duration) // will unfold for the duration of the audio file (which is 2600ms)
    ,
    newImage("two",variable.PluralImageFile)
        .settings.size(200,200)
        .print()
    ,
        newImage("one",variable.SingularImageFile)
        .settings.size(200,200)
        .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("two") )
        .settings.add( 250 , 0 , getImage("one") )
        .print()
    ,
    // newKey("FJ") // for keys 'f' and 'j' as responses
    newSelector()
        .settings.add(getImage("two"), getImage("one"))
        .settings.keys("F","J")
        .settings.log()
        .wait()
        ,
getAudio("description")
    // .stop() // will STOP the audio as soon as a key is pressed
    .wait("first") // or continue playing until audio is done ("first" = make sure at this point in the code the audio playback has completed)
    )
    
//===================
// Log ID after trial
.log( "ID" , getVar("ID")) // ensures that for each trial, logging value of ID in variable ID; this should be OUTSIDE of PennController()
.log( "Item" , variable.Item)
.log( "Ending" , variable.Ending)
.log( "Group" , variable.Group)
)

//=====================================================
// Send results

PennController.SendResults() // important!!! Sends all results to the server


//=====================================================
// Thank you screen

PennController(
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>") // confirmation link (e.g., for payment)
        .print()
    ,
    newButton("void") // this creates a 'void' button that must be clicked to continue. This is because we don't want them to be able to continue beyond this screen
        .wait() // so basically this is the end and there's no way to go any further
)