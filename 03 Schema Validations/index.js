import mongoose from "mongoose";


// Validations are way to check whether the data passes satisfies the conditions or not.
// Schema Validations are used to check the data that is sent to the database is satisfies the conditions or not.
// Some of the conditions i.e, need to satisfy are:
    // Name field is required
    // email also required and should be in lowercase
    // password should be reaches certain length to accept
    // age has to reach the boundary limit


// Example for schema validation

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  age: {
    type: Number,
    min: [18, 'Age must be at least 18'],
    max: [100, 'Age cannot exceed 100']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
