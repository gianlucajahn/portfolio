const returnTabName = (topic: string) => {
    let returnedTopic = "";
    switch (topic) {
        case "languages":
            returnedTopic = "Languages";
            break;
        case "frameworks":
            returnedTopic = "Frameworks";
            break;
        case "libraries":
            returnedTopic = "Libraries";
            break;
        case "collaborative":
            returnedTopic = "Collaborative Work";
            break;
        case "prototyping":
            returnedTopic = "Prototyping";
            break;
        case "code":
            returnedTopic = "Code Editor";
            break;
        case "learning":
            returnedTopic = "Learning Resources";
            break;
        default: 
            returnedTopic = "";
            break;
    }
    return returnedTopic;
}

export default returnTabName;