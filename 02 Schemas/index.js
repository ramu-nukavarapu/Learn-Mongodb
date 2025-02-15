import mongoose from "mongoose";


// Schema defines the structure of a document in the collection. Using schemas, we can create strict collections similar to relational databases.
// mongodb itself a schema-less, but mongoose allows us to define schemas for better data consistency.

const userSchema = mongoose.Schema({
    name: String,
    age: Number
})


// model is a javascript representation of a mongodb collection. It creates from a schema and provides interface to create, read, updata and delete operations
// without this model, the data is not saved into the database. The schema just provides the structure, whereas model allows you to interact with mongodb collection
// It takes two main parameters, one is string -> which is collection in the database and the other is schema -> defines the structure.

const user = mongoose.model("User", userSchema)

export {user}
