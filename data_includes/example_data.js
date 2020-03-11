PennController.ResetPrefix(null); // Initiates PennController


// Start typing your code here


PennController(
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence1", "Colourless <b>green</b> ideas sleep furiously.")
    .settings.italic()
    .print()
    ,
    newKey("response", "FJ")
    .settings.log()
    .wait()
    ,
    getText("sentence1")
    .remove()
    ,
    newButton("continue", "Continue")
    .print()
    .settings.center()
    ,
    newKey("continue"," ")
    .wait()
);
