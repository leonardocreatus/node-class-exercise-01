import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    }

})

export const userModel = mongoose.model('User', userSchema)