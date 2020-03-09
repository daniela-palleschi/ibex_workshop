// we'll always need this line at the beginning
PennController.ResetPrefix(null);

// Start your script
PennController(
    
    newText("Welcome", "Welcome to the experiment!")
        .print() 
    , 
    newText("press", "Please press <i>Continue</i> to begin.")
        .print()
    .settings.italic()
    ,
        newButton("welcome", "Continue")
        .print()
    .settings.bold()
    .wait()
    
    
   );

PennController(
    
    newText("sentence1", "William Shakespeare has three children.")// a new text element named 'sentence' 
        .print() // we need this line to print the element
    , // we ALWAYS!!! need a comma between elements
    newText("question", "<br>Is this sentence coherent?")
        .print()
    .settings.italic()
    ,
        newText("instruction", "<br>Press 'F' for yes, 'J' for no")
        .print()
    .settings.bold()
    ,
    newKey("response1", "FJ") //  a new key element called 'response'; accepts responses as key press 'F' (coherent) or 'J' (incoherent)
        .settings.log()
        .wait() // wait for a key press before validation (important!)

    
   );

PennController(
    
    newText("sentence2", "Angela Merkel has blue eyes.")// a new text element named 'sentence' 
        .print() // we need this line to print the element
    , // we ALWAYS!!! need a comma between elements
    newText("question", "<br>Is this sentence coherent?")
        .print()
    .settings.italic()
    ,
        newText("instruction", "<br>Press 'F' for yes, 'J' for no")
        .print()
    .settings.bold()
    ,
    newKey("response2", "FJ") //  a new key element called 'response'; accepts responses as key press 'F' (coherent) or 'J' (incoherent)
        .settings.log()
        .wait() // wait for a key press before validation (important!)
    
   );



/*   TASKS



Tip: make sure to test the experiment after each change! This way, if it doesn't work you've only changed one thing and know where the problem is

1. Add a welcome screen, that says 'Welcome to the experiment!'
    - tell participants to click 'Continue' when they're ready to begin
    - Use 'newButton' to add a button element labelled 'Continue', which waits until it is clicked before continuing to the next screen

3. Add a second trial that is the same as the first, but with the sentence 'Angela Merkel has blue eyes'

Run through the experiment twice, and then look at the 'results' file (press 'Refresh' before opening it!).

4. use '.settings.log()' to log the newKey selection to the results file

Run through the experiment again two more times, and then look at the 'results' file (press 'Refresh' before opening it!).



*/
