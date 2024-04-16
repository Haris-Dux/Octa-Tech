import mongoose from "mongoose";

const queriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
    },
    message: {
        type: String,
        required: [true, 'Please enter your message'],
    },

}, { timeStamps: true })

export const Queries = mongoose.model('Queries', queriesSchema);