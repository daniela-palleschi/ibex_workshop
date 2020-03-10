PennController.ResetPrefix(null); // Initiates PennController

PennController("welcome",
    defaultText
    .settings.css("font-size", "25")
    ,
    newText("Welcome", "<p>Welcome to the experiment!</p>")
    .settings.css("font-size", "30")
    .settings.center()
    .print()
    .settings.bold()
    ,
    newText("Instructions","<p>You will be presented with a sentence. <br>When you have read the sentence, <b>press the spacebar</b>. <br>You will then see a scale from <b>'non-sensical'</b> to <b>'perfectly sensical'</b>. Please indicate where on the scale you feel the sentence belongs.<br>Then click on 'Continue' to move on.</p>")
    .print()
    ,
     newTextInput("inputID")
     .settings.before(newText("id","Enter your initials and hit 'Enter':")
            .settings.css("font-size", "20"))
        .print()
        .wait()
    ,
    newText("begin", "<br>Click  'Start' to begin the experiment.")
               .settings.css("font-size", "20")
               .settings.center()
    .print()
    ,
    newButton("Start","Start")
        .print()
        .settings.center()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("inputID") )
)
    .log( "ID" , getVar("ID") );

// Trial 1
PennController(
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence1", "Colourless green ideas sleep furiously.")
    .settings.italic()
    .print()
    ,
    newKey("ready", " ")
    .wait()
    ,
    newScale("response", 7)
    .settings.before(newText("bad","non-sensical")
                     .settings.css("font-size","15"))
    .settings.after(newText("good","perfectly sensical")
                    .settings.css("font-size","15"))
    .settings.labelsPosition("top")
    .settings.center()
    .print()
    .wait()
    .settings.log()
    ,
    newButton("continue", "Continue")
    .print()
    .settings.center()
    .wait()
)
.log( "ID" , getVar("ID") );

// Trial 2
PennController(
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence2", "Odourless beige memories slumber angrily.")
    .settings.italic()
    .print()
    ,
    newKey("ready", " ")
    .wait()
    ,
    newScale("response", 7)
    .settings.before(newText("bad","non-sensical")
                     .settings.css("font-size","15"))
    .settings.after(newText("good","perfectly sensical")
                    .settings.css("font-size","15"))
    .settings.labelsPosition("top")
    .settings.center()
    .print()
    .wait()
    .settings.log()
    ,
    newButton("continue", "Continue")
    .print()
    .settings.center()
    .wait()
)
.log( "ID" , getVar("ID") );
