namespace interfaces1 {
    interface Hacker {
        nick: string;
        space: string;
    }

    function welcome(hacker: Hacker) {
        console.log("Hi " + hacker.nick + " vom Space " + hacker.space + "!");
    }

    let poschi: Hacker = {
        nick: "Poschi",
        space: "K4CG"
    };

    welcome(poschi); // Hi Poschi vom Space K4CG!
}

namespace interfaces2 {
    interface Hacker {
        nick: string;
        space?: string;
    }

    function welcome(hacker: Hacker) {
        if(hacker.space){
            console.log("Hi " + hacker.nick + " vom Space " + hacker.space + "!");
        } else {
            console.log("Hi " + hacker.nick + "!");
        }
    }

    let poschi: Hacker = {nick: "Poschi", space: "K4CG"};
    let zeitreisender: Hacker = {nick: "Zeitreisender"};

    welcome(poschi); // Hi Poschi vom Space K4CG!
    welcome(zeitreisender); // Hi Zeitreisender!
}