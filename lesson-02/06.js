let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassword = structuredClone(passportWithAddress)
console.log(newPassword.address.city)
newPassword.address.city = 'Bobryisk'
console.log(newPassword.address.city)
