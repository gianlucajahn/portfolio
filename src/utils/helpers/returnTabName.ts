const returnTabName = (topic: string, language: string) => {
    let returnedTopic = "";
    switch (topic) {
        case "languages":
            returnedTopic = language === "english" ? "Sprachen" : "Languages";
            break;
        case "frameworks":
            returnedTopic = "Frameworks";
            break;
        case "libraries":
            returnedTopic = "Libraries";
            break;
        case "collaborative":
            returnedTopic = language === "english" ? "Arbeit in Teams" : "Collaborative Work";
            break;
        case "prototyping":
            returnedTopic = "Prototyping";
            break;
        case "code":
            returnedTopic = "Code Editors";
            break;
        case "learning":
            returnedTopic = language === "english" ? "Lernressourcen" : "Learning Resources";
            break;
        default: 
            returnedTopic = "";
            break;
    }
    return returnedTopic;
}

export default returnTabName;