import asyncHandler from 'express-async-handler';
import { Queries } from '../models/queriesModel.js';


// @desc    Create Contact Queries
// @route   POST /api/queries/create
// @access  Private
export const createQueries = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: "Please add all fields" });
    }

    // CREATE USER
    const query = await Queries.create({
        name,
        email,
        message,
    })

    if (query) {
        res.status(201).json({
            _id: query.id,
            name: query.name,
            email: query.email,
            message: query.message,
        })
    } else {
        res.status(400).json({ message: "Invalid Data" });
    }
})


// @desc    Get All Queries
// @route   POST /api/queries/get
// @access  Private
export const getQueries = asyncHandler(async (req, res) => {

    const queries = await Queries.find();

    if (queries) {
        // Map the queries to the desired format
        const formattedQueries = queries.map(query => ({
            _id: query._id,
            name: query.name,
            email: query.email,
            message: query.message,
        }));

        res.status(200).json(formattedQueries);
    } else {
        res.status(400).json({ message: "No queries found" });
    }
})


// @desc    Delete Queries
// @route   GET /api/queries/delete
// @access  Private
export const deleteQueries = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({ message: "Invalid Data" });
    }

    const deletedQuery = await Queries.deleteOne({ _id: id });

    if (deletedQuery.deletedCount > 0) {
        return res.status(200).json({
            id: id,
            message: "Query deleted"
        });
    }

    return res.status(404).json({ message: "Query not found or already deleted" });
})