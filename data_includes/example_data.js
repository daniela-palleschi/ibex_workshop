PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here

// Trial 1
PennController.Template(
    PennController.GetTable("template-text.csv"),  // load your csv
    variable => PennController(
        defaultText
        .settings.css("font-size", "30")
        ,
        newText("sentence1", variable.sentence)
        .settings.italic()
        .print()
        ,
        newKey("ready", " ")
        .wait()
        ,
        newScale("response", 100)
        .settings.size( 200 , "auto" )
        .settings.slider()
        .settings.before(newText("bad","non-sensical")
                         .settings.css("font-size","15")
                        )
        .settings.after(newText("good","perfectly sensical")
                        .settings.css("font-size","15")
                       )
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
)

