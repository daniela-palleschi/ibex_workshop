PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here
PennController.Sequence( "welcome",randomize("trial") );

// Welcome
PennController("welcome",
               defaultText
               .settings.css("font-size", "25")
               ,
               newText("hi", "Welcome to the experiment!")
               .settings.css("font-size", "30")
               .settings.center()
               .print()
               .settings.bold()
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
PennController.Template( PennController.GetTable("template-text.csv"),// creates a template to be used for multiple trials; will use .csv in chunk_includes
                         variable => PennController( "trial",
                                                     newTimer(500)  // 500ms timer (pause before beginning trial)
                                                     .start()
                                                     .wait() // important: make sure a timer is set BEFORE '.wait()', otherwise the experiment will freeze
                                                     ,
                                                     defaultText
                                                     .settings.css("font-size", "30")
                                                     ,
                                                     newText( "sentence" , variable.sentence )
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
                         .log("Sentence", variable.sentence)
                         .log("Sensical", variable.sensical)
                        );


