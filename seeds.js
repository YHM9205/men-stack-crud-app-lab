const mongoose = require("mongoose")
const Car = require("./models/car")

'mongodb://localhost:27017/carDB'

const myCars = [
    { brand:'Ford', model: 'Turuas', year: 2012, isElectric:false},
    { brand:'Ford', model: 'F-150', year: 2012, isElectric:false},
    { brand:'Mazda', model: 'CX-9', year: 2018, isElectric:false},
];

async function seedDatabase() { //connection to the database
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")

        await Car.insertMany(myCars)
        console.log(myCars)
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


seedDatabase()