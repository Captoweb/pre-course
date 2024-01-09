let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

passportWithAddress = structuredClone(passportWithAddress)
console.log(passportWithAddress.address.city)
passportWithAddress.address.city = 'Bobryisk'
console.log(passportWithAddress.address.city)
