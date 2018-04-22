class Hackerspace {
    constructor(private name: string, private users: string[]) { }
    public greetAll(){
        this.users.forEach(function(user: string) {
            console.log(user + " in " + this.name); // Error
        });
    }

    // public greetAll(){
    //     var _this = this;
    //     this.users.forEach(function(user: string) {
    //         console.log(user + " in " + _this.name);
    //     });
    // }

    // public greetAll(){
    //     this.users.forEach((user) => {
    //         console.log(user + " in " + this.name);
    //     });
    // }
}

const space = new Hackerspace("K4CG", ["Poschi", "Zeitreisender"]);
space.greetAll();
