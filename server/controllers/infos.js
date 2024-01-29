import Info from "../models/Info.js"
import mongoose from "mongoose"

export const getinfos = async (req,res) =>{
    try{
        const infos = await Info.find();
        res.status(200).json(infos);
    }catch(err){
        console.log(err.message);
        res.status(404).json({message:err.message});
    }
}


export const postinfo = async (req,res) => { 
    try{
        const { 
            info_title,
            info_dept,
            description
        } = req.body;
        const newinfo = new Info({
            info_title,
            info_dept,
            description
        })
        const savedinfo = await newinfo.save();
        res.status(201).json(savedinfo);
    }catch (err) {
        res.status(500).json({ error: err.messaage})
    }
}