namespace classes1 {
    class Rezeptionistin {
        channel: string;

        constructor(channel: string) {
            this.channel = channel;
        }

        temp() : number {
            return 23;
        }

        postStatus() : void {
            console.log(this.channel + ": " + this.temp() + "°C");
        }
    }

    let rezeptionistin = new Rezeptionistin("K4CG");
    rezeptionistin.postStatus();
}



namespace classes2 {
    class Rezeptionistin {
        constructor(private channel: string) { }

        temp() : number {
            return 23;
        }

        postStatus() : void {
            console.log(this.channel + ": " + this.temp() + "°C");
        }
    }

    let rezeptionistin = new Rezeptionistin("K4CG");
    rezeptionistin.postStatus();
}

namespace classes3 {
    interface Hacker {
        sayHello(): void;
    }

    class NormaloHacker implements Hacker {
        constructor(private nick: string) { }
        sayHello(): void {
            console.log("Hallo ich bins der " + this.nick);
        }
    }

    let zeitreisender = new NormaloHacker("Zeitreisender");
    zeitreisender.sayHello();
   
}


namespace classes4 {
    interface Hacker {sayHello(): void;}

    class NormaloHacker implements Hacker {
        constructor(private nick: string) { }
        sayHello(): void {
            console.log("Hallo ich bins der " + this.nick);
        }
    }

    class Poschi extends NormaloHacker {
        constructor() {
            super("Poschi");
        }
        sayHello(): void {
            console.log("I bims der Flo");
        }
    }

    let poschi = new Poschi();
    poschi.sayHello();
}