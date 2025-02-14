// To connect mongodb to the backend, we have to use a package called "mongoose".
// mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

import mongoose from "mongoose";


// mongoURI is a unique URI of your mongodb environment. The URI can be related to local environment or cloud environment. Generally these URIs are confidential, so these set to be in .env files and loaded using dotenv library.

// URI for local environment
const mongoURI = "mongodb://localhost:27017/testDB"; 

// URI for cloud environment - dbpassword is the password for the cloud environment
const mongocloudURI = "mongodb+srv://ramunukavarapu:<db_password>@attendancecluster.4p7ps.mongodb.net/?retryWrites=true&w=majority&appName=AttendanceCluster"

const connectDB = async () => {
  try {

    // mongoose has .connect() method which is used to connect the mongodb to the backend, it takes mongoURI as a parameter and connects to the mongodb environment. As it is an asynchronous function, we have to use await, to wait for the response.

    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.error("MongoDB connection error:\n", error);
    process.exit(1);
  }
};

// since, connectDB() is an asynchronous function, we have to call it to execute.
connectDB();
