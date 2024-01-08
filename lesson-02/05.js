let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copy = passport

console.log(passport.name)
passport.name = 'Ivan'
console.log(copy.name)
