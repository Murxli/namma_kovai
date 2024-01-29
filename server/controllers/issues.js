import Issue from "../models/Issue.js";
import mongoose from "mongoose";


export const getissues = async (req,res) => {
    try{
        const _id = req.query._id;
        const userId = req.query.userId;
        console.log(userId);
        // let issues = null;
        // if (_id) {
        //   issues = await Issue.find({_id})
        // } else {
        //   issues = await Issue.find({userId})
        // }
        const issues = _id!='null' ? await Issue.find({ _id }) : await Issue.find({ userId });
        res.status(200).json(issues);
    }catch(err){
        console.log(err.message)
        res.status(404).json({message:err.message});
    }
}

export const getbyissuestatus= async (req,res) => {
    try{
        const {issue_status} = req.params;
        console.log(issue_status);
        const issues = await Issue.find({issue_status})
        res.status(200).json(issues);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}

export const updateissuestatus = async (req,res) => {
    try {
        const { issueId } = req.params;
        const { issue_status } = req.body;
        // Check if there is an issue_type provided
        console.log(`ObjectId(${issueId})`);
        // const updatedIssue = await Issue.findOneAndUpdate(
          //   { _id: new mongoose.Types.ObjectId(issueId) },
          //   { $set: {issue_status:newstatus} },
          //   { new: true, runValidators: true }
          // );
        const updatedIssue = await Issue.findOneAndUpdate(
          { _id: issueId },
          { $set: {issue_status} },
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


export const createIssue = async (req,res) => {
  try{
    const {
      userId, 
      issue_type, 
      department, 
      name, 
      phone_no, 
      address, 
      area, 
      description, 
      images_list, 
      issue_status } = req.body;
    const newIssue = new Issue({
      userId, 
      issue_type, 
      department, 
      name, 
      phone_no, 
      address, 
      area, 
      description, 
      images_list, 
      issue_status 
    })

    await newIssue.save();
    const issues = await Issue.find({userId})
    res.status(201).json(issues);
  }catch(err){
    console.log(err.message)
  }
}