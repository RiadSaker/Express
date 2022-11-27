const {faker} = require('@faker-js/faker')
const express = require('express')
const app = express()
const port = 3000

const createFakeUser = () => {
    const newFake = {
        password: faker.internet.password(8),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        id: faker.random.numeric(5)
    }
    return newFake
}
const createFakeCompany = () =>{
    const newFake = {
        id: faker.random.alphaNumeric(8),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake
}

app.get("/users/new", (req,res) => {
    res.json(createFakeUser())
})
app.get("/companies/new", (req,res) => {
    res.json(createFakeCompany())
})
app.get("/user/company", (req,res) =>{
    const data = []
    for (let i=0;i<8;i++){
        data.push({
                user:createFakeUser(),
                company:createFakeCompany()
            })
    }
    res.json(data)
})

app.listen( port, () => console.log(`Running on ${port}`))