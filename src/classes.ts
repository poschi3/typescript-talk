namespace classes1 {
    class Thermometer {
        location: string;

        constructor(location: string) {
            this.location = location;
        }

        temp() : number {
            return 23;
        }

        postStatus() : void {
            console.log(this.location + ": " + this.temp() + "°C");
        }
    }

    let thermometer = new Thermometer("K4CG");
    thermometer.postStatus(); // K4CG: 23°C
}

namespace classes2 {
    class Thermometer {
        constructor(private location: string) { }

        temp() : number {
            return 23;
        }

        postStatus() : void {
            console.log(this.location + ": " + this.temp() + "°C");
        }
    }

    let thermometer = new Thermometer("K4CG");
    thermometer.postStatus(); // K4CG: 23°C
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
    zeitreisender.sayHello(); // Hallo ich bins der Zeitreisender
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
    poschi.sayHello(); // I bims der Flo
}