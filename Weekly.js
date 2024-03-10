//Please change class schedule to yours
const schedule = {
    "Mon": ["國","英","班","團","化","化","數"],
    "Tue": ["物","物","國","國","體","數","數"],
    "Wed": ["英","英","數","化","健","美","美"],
    "Thu": ["國","地","體","數","化","物","防"],
    "Fri": ["資","資","英","數","物","資","資"]
};


function createWidget() {
    let w = new ListWidget();
    
    // Add background color
    w.backgroundColor = new Color("#F4F1DE");
    
    // Add title for the week
    const title = w.addText("Weekly Class Schedule");
    title.textColor = new Color("#457B9D");
    title.font = Font.boldSystemFont(24);
    title.textOpacity = 0.8;
    title.centerAlignText();
    w.addSpacer(10);
    
    for (const day in schedule) {
        const dayAbbr = w.addText(day + ":");
        dayAbbr.textColor = new Color("#1D3557");
        dayAbbr.font = Font.boldSystemFont(20);
        dayAbbr.textOpacity = 0.8;
        
        const classes = schedule[day];
        const classesText = classes.join(", ");
        const classesLine = w.addText(classesText);
        classesLine.textColor = new Color("#1D3557");
        classesLine.font = Font.lightSystemFont(18);
        classesLine.textOpacity = 0.8;
        
        w.addSpacer(10);
    }
    
    Script.setWidget(w);
    w.presentSmall();
    Script.complete();
}

createWidget();
