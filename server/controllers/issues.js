import Issue from "../models/Issue.js";
import mongoose from "mongoose";


export const getissues = async (req,res) => {
    try{
        const issues = await Issue.find();
        res.status(200).json(issues);
    }catch(err){
        console.log(err.message)
        res.status(404).json({message:err.message});
    }
}

export const getdeptissues = async (req,res) => {
    try{
        console.log("adsf");
        const {department} = req.params;
        console.log(department);
        const issues = await Issue.find({department})
        res.status(200).json(issues);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}

export const updateissuestatus = async (req,res) => {
    try {
        const { issueId } = req.params;
        const { newstatus } = req.body;
    
        // Check if there is an issue_type provided
        console.log(`ObjectId(${issueId})`);
        console.log(newstatus);
    
        // const updatedIssue = await Issue.findOneAndUpdate(
        //   { _id: new mongoose.Types.ObjectId(issueId) },
        //   { $set: {issue_status:newstatus} },
        //   { new: true, runValidators: true }
        // );
        const updatedIssue = await Issue.findOneAndUpdate(
          { _id: issueId },
          { $set: {issue_status:newstatus} },
          { new: true, runValidators: true }
        );
    
        if (!updatedIssue) {
          return res.status(404).json({ message: 'Issue not found.' });
        }
    
        res.status(200).json(updatedIssue);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }