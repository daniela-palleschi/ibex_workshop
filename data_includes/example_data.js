PennController.ResetPrefix(null); // Initiates PennController



PennController("welcome",
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
               newText("Instructions","<p>You will be presented with a sentence in one of three languages. <br>When you have read the sentence, <b>press the spacebar</b>. <br>You will then be asked whether you understand the sentence (i.e., whether you can read the language). <br>Then click on 'Continue' to move on.</p>")
               .print()
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
               newVar("ID") // creates a variable 'ID'
               .settings.global() // which is saved GLOBALLY, meaning we can access it even when we leave "welcome"
               .set( getTextInput("inputID") )  // we set 'ID' to equal the TextInput from above, i.e., participant initials
              )
    .log( "ID" , getVar("ID") );

// Trial 1
PennController.Template(
    PennController.GetTable("nonlatin-char.csv"),  // load your csv
    variable => PennController("trial",
    defaultText
    .settings.css("font-size", "30")
    ,
    newText("sentence1", variable.sentence)  // and we change the quoted text to equal variable.column
    .settings.italic()
    .print()
    ,
    newKey("ready", " ")
    .wait()
    ,
    newScale("response", "Yes", "No")
    .settings.before(newText("lang", "Can you read this sentence?")
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
     .log("Sentence",variable.sentence)
    .log("Sensical",variable.language)
    .log("Item", variable.item)
    .log( "ID" , getVar("ID") )); // and here we ask that after Trial 1 the intials be logged
