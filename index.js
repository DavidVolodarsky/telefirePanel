import {Greeter} from "./src/index";

const printMsg = function() {
    console.log("This is a message from the demo package");
    console.log("DEMO RUN START");
}

exports.telefirePanelConnect ={
    printMsg : printMsg,
    greeter: Greeter
}


