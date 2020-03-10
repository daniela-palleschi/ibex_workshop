PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here

// Welcome
PennController(
    defaultText
    .settings.css("font-size", "25")
    ,
    newText("Welcome", "Welcome to the experiment!")
    .settings.css("font-size", "30")
    .settings.center()
    .print()
    .settings.bold()
    ,
    newTextInput("inputID")
    .settings.before(newText("id","<br><br>Before we begin, please enter your initials and hit 'Enter':")
                     .settings.css("font-size", "20"))
    .print()
    .wait()
    .remove()
    ,
    newText("Instructions","<br>You will be presented with a sentence. When you have read the sentence, <b>press the spacebar</b>. <br>You will then see a scale from <b>'non-sensical'</b> to <b>'perfectly sensical'</b>. Please indicate where on the scale you feel the sentence belongs.<br>Then click on 'Continue' to move on.")
    .print()
    ,
    newText("continue","<br><br>Click 'Continue' to begin.")
    .settings.css("font-size","15")
    .settings.center()
    .print()
    ,
    newButton("continue","Continue")
    .settings.center()
    .print()
    .wait()
);

// Trial 1
PennController(
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence1", "Colourless <b>green</b> ideas sleep furiously.")
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
);

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
);

