PennController.ResetPrefix(null);  // leave this here

PennController("Trial1",
               defaultText
               .settings.css("font-size", "30")
               ,
               newText("sentence1", "Colourless <b>green</b> ideas sleep furiously.")
               .settings.italic()
               .print()
               ,
               newKey("response", "FJ")
               .wait()
               .settings.log()
               ,
               getText("sentence1")
               .remove()
               ,
               newButton("continue", "Continue")
               .print()
               .settings.center()
               .wait()
               .settings.log()
              );
PennController("Trial2",
               defaultText
               .settings.css("font-size", "30")
               ,
               newText("sentence1", "Odourless beige memories slumber angrily.")
               .settings.italic()
               .print()
               ,
               newKey("response", "FJ")
               .wait()
               .settings.log()
               ,
               getText("sentence1")
               .remove()
               ,
               newButton("continue", "Continue")
               .print()
               .settings.center()
               .settings.log()
               .wait()
              );
