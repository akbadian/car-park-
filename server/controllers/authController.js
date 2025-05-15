const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/User');
const { validationResult } = require('express-validator');
const User = require('../models/User');
require('dotenv').config();
JWT_SECRET = process.env.JWT_SECRET

// Register a new user
exports.register = async (req, res) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.status(400).json({message : 'User already exists'});
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hasedPassword});
    try {
        await newUser.save();
        const token = jwt.sign({
            id : newUser._id,
            email : newUser.email},
            JWT_SECRET,
            { expiresIn : '1h'});
        res.status(201).json({ message : 'User registered successfully', token});
    } catch (error) {
        res.status(500).json({ error : error.message});
    }
}

// Login a user
exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(404).json({message : 'User not found !'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({message : 'Invalid credentials !'});
    }
    const token = jwt.sign({
        id : user._id,
        email : user.email
        },
        JWT_SECRET,
        { expiresIn : '1h'}
    );
    res.status(200).json({
        message : 'Login Successful',
        token,
        user : {
            id : user._id, 
            email : user.email
        }
    });
}