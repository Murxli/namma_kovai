import User from "../models/User.js"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

export const getusers = async (req,res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        console.log(err.message);
        res.status(404).json({message:err.message})
    }
}

export const getemailuser = async (req,res) => {
    try{
        const {email} = req.params;
        const user = await User.find({email});
        res.status(200).json(user)
    }catch(err){
        console.log(err.message);
        res.status(404).json({message:err.message})
    }
}

export const createuser = async (req,res) => {
    try{
        const {
            userName,
            email,
            password,
            phone_no,
            address,
            area
        } = req.body;
        console.log(password);
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            userName,
            email,
            password:passwordHash,
            phone_no,
            address,
            area
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
}