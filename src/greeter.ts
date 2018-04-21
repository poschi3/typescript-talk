function greet(name) {
    console.log("Hi " + name + " dein Name hat " + name.length + " Buchstaben!");
}

greet("K4CG");
greet(["Nürnberg", "Hacknacht"]);
greet(42);

// noImplicitAny
// const batman = Array(5).join("wat" - 1)+ " Batman";
// greet(batman)